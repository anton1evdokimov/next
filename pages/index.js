import Head from "next/head";
import Link from "next/link";
import { MainContainer } from "../components/MainContainer";
import { useEffect, useRef, useState } from "react";

const Index = () => {

  const [data, setData] = useState(10)
  const workerRef = useRef(null)
  const [messages, setMessages] = useState([]);

  console.log(messages)

  useEffect(()=>{

    window.addEventListener('storage', (event) => {
      if(data !== event.newValue) {
        setData(event.newValue);
        if(!event.newValue%2){
      document.body.className = "dark"
    }
    else{
      document.body.className = "light"
    }
      }
    })

     // ВАЖНО: путь зависит от сборщика (Vite/Webpack)
    workerRef.current = new SharedWorker(
      new URL("./workers/sharedWorker.js", import.meta.url),
      { type: "module" }
    );

    const port = workerRef.current.port;

    port.onmessage = (e) => {
      console.log("From worker:", e.data);
      setMessages(prev => [...prev, e.data.payload]);
    };

    port.start();

    return () => {
      port.close();
    };
  },[])

  const onClick = () => {
    if(!data%2){
      document.body.className = "dark"
    }
    else{
      document.body.className = "light"
    }
    setData(data+1)
    localStorage.setItem("data", data+1)

    sendMessage();
  }

  const sendMessage = () => {
    workerRef.current.port.postMessage("Hello from tab! " + data);
  };

  return (
    <MainContainer keywords="main-page">
      <div>
        <h1>Main page {data}</h1>
        <button onClick={onClick}>Change</button>
        {/* <img alt="" src="https://ir.ozone.ru/s3/multimedia-1-v/wc1000/8879636443.jpg" /> */}
       <h3>Text below images</h3>
      </div>
    </MainContainer>
  );
};

export default Index;

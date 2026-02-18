// sharedWorker.js

const connections = [];

onconnect = function (event) {
  const port = event.ports[0];
  connections.push(port);

  console.log("New tab connected. Total:", connections.length);

  port.onmessage = function (e) {
    const message = e.data;

    console.log("Message from tab:", message);

    // рассылаем всем вкладкам
    connections.forEach(p => {
    if(p!==port){
      p.postMessage({
        type: "broadcast",
        payload: message,
      });
    }
    });
  };

  port.start();
};

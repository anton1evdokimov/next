import Head from "next/head";
import Link from "next/link";
import { MainContainer } from "../components/MainContainer";

const Index = () => {
  return (
    <MainContainer keywords="main-page">
      <div>
        <h1>Main page</h1>
        <style jsx>
          {`
            .navbar {
              background-color: orange;
              display: flex;
              gap: 4px;
            }
          `}
        </style>
      </div>
    </MainContainer>
  );
};

export default Index;

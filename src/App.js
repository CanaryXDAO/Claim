import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Drop from "./components/Drop/Drop";
import Map from "./components/Map/Map";
import Airdrop from "./components/Airdrop/Airdrop";
import TokkenSupply from "./components/TokkenSupply/TokkenSupply";
import Comment from "./components/comment/Comment";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <Airdrop
        nftContractAddress={"0x4ec9272f3ce3c58caf19f85be43299126a787a6c"}
        claimContractAddress={"0xdC68A63A4c4e6C3eEeD2c59101753bf8A2023D92"}
        claimTokenName={"CYPHER"}
      />
      <Map />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;

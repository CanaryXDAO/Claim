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
        nftContractAddress={"0xbE5FAC12550196433BedD05DE52A2a0ce12a04Cc"}
        claimContractAddress={"0xbE5FAC12550196433BedD05DE52A2a0ce12a04Cc"}
        claimTokenName={"ALPHAGOLD"}
      />
      <Map />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;

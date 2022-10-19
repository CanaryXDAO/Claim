import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { dataB } from "./Data";
import Card from "./Card";
import { useWallet } from "use-wallet";
import Web3 from "web3";
import config from "../../config";
import nftABI from "../../config/NFT.json";
import AirdropABI from "../../config/Airdrop.json";
import Select from "react-select";
import airdrops from "../../config/airdrop";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from 'react-bootstrap/Spinner';
import { Image, Shimmer } from 'react-shimmer'

const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  // min-height: 100%;
  width: 100%;
  padding: 0 0 5rem 0;

  background-color: #fff;

  @media only screen and (max-width: 768px) {
    width: 100%;

    background-size: auto 100%;
    flex-direction: column;
  }
`;

const Width = styled.div`
  width: 1300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    width: 95%;
  }
  @media only screen and (max-width: 1100px) {
    //   flex-direction: column;
    //  margin: 7rem  0 0 0;
    background-size: 40rem 25rem;
    height: 25rem;
    justify-content: center;
  }

  @media only screen and (max-width: 510px) {
    width: 98%;
    //margin: 4rem  0 0 0;
    background-position: center center;
    background-size: auto auto;
  }
`;

const Left = styled(motion.div)`
  width: 60%;

  @media only screen and (max-width: 1100px) {
    width: 50%;
  }
  @media only screen and (max-width: 998px) {
    width: 85%;
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

const Right = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  // height: 37rem;

  //   @media only screen and (max-width: 1100px) {
  //     width: 50%;
  //     margin: 3rem  0 0 0;
  //     height: auto;
  // }
  @media only screen and (max-width: 998px) {
    width: 65%;
  }

  @media only screen and (max-width: 768px) {
    width: 25rem;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Ht = styled.h2`
  color: #212529 !important;
  font-size: 2.25rem;
  margin-bottom: 1rem;
  // text-align: left;
  //font-family: 'PT Serif', serif !important;
  line-height: 1.15;
  font-weight: bold;

  @media only screen and (max-width: 1300px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const T = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: left;
  color: #212529;
  // font-family: 'Nunito Sans', sans-serif;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Line = styled.div`
  height: 0.25rem;
  width: 4rem;
  background: #c69d66;
  margin: 0 0 2rem 0;
`;
const Button = styled.button`
  background-color: #212529;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  height: 3.5rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    background-color: #32383e;
  }
`;
const ButtonR = styled.button`
  background-color: #c69d66;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  height: 3.5rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  //margin: 0 0 0 1rem;

  &:hover {
    background-color: #32383e;
  }
`;
//;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  justify-content: space-between;
  width: 20rem;
  margin: 3rem 0 0 0;
  @media only screen and (max-width: 768px) {
    width: 98%;
    flex-direction: column;
  }
`;

// const Container = styled.div`
//   width: 70%;
//   margin: 2rem 0;
// `;

const OneNFTItem = ({ data }) => {
  return (
    <Col>
      <Image
        height={200}
        width={200}
        src={data.image}
        fallback={<Shimmer width={200} height={200} />}

        NativeImgProps={{ height: 200, width: 200, marginTop: 15 }}
      />
    
    </Col>
  );
};
const Airdrop = ({
  claimTokenName,
}) => {
  const resposive = {
    0: {
      items: 1,
    },
    650: {
      items: 2,
    },
    1335: {
      items: 3,
    },
  };
  const wallet = useWallet();

  const [airdropOptions, setAirdropOptions] = useState([]);
  const [selectedCollection,setSelectedCollection ] = useState()
  useEffect(() => {
    let _airdropOptions = [];
    for (let airdrop of airdrops) {
      _airdropOptions.push({ value: airdrop, label: airdrop.name });
    }
    setAirdropOptions(_airdropOptions)
  }, []);

  useEffect(() => {
    if (selectedCollection) {
        loadMyNFTs()
      }
  },[selectedCollection])

 
  const [myNFTs, setNFTs] = useState([]);
  const [isLoadingData, setLoadingData] = useState(false);

  const [myClaimableBalance, setMyClaimableBalance] = useState(0);
  const [airdropContract, setAirdropContract] = useState();

  const getNFTInfo = async (uri) => {
    const trimmedURI = uri.replace("ipfs://", "");
    const url = config.getRandomIPFSURL() + trimmedURI;

    console.log("Sasasasasa", url);
    const resp = await axios.get(url);

    const nft = {
      ...resp.data,
    };
    const imgURL = config.getRandomIPFSURL() + nft.image.replace("ipfs://", "");

    nft.image = imgURL;

    return nft;
  };

  const getClaimStatus = async (tokenId) => {
    let isClaimed = false;
    try {
      isClaimed = await airdropContract.methods.claims(tokenId).call();
    } catch (er) {}

    return isClaimed;
  };
  const loadMyNFTs = async () => {
    setLoadingData(true)
    const account = wallet.account
    try {
      const web3 = new Web3(wallet.ethereum ? wallet.ethereum : config.RPC);
    const _airDropContract = new web3.eth.Contract(
      AirdropABI,
      selectedCollection.AIRDROPContract
    );

    let airdropTokenPerNFT = "0";
    try {
      airdropTokenPerNFT = await _airDropContract.methods.tokensPerNFT().call();
    } catch (error) {}
    airdropTokenPerNFT = Number(Web3.utils.fromWei(airdropTokenPerNFT));

    setAirdropContract(_airDropContract);

    let myTotalClaimableBalance = 0;
    const nftContract = new web3.eth.Contract(nftABI, selectedCollection.NFTContact);
    const baseURI = await nftContract.methods.uriPrefix().call();
    const _myNFTs = [];
    if (wallet.account) {
      const myNFTsId = await nftContract.methods
        .walletOfOwner(account)
        .call();
      console.log({ myNFTsId });
      for (let nftId of myNFTsId) {
        const nft = await getNFTInfo(baseURI + nftId + ".json");
        const claimStatus = await getClaimStatus(nftId);
        nft.claimStatus = claimStatus;
        if (!claimStatus) {
          myTotalClaimableBalance += airdropTokenPerNFT;
        }
        nft.id = nftId;
        _myNFTs.push(nft);
      }
    }
    setNFTs(_myNFTs);
    setMyClaimableBalance(myTotalClaimableBalance);
    } catch (er) {
      
   }
    setLoadingData(false)

  };

  useEffect(() => {
    wallet.connect();
  }, []);

  useEffect(() => {
    if (wallet && wallet.account && wallet.chainId != 19) {
      requestAddNetwork();
    }
    if (wallet.account && selectedCollection) {
      console.log("Saasloading,")
      loadMyNFTs();
    }

  }, [wallet]); 

  const requestAddNetwork = () => {
    window.ethereum
      .request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0x13",
            chainName: "SongBird Chain",
            nativeCurrency: {
              name: "SongBird",
              symbol: "SGB",
              decimals: 18,
            },
            rpcUrls: ["https://sgbnode3.canaryx.finance/rpc"],
            blockExplorerUrls: ["https://songbird-explorer.flare.network"],
          },
        ],
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClaim = async () => {
    try {
      const claimableNFTs = [];

      for (let nft of myNFTs) {
        if (!nft.claimStatus) {
          claimableNFTs.push(nft.nftId);
        }
      }

      if (claimableNFTs.length == 0) {
        alert("Nothing to Claim");
        return;
      }

      await airdropContract.methods
        .claim(claimableNFTs)
        .send({ from: wallet.account });
    } catch (err) {}
  };

  const renderNFTs = () => {
    return (
      <div
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          // width: "100%",
        }}
      >
        <Container style={{ width: "80%" }}>
          <Ht>Your NFTs</Ht>

          <Row>
            {myNFTs.map((nft) => {
              return <OneNFTItem data={nft} />;
            })}
          </Row>
        </Container>

        <Container style={{ width: "50%", placeSelf: "center" }}>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexDirection: "row",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ht style={{ fontSize: 25 }}>Your Claimable Balance:</Ht>

            <Ht style={{ fontSize: 25, fontWeight: "500", marginLeft: 5 }}>
              {myClaimableBalance} Canary
            </Ht>
          </div>
          <ButtonR
            onClick={() => {
              handleClaim();
            }}
          >
            Claim Now
          </ButtonR>
        </Container>
      </div>
    );
  };


  const dropDownStyles = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
      // padding: 20,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      // width: 200,
    }),
    singleValue: (provided, state) => {
      // const opacity = state.isDisabled ? 0.5 : 1;
      // const transition = 'opacity 300ms';
  
      // return { ...provided, opacity, transition };
    }
  }
  
  const renderLayout = () => {
    if (isLoadingData) {
      return <Spinner
        style={{ marginTop: 10 }}
        size="big"
        animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

    }
    if (!selectedCollection) {
     return <Ht style={{fontSize:25,marginTop:10}}>Please Select NFT Collection</Ht>
    }
    return myNFTs.length == 0 ? <Ht>No NFTs</Ht> : renderNFTs();
  };

  return (
    <HomePage style={{ background: "#00000021" }}>
      <Width>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ht>CLAIM AIRDROP</Ht>
          <Line />
          <Select
          //  styles={dropDownStyles}
            options={airdropOptions}
            onChange={(collection) => {
              console.log("asasa",collection.value)
              setSelectedCollection({...collection.value})
            }}
            placeholder="Select NFT Collection" />

         

        </div>

        <Container style={{ textAlign: "-webkit-center" }}>
          {wallet.account ? (
            renderLayout()
          ) : (
            <ButtonR
              onClick={() => {
                wallet.connect();
              }}
            >
              CONNECT WALLET
            </ButtonR>
          )}
        </Container>
      </Width>
    </HomePage>
  );
};

export default Airdrop;

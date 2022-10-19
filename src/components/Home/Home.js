import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import img from '../Content/bg.jpg'
import coin from '../Content/coin.png'
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";

const HomePage = styled.section`
  display: flex;
  //flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100%;
  width: 100%;
  padding: 10rem  0;

 background-color: rgba(249, 232, 202, 1);

 background-image: url(${img});
 background-size: 100% 100%;
// background-position: right center;
 background-repeat: no-repeat;
// background: red;

@media only screen and (max-width: 768px) {
 
    width: 100%;
   
    background-size: auto 100%;
    flex-direction: column;
}`

const Width = styled.div`
      width: 1300px;
      height: 28rem;
      display: flex;
     
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
`

const Left = styled(motion.div)`
        width: 55%;
     // background: red;

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
        width: 50%;
        height: 37rem;


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
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: left;
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
    color: #212529 !important;
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
`
const Button = styled.button`
  background-color: #212529;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
  color: #FFF;
  font-size: 1rem;
  font-weight: bold;
  height: 3.5rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover{
    background-color: #32383e;
  }
`
const ButtonR = styled.button`
  background-color: #c69d66;
  border: none;
  border-radius: 0.25rem;
  padding: 0 1.5rem;
  color: #FFF;
  font-size: 1rem;
  font-weight: bold;
  height: 3.5rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  //margin: 0 0 0 1rem;

  &:hover{
    background-color: #32383e;
  }
`
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
`

const ShowButton = styled(Link)`
   // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: #404040; //
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 4rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 1rem ;
    bottom: 0;
    display: grid;
    place-items: center;
    z-index: 7;
    @media only screen and (max-width: 768px) {
      right: 2rem ;
    bottom: 5rem;
    }
    
`


const Home = () => {
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  


    return (
        <HomePage id="home">

          {/* <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#98C87D'}}> */}
          <Width>
              <Left>
                <T>
                CANARYX FOUNDER NFT
                </T>
                <Ht>
                Airdrop Claim

                </Ht>
                <Line />

                <T style={{color:'#777777'}}>
                Each CanaryX Fonder NFT is eligible for an exclusive drop of the CanaryX Exchange Token
                </T>

                <ButtonContainer>
                    <Button>CLAIM</Button>
                    {/* <ButtonR>CONNECT WALLET</ButtonR> */}
                </ButtonContainer>
                
               
              </Left>
            
              <Right 
                  initial={{ x: 0, y:0}}
                  animate={{ x: -15, y: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity ,repeatType: "reverse",
                  }}
              // whileHover={{ scale: 1.1,boxShadow:"0 0 25px #ff7b00"}}
              >
                   <img src={coin} alt='' style={{width:'100%',height:'100%'}} />
              </Right> 

          </Width>
          {/* </div> */}
           

         
            
            
        </HomePage>
    )
}

export default Home

import React from 'react'
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs'

const T = styled.p`
    
    font-weight: bolder;
    font-size: 3rem;
    
    text-align: center;
    color: #FFF;
    margin: 2rem 0 1rem 0;
   // font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const Card = (props) => {
  return (
    <div style={{margin:"0 auto",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <img src={props.img} style={{height:'4rem',width:'4rem'}} />
        <T style={{}}>{props.name ? props.name : "50+" }</T> 
       
                    <T style={{margin:' 0 0 0', color:'#fff',fontSize:'1rem',fontWeight:'lighter'}}>Claim</T>
       
    </div>
  )
}

export default Card
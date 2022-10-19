import React from 'react'
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs'

const T = styled.p`
    
    font-weight: 500;
    font-size: 1.5rem;
    
    text-align: center;
    color: #212529;
   // font-family: 'Nunito Sans', sans-serif;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

const Card = (props) => {
  return (
    <div style={{margin:"0 auto",display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <img src={props.img} style={{height:'9rem',width:'16rem'}} />
        <T style={{margin:'1rem 0 0 0'}}>{props.name}</T> 
        <div style={{display:'flex',alignItems:'center'}}>
                    <T style={{margin:' 0 0 0', color:'#c69d66',fontSize:'1rem'}}>Claim</T>
                    <BsArrowRight style={{color:'#c69d66',margin:'0 0 0 1rem'}} />
                </div>
    </div>
  )
}

export default Card
import React from 'react'
import map from '../Content/map.png'
import styled from 'styled-components'

const StyledMap = styled.div`
    height: 25rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.div`
    height: 20rem;
    width: 50rem;
    position: relative;
`

const Effect = styled.div`
    background: rgba(255,255,255,0.5);
    width: 100%;
    height: 8rem;
    position: absolute;
    top: 50%;
`

const Map = () => {
  return (
    <StyledMap>
        <Img>
            <img src={map} alt="" style={{height:'100%',width:'100%'}} />
            <Effect />
        </Img>
    </StyledMap>
  )
}

export default Map
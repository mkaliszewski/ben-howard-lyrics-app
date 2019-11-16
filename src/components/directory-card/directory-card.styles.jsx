import styled from 'styled-components'
import Tilt from "react-tilt";

export const TiltCard = styled(Tilt)`
    margin: 32px;
`


export const TiltCardImage = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 16px;
    
    &:hover{
        transform: scale(1.05);
        transition: transform 4s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`

export const DirectoryCardDiv = styled.div`
    display:flex;
    justify-content: center;
`
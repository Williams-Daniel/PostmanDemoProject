import styled from "styled-components"
import React from "react"


export  interface Ibutton{
    wid?:string,
    hei?:string,
    GL?:string,
    bg?:string,
    text?:string
    col?:string,
    hovcol?:string,
    MT?:string
}
const GButton:React.FC<Ibutton> = (
    {
        wid,
        hei,
        GL,
        bg,
        text,
        col,
        hovcol,
        MT
    }
)=>{
    return(
        <div>
            <Container
            bg={`${bg}`}
            col={`${col}`}
            hovcol={`${hovcol}`}
            MT={`${MT}`}
            >
                <LogoDiv
                wid={`${wid}`}
                hei={`${hei}`}
                ><LOgo src={GL}/></LogoDiv>
                <Text
                col={`${col}`}
                >{text}</Text>
            </Container>
        </div>
    )
}

export default GButton

const Container = styled.div<{bg:string,col:string,MT:string,hovcol:string}>`
width: 331px;
height: 43px;
border-radius: 3px;
background-color: ${({bg})=>bg};
display: flex;
align-items: center;
justify-content: center;
margin-top: ${({MT})=>MT};
:hover{
    background-color: ${({hovcol})=>hovcol};
}
`
const Text = styled.div<{col:string}>`
font-size: 15px;
color: ${({col})=>col};
`
const LOgo = styled.img`
width: 16pxpx;
height: 16px;
object-fit: contain;
`
const LogoDiv = styled.div<{wid:string,hei:string}>`
width: ${({wid})=>wid};
height: ${({hei})=>hei};
background-color: white;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-radius: 2px;
right: 80px;
`
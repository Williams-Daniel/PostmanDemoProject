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
    width?:string
    height?:string
    fns?:string
    fnw?:string
    Border?:string
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
        MT,
        width,
        height,
        fns,
        fnw,
        Border
    }
)=>{
    return(
        <div>
            <Container
            width={`${width}`}
            fns={`${fns}`}
            height={`${height}`}
            bg={`${bg}`}
            col={`${col}`}
            hovcol={`${hovcol}`}
            MT={`${MT}`}
            Border={`${Border}`}
            >
                <LogoDiv
                wid={`${wid}`}
                hei={`${hei}`}
                ><LOgo src={GL}/></LogoDiv>
                <Text
                fns={`${fns}`}
                fnw={`${fnw}`}
                col={`${col}`}
                >{text}</Text>
            </Container>
        </div>
    )
}

export default GButton

const Container = styled.div<{bg:string,col:string,MT:string,hovcol:string,width:string,height:string,fns:string, Border:string}>`
width: ${({width})=>width};
height: ${({height})=>height};
border-radius: 3px;
background-color: ${({bg})=>bg};
display: flex;
align-items: center;
justify-content: center;
margin-top: ${({MT})=>MT};
border: ${({Border})=>Border};
:hover{
    background-color: ${({hovcol})=>hovcol};
}
`
const Text = styled.div<{col:string,fns:string,fnw:string}>`
font-size: ${({fns})=>fns};
font-weight: ${({fnw})=>fnw};
color: ${({col})=>col};
`
const LOgo = styled.img`
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
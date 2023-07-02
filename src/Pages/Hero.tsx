import styled from "styled-components";
import GButton from "../Components/Statics/GButton";
import apple from "../Assets/Apple.svg";
import micro from "../Assets/microsoft.svg";
import linux from "../Assets/linux-.svg";
import heropic from "../Assets/heropics.png";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <LeftHolder>
              <Title>
                Build
                <br />
              <div style={{fontSize:"25px"}}>APIs Together</div>  
              </Title>
              <Text>
                Over 25 million developers use Postman. Get started by signing
                up or downloading the desktop app.
              </Text>
              <InputHolder>
                <Input
                  placeholder="jsmith@example.com
"
                />
                <GButton
                  width="130px"
                  height="37px"
                  col="white"
                  bg="#FF6C37"
                  brad="0 2px 2px 0"
                  text="Sign up for Free"
                  fns="13px"
                  fnw="500"
                />
              </InputHolder>
              <Box>
                <Message>Download the desktop app for</Message>
                <Div>
                  <Logo1 src={micro} />
                  <Logo2 src={apple} />
                  <Logo3 src={linux} />
                </Div>
              </Box>
            </LeftHolder>
          </Left>
            <Img src={heropic}/>    
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 1263px;
  height: 600px;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const Main = styled.div`
  width: 98%;
  height: 100%;
  /* background-color: darkorange; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
width: 40%;
`;
const LeftHolder = styled.div`
width: 75%;
margin-left: 35px;
/* background-color: brown; */
`;
const Title = styled.div`
font-size: 40px;
font-weight: 500;
`;
const Text = styled.div`
font-size: 17px;
line-height: 27px;
margin-top: 10px ;
margin-bottom: 20px ;
`;
const InputHolder = styled.div`
  width: 380px;
  height: 37px;
  background-color: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff6c37;
`;
const Input = styled.input`
  width: 63%;
  height: 89%;
  border-radius: 0 6px 6px 0;
  outline: none;
  border: 0;
  padding-left: 10px;

  ::placeholder {
    font-size: 14px;
    color: #acacac;
  }
  :focus {
    border: 2px solid #74aef6;
    border-radius: 2px 0 0 2px;
  }
`;
const Box = styled.div`
margin-top: 20px;
`;
const Message = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #6b6b6b;
`;
const Div = styled.div`
width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo1 = styled.img``;
const Logo2 = styled.img``;
const Logo3 = styled.img``;

const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`;

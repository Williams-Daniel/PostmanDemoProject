import styled from "styled-components";
import InputProps from "../../Components/Reuse/InputProps";
import logo from "../../Assets/pm-logo-1.svg";
import tick from "../../Assets/tick.svg";
import GButton from "../../Components/Statics/GButton";
import GoogleLogo from "../../Assets/google-logo-icon-sign-in.svg";

const SignIn = () => {
  return (
    <div>
      <Container>
        <Body>
          <Logo src={logo} />
          <Main>
            <SignInDiv>
              <Left>Sign In</Left>
              <div style={{ color: "#3E92F2", marginRight: "5px" }}>
                Create Account
              </div>{" "}
              instead?
            </SignInDiv>
            <InputProps Username username="Email or Username" MT="20px" />
            <InputProps Password password="Password" />
            <ForgotPassword>
              <LeftSide>
                <Box>
                  <Icon src={tick} />
                </Box>
                <Text> Stay signed in for 30 days</Text>
              </LeftSide>
              Forgot Password?
            </ForgotPassword>
            <GButton
              text="Sign in"
              bg="#F26B3A"
              col="white"
              MT="20px"
              hovcol="#ff6027"
              height="43px"
              width="331px"
              fns="15px"
              brad="3px"
            />
            <LineDiv>
              <Ln></Ln>
              <OR>or</OR>
              <Ln></Ln>
            </LineDiv>
            <GButton
              wid="40px"
              hei="40px"
              bg="#4285F4"
              hovcol="#327bef"
              col="white"
              GL={GoogleLogo}
              text="Sign in with Google"
              MT="10px"
              height="43px"
              width="331px"
              fns="15px"
              brad="3px"
            />
            <GButton
              text="Sign in with SSO"
              bg="#F2F2F2"
              col="#6B6B6B"
              MT="20px"
              height="43px"
              width="331px"
              fns="15px"
              brad="3px"
            />
          </Main>
        </Body>
      </Container>
    </div>
  );
};

export default SignIn;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;
const Body = styled.div`
  height: 550px;
  width: 390px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Main = styled.div`
  width: 85%;
  height: 90%;
  /* background-color: aqua; */
  margin-bottom: 70px;
`;
const Logo = styled.img`
  height: 100px;
  object-fit: contain;
  position: relative;
  top: -5px;
  /* left: 10px; */
`;
const SignInDiv = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-size: 13px;
  font-weight: 500;
`;
const Left = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-right: 125px;
`;
const ForgotPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  color: #4285f4;
  margin-top: 15px;
`;
const LeftSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ff6c37;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-right: 10px;
`;
const Icon = styled.img``;
const Text = styled.div`
  font-size: 13px;
  color: black;
  font-weight: 400;
`;
const LineDiv = styled.div`
  width: 100%;
  /* background-color: orange;  */
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ln = styled.div`
  height: 0.5px;
  width: 80px;
  background-color: #dbdbdb;
`;
const OR = styled.div`
  margin: 0 20px;
  font-size: 13px;
  color: #696868;
`;

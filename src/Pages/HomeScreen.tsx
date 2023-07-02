import styled from "styled-components";
import SignIn from "./Register/SignIn";

const HomeScreen = () => {
  return <div>
    <Container>
        <Main>
        </Main>
    </Container>
  </div>;
};

export default HomeScreen;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
`
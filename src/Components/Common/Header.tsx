import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import GButton from "../Statics/GButton";
import logo from "../../Assets/pm-logo-1.svg";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>
            <Logo src={logo}/>
            <Navs>
              Product
              <Icon />
            </Navs>
            <Navs>Pricing</Navs>
            <Navs>
              Enterprise
              <Icon />
            </Navs>
            <Navs>
              Resources and support
              <Icon />
            </Navs>
            <Navs>Explore</Navs>
          </Left>

          <Middle>
            <Button>
              <SearchIcon />
              <Text>Search Postman</Text>
            </Button>
          </Middle>
          <Right>
            <GButton width="66px" height="32px" text="Sign In"  fns="13px" Border="1px solid #bababa"/>
            <GButton width="130px" height="32px" text="Sign Up for Free"  fns="13px" bg="#FF6C37" col="white" fnw="500"/>
          </Right>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
`;
const Main = styled.div`
  height: 100%;
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
height: 20px;
width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const Middle = styled.div``;
const Right = styled.div`
width: 210px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
object-fit: contain;
height: 32px;
`;
const Navs = styled.div`
font-size: 15px;
font-weight: 500;
color: #6B6B6B;
`;
const Icon = styled(SlArrowDown)`
font-size: 9px;
margin-left: 5px;

`;
const Button = styled.div`
  height: 35px;
  width: 190px;
  background-color: #F2F2F2;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
const SearchIcon = styled(CiSearch)`
  font-size: 20px;
  margin-right: 10px;
`;
const Text = styled.div`
  font-size: 13px;
`;

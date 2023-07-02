import styled from "styled-components";
import { Iprops } from "../../Utils/Interface";


const InputProps:React.FC<Iprops> = (
    {
        Username,
        Email,
        Password,

        username,
        email,
        password,
        MT
    }
) => {
  return (
    <div>
      <Container
      MT={`${MT}`}
      >
        <Main>
          {
            Username?(
                <Div>
            <Title>{username}</Title>
            <InputHolder>
              <Input />
            </InputHolder>
          </Div>
            ):null
          }
          {
            Email?(
                <Div>
            <Title>{email}</Title>
            <InputHolder>
              <Input />
            </InputHolder>
          </Div>
            ):null
          }
          {
            Password?(
                <Div>
            <Title>{password}</Title>
            <InputHolder>
              <Input />
            </InputHolder>
          </Div>
            ):null
          }
        </Main>
      </Container>
    </div>
  );
};

export default InputProps;

const Container = styled.div<{MT:string}>`
display: flex;
justify-content: center;
align-items: center;
margin-top: ${({MT})=>MT};
`;
const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Div = styled.div`
  margin-top: 10px;
`;
const Title = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 96%;
  height: 86%;
  outline: none;
  border-radius: 3px;
  border: 0;
  font-size: 15px;
  padding-left: 10px;
  background-color: #F2F2F2;
  border: 1px solid silver;
  :focus {
    border: 1px solid #f26b3a;
  }
`;
const InputHolder = styled.div`
  width: 331px;
  height: 45px;
  /* background-color: green; */
  border-radius: 3px;
`;

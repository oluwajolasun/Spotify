import { Container, LoginText, LoginButton, LoginDiv } from "../components/styles/Login.styled"
import Footer from "./Footer";

const handleLogin = () => {
  location.href = import.meta.env.VITE_LOGIN || "https://auth-spotify-api.onrender.com/login";
}

const Login = () => {
  return (
    <>
      <Container>
        <LoginDiv>
          <LoginText>SPOTIFY COMPANION <br /> WEB APP</LoginText>
          <LoginButton onClick={ handleLogin }>LOGIN</LoginButton>
        </LoginDiv>
      </Container>
      <Footer />
    </>
  )
}
export default Login
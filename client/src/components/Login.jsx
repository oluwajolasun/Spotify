import { Container, LoginText, LoginButton, LoginDiv } from "../components/styles/Login.styled"
import Footer from "./Footer";

const handleLogin = () => {
  console.log(import.meta.env)
  if (import.meta.env.MODE === "development") {
    location.href = import.meta.env.VITE_LOGIN
  } else {
    location.href = "https://auth-spotify-api.onrender.com/login";
  }
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
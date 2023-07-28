import { Container, LoginText, LoginButton } from "../components/styles/Login.styled"
import Footer from "./Footer";

const handleLogin = () => {
  location.href = "http://localhost:8888/login";
}

const Login = () => {
  return (
    <>
      <Container>
        <div>
          <LoginText>SPOTIFY COMPANION <br /> WEB APP</LoginText>
          <LoginButton onClick={ handleLogin }>LOGIN</LoginButton>
        </div>
      </Container>
      <Footer />
    </>
  )
}
export default Login
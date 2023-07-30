import { FooterDiv } from '../components/styles/Footer.style'

const Footer = () => {
    return (
        <FooterDiv>
            <p>
                <a href={ 'https://oluwajolasun.com/' } target='blank'>made by Oluwajolasun<span />🥀{ new Date().getFullYear() }
                </a>
            </p>
        </FooterDiv>
    )
}
export default Footer
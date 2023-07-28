import { FooterDiv, FooterLink } from '../components/styles/Footer.style'

const Footer = () => {
    return (
        <FooterDiv>
            <p>
                <FooterLink href={ 'https://oluwajolasun.com/' } target='blank'>
                    Designed and Developed by Oluwajolasun
                    <span />
                    🥀
                    { new Date().getFullYear() }
                </FooterLink>
            </p>
        </FooterDiv>
    )
}
export default Footer
import * as s from "./styled"

function Header() {
    const logo = (
        <s.Logo src="src/assets/img/logo.svg" alt="logo"/> 
    )

    const close = (
        <img src="src/assets/img/close.svg" alt="close"/>
    )

    const linkSignup = (
        <s.Title>Entrar</s.Title>
    )

    const linkLogout = (
        <s.Title>Logout</s.Title>
    )
    return (
        <s.Section>
                {/* se pagina cadastro entra Logo e linkSignup */}
                <s.headerSection></s.headerSection>
                <s.headerSection>{logo}</s.headerSection>
                <s.headerSection>{linkSignup}</s.headerSection>        
        </s.Section>
    )
}

export default Header
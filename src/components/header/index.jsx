import { goToLogin, goToPost } from "../../routes/coordenatior"
import * as s from "./styled"
import { useNavigate } from "react-router"

function Header() {
    const navigate = useNavigate()
    const logo = (
        <s.Logo src="src/assets/img/logo.svg" alt="logo"/> 
    )

    const close = (
        <img onClick={()=> goToPost(navigate)} src="src/assets/img/close.svg" alt="close"/>
    )

    const linkSignup = (
        <s.Title onClick={()=>goToLogin(navigate)}>Entrar</s.Title>
    )

    const linkLogout = (
        <s.Title onClick={()=>goToLogin(navigate)}>Logout</s.Title>
    )
    return (
        <s.Section>
                
                {window.location.href.includes("signup") && (
                    <>
                    <s.headerSection></s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkSignup}</s.headerSection>        
                    </>
                )}
                {window.location.href.includes("post") && (
                    <>
                    <s.headerSection></s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkLogout}</s.headerSection>   
                    </>
                )}
                {window.location.href.includes("comment") && (
                    <>
                    <s.headerSection>{close}</s.headerSection>
                    <s.headerSection>{logo}</s.headerSection>
                    <s.headerSection>{linkLogout}</s.headerSection>   
                    </>
                )}
        </s.Section>
    )
}

export default Header
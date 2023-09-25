import * as s from "./styled"
import { Button } from "../../components/buttons/styled"
import { Container } from "../../components/container"
import { Line } from "../../components/line/styled"
import { useNavigate } from "react-router"
import { goToPost, goToSignup } from "../../routes/coordenatior"

function Login(){
    const navigate = useNavigate()

    return(
        <Container>
        <s.Section>
           <s.Banner>
            <s.Logo src="src/assets/img/logo-full.svg" alt="logo-principal" />
            <s.Title>O projeto de rede social da Labenu</s.Title>
            </s.Banner> 
            <s.Form>
                <s.Input type="email" placeholder="E-mail" required></s.Input>
                <s.Input type="password" placeholder="Senha" required></s.Input>
            </s.Form>
            <s.SectionLogin>
                <Button onClick={()=> goToPost(navigate)}>Continuar</Button>
                <Line/>
                <s.ButtonAccount onClick={()=> goToSignup(navigate)}>Crie uma conta</s.ButtonAccount>
            </s.SectionLogin>
        </s.Section>
        </Container>
    )
}

export default Login
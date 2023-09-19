import * as s from "./styled"
import { Button } from "../../components/button/styled"
import { Container } from "../../components/container"

function Login(){
    return(
        <Container>
        <s.Section>
           <s.Banner>
            <s.Logo src="src/assets/img/logo-full.svg" alt="logo-principal" />
            <s.Title>O projeto de rede social da Labenu</s.Title>
            </s.Banner> 
            <s.Form>
                <s.Input type="email" placeholder="E-mail"></s.Input>
                <s.Input type="password" placeholder="Senha"></s.Input>
            </s.Form>
            <s.SectionLogin>
                <Button href="/">Continuar</Button>
                <s.Line/>
                <s.ButtonAccount href="/">Crie uma conta</s.ButtonAccount>
            </s.SectionLogin>
        </s.Section>
        </Container>
    )
}

export default Login
import { Button } from "../../components/buttons/styled"
import { Container } from "../../components/container"
import Header from "../../components/header"
import * as s from "./styled"

function Signup() {
    return (
        <>
            <Header />
            <s.TypewriterText>
            <s.Title>Olá, boas vindas aoLabEddit ;)</s.Title>
            </s.TypewriterText>
            <Container>
                <s.Section>
                    <s.Form>
                        <s.Input type="text" placeholder="Apelido" required></s.Input>
                        <s.Input type="email" placeholder="E-mail" required></s.Input>
                        <s.Input type="password" placeholder="Senha" required></s.Input>
                    </s.Form>
                    <s.SubTitle>Ao continuar, você concorda com o nosso <s.Link href="/">Contrato de usuário</s.Link> e nossa <s.Link href="/">Política de Privacidade</s.Link></s.SubTitle>
                    <s.Newsletter>
                        <s.IconNewsletter src="src/assets/img/rectangle.svg" alt="retangulo-check" />
                        <s.SubTitle>Eu concordo em receber emails sobre coisas legais no Labeddit</s.SubTitle>
                    </s.Newsletter>
                <Button>cadastrar</Button>
                </s.Section>
            </Container>
        </>
    )
}

export default Signup
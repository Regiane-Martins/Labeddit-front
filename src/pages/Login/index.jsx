import * as s from "./styled"
import { Button } from "../../components/buttons/styled"
import { Container } from "../../components/container"
import { Line } from "../../components/line/styled"
import { useNavigate } from "react-router"
import { goToPost, goToSignup } from "../../routes/coordenatior"
import { userForm } from "../../hooks/useForm"

function Login(){
    const navigate = useNavigate()
    const [form, onChange, resetForm] = userForm({email: "", senha: ""})

    const sendFormLogin = (event)=>{
        event.preventDefault()
        console.log(`${form.email}`);
        console.log(`${form.senha}`);
    }

    return(
        <Container>
        <s.Section>
           <s.Banner>
            <s.Logo src="src/assets/img/logo-full.svg" alt="logo-principal" />
            <s.Title>O projeto de rede social da Labenu</s.Title>
            </s.Banner> 
            <s.Form onSubmit={sendFormLogin}>
                <s.Input 
                type="email" 
                placeholder="E-mail" 
                value={form.email}
                onChange={onChange}
                required>
                </s.Input>

                <s.Input 
                type="password" 
                placeholder="Senha" 
                value={form.senha}
                onChange={onChange}
                required>    
                </s.Input>
                
                <Button onClick={()=> goToPost(navigate)}>Continuar</Button>
            </s.Form>
            <s.SectionLogin>
                <Line/>
                <s.ButtonAccount onClick={()=> goToSignup(navigate)}>Crie uma conta</s.ButtonAccount>
            </s.SectionLogin>
        </s.Section>
        </Container>
    )
}

export default Login
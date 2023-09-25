import { Container } from "postcss";
import { ButtonPost } from "../../components/buttons/styled";
import Header from "../../components/header";
import { Line } from "../../components/line/styled";
import * as s from "./styled"

function Post(){
    return(
        <>
        <Header/>
        <s.Form>
        <s.Content>Escreva seu post...</s.Content>
        <ButtonPost type="submit">Postar</ButtonPost>
        <Line/>
        </s.Form>
        </>
    )
}

export default Post
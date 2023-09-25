import { ButtonPost } from "../../components/buttons/styled"
import Header from "../../components/header"
import { Line } from "../../components/line/styled"
import * as s from "./styled"

function Comment(){
    return(
        <>
        <Header/>
        <s.ContainerComment>
        <div>Post para comentar</div>
        <s.SectionComment>
            <s.Content>Adicionar comentário</s.Content>
            <ButtonPost>Responder</ButtonPost>
            <Line/>
        </s.SectionComment>
        </s.ContainerComment>
        </>
    )
}

export default Comment

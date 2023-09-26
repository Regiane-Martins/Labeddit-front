import { ButtonPost } from "../../components/buttons/styled"
import CommentPost from "../../components/comment"
import Header from "../../components/header"
import { Line } from "../../components/line/styled"
import PostCard from "../../components/post"
import * as s from "./styled"

function Comment(){
    return(
        <>
        <Header/>
        <s.ContainerComment>
        <PostCard/>
        <s.SectionComment>
            <s.Content>Adicionar comentário</s.Content>
            <ButtonPost>Responder</ButtonPost>
            <Line/>
        </s.SectionComment>
        <CommentPost/>
        </s.ContainerComment>
        </>
    )
}

export default Comment

import axios from "axios"
import { BASE_URL } from "../../constant/BASE_URL"
import * as s from "./styled"
import { useContext, useState } from "react"
import { ContextGlobal } from "../global/contextGlobal"

function PostCard(props) {
    const {post} = props
    const context = useContext(ContextGlobal)

    const [like, setLike] = useState(true)

    const token = context.getToken()

    const likeDislike = async (like)=>{
        const PATH = `${BASE_URL} + /posts/${post.id}/${like}`
        await axios.put(PATH, like, { headers: { Authorization: token } })
    }


    return (
        <s.Section>
            <s.List>
                <s.Identity>Enviado por: {post.creator.name}</s.Identity>
                <s.ContentPost>{post.content}</s.ContentPost>
                <s.FlexListItem>
                    <s.LikeDislike>
                        <s.Icon src="src/assets/img/like.svg" alt="like" />
                        <s.Number>{post.likes - post.dislikes}</s.Number>
                        <s.Icon src="src/assets/img/dislike.svg" alt="dislike" />
                    </s.LikeDislike>
                    <s.Comment>
                        <s.Icon src="src/assets/img/fluent_comment.svg" alt="comment" />
                        <s.Number>{post.comments}</s.Number>
                    </s.Comment>
                </s.FlexListItem>
            </s.List>
        </s.Section>
    )
}

export default PostCard
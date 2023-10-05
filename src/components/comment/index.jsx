import * as s from "./styled"
import { ReactComponent as LikeIcon } from "../../assets/img/like.svg";
import { ReactComponent as DislikeIcon } from "../../assets/img/dislike.svg";
import { useContext } from "react";
import { ContextGlobal } from "../global/contextGlobal";
import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL";

const LIKE_NEUTRAL = "like-neutral";
const LIKE_UP = "like-up";
const LIKE_DOWN = "like-down";

function CommentCard({id, content, like, dislike, postId}){
    const context = useContext(ContextGlobal);

    const [likeCount, setLikeCount] = useState(0);
    const [likeStatus, setLikeStatus] = useState(LIKE_NEUTRAL);
    const token = context.getToken();

    const likeDislike = async(like) => {
        try {
            const response = await axios.put(
                `${BASE_URL}/comments/${postId}/like`, {like}, {headers: {Authorization: token}}
            )
            
        } catch (error) {
            
        }
    }

    return(
        <s.Section>
        <s.List>
            <s.Identity>Enviado por: labaluno12 </s.Identity>
            <s.Content>Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)</s.Content>
        <s.FlexListItem>
            <s.LikeDislike>
            <s.Icon src="/src/assets/img/like.svg" alt="like"/>
            <s.Number>351</s.Number>
            <s.Icon src="/src/assets/img/dislike.svg" alt="dislike"/>
            </s.LikeDislike>
        </s.FlexListItem>
        </s.List>
        </s.Section>
    )
}

export default CommentCard
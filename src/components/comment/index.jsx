import * as s from "./styled"

function CommentCard(){
    return(
        <s.Section>
        <s.List>
            <s.Identity>Enviado por: labaluno12 </s.Identity>
            <s.Content>Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)</s.Content>
        </s.List>
        <s.FlexListItem>
            <s.LikeDislike>
            <s.Icon src="src/assets/img/like.svg" alt="like"/>
            <s.Number>351</s.Number>
            <s.Icon src="src/assets/img/dislike.svg" alt="dislike"/>
            </s.LikeDislike>
        </s.FlexListItem>
        </s.Section>
    )
}

export default CommentCard
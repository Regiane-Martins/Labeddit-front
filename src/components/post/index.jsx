import * as s from "./styled"

function PostCard() {
    return (
        <s.Section>
            <s.List>
                <s.Identity>Enviado por: id</s.Identity>
                <s.ContentPost>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</s.ContentPost>
                <s.FlexListItem>
                    <s.LikeDislike>
                        <s.Icon src="src/assets/img/like.svg" alt="like" />
                        <s.Number>1.2k</s.Number>
                        <s.Icon src="src/assets/img/dislike.svg" alt="dislike" />
                    </s.LikeDislike>
                    <s.Comment>
                        <s.Icon src="src/assets/img/fluent_comment.svg" alt="comment" />
                        <s.Number>132</s.Number>
                    </s.Comment>
                </s.FlexListItem>
            </s.List>
        </s.Section>
    )
}

export default PostCard
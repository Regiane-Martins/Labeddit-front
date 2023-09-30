import * as s from "./styled"

function PostCard(props) {
    const {post} = props
    return (
        <s.Section>
            <s.List>
                <s.Identity>Enviado por:{post.creator.name}</s.Identity>
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
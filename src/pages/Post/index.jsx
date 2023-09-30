import { Container } from "postcss";
import { ButtonPost } from "../../components/buttons/styled";
import Header from "../../components/header";
import { Line } from "../../components/line/styled";
import * as s from "./styled"
import { useNavigate } from "react-router";
import PostCard from "../../components/post";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../../components/global/contextGlobal";
import axios from "axios";
import { BASE_URL } from "../../constant/BASE_URL";
import { useForm } from "../../hooks/useForm";

function Post() {
    const navigate = useNavigate()
    const context = useContext(ContextGlobal)
    const [post, setPost] = useState([])
    const [form, onChange, resetForm] = useForm({ content: "" })


    const sendPost = async (body) => {
        const PATH = BASE_URL + "/posts"
        console.log(body);
        await axios.post(PATH, body)
            .then(response => {
            })
            .catch(error => {
                console.log(error);
            })

    }

    const loadPost = async () => {
        const token = context.getToken()
        const result = await axios.get(`${BASE_URL}/posts`, { headers: { Authorization: token } })
        setPost(result.data)

    }
    const sendForm = (e) => {
        e.preventDefault()
        sendPost(form)
        resetForm()
        context.setReload(!context.reload)
    }

    useEffect(() => {
        loadPost()
    }, [context.reload, context])

    return (
        <>
            <Header />
            <s.Form onSubmit={sendForm}>
                <s.Content
                name="content"
                value={form.content}
                onChange={onChange}
                required
                placeholder="Escreva seu post..."
                ></s.Content>
                <ButtonPost type="submit">Postar</ButtonPost>
                <Line />
            </s.Form>

            {
                post?.map((post) =>
                    <PostCard post={post} key={post.id} />
                )
            }
        </>
    )
}

export default Post
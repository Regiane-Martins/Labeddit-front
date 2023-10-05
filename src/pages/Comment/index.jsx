import { useContext, useEffect, useState } from "react";
import { ButtonPost } from "../../components/buttons/styled";
import CommentCard from "../../components/comment";
import Header from "../../components/header";
import { Line } from "../../components/line/styled";
import PostCard from "../../components/post";
import { useForm } from "../../hooks/useForm";
import * as s from "./styled";
import { BASE_URL } from "../../constant/BASE_URL";
import axios from "axios";
import { ContextGlobal } from "../../components/global/contextGlobal";
import { useLocation } from "react-router-dom";

const useFindPostId = () => {
  const location = useLocation();
  const [postId, setPostId] = useState('');

  useEffect(() => {
      setPostId(location.pathname.split('/')[2]);
  }, [location]);
  
  return postId;
};

function Comment() {
  console.log(useFindPostId());
  const [form, onChange, resetForm] = useForm({ content: "" });
  const [comments, setComments] = useState([]);
  const context = useContext(ContextGlobal);

  const token = context.getToken();
  const postId = useFindPostId()

  const sendComment = async (body) => {
    const PATH = BASE_URL + `${postId}`;
    await axios.post(PATH, body, { headers: { Authorization: token } });
  };

  const loadComment = async () => {
    const result = await axios.get(`${BASE_URL}${postId}`, {
      headers: { Authorization: token },
    });
    setComments(result.data);
  };

  const sendForm = (e) => {
    e.preventDefault();
    sendComment(form);
    resetForm();
    loadComment();
  };

  useEffect(() => {
    loadComment();
  }, []);

  return (
    <>
      <Header />
      <s.ContainerComment>
        <PostCard
          id={"123"}
          comments={1}
          content={"Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?"}
          creator={{ name: "Eu" }}
          likes={1}
          dislikes={0}
        />
        <s.SectionComment onSubmit={sendForm}>
          <s.Content
            name="content"
            value={form.content}
            onChange={onChange}
            required
            placeholder="Adicionar comentário"
          ></s.Content>
          <ButtonPost>Responder</ButtonPost>
          <Line />
        </s.SectionComment>
        {
          comments?.map(({id, content, like, dislike})=>(
            <CommentCard 
              key={id}
              id={id}
              content={content}
              like={like}
              dislike={dislike}
              postId={postId}
            />
          ))
        }
      </s.ContainerComment>
    </>
  );
}

export default Comment;

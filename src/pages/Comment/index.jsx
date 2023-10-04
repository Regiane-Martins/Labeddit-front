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
import { useLocation, useRoutes } from "react-router-dom";


const useFindPath = () => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState();
  useEffect(() => {
      setCurrentPath(location.pathname);
  }, [location]);
  return currentPath;
};




function Comment() {
  console.log(useFindPath());
  const [form, onChange, resetForm] = useForm({ content: "" });
  const [comments, setComments] = useState([]);
  const context = useContext(ContextGlobal);

  const token = context.getToken();
  const path = useFindPath()

  const sendComment = async (body) => {
    const PATH = BASE_URL + `${path}`;
    await axios.post(PATH, body, { headers: { Authorization: token } });
  };

  const loadComment = async () => {
    const result = await axios.get(`${BASE_URL}${path}`, {
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
          content={"bla"}
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
        <CommentCard />
      </s.ContainerComment>
    </>
  );
}

export default Comment;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Post from "../pages/Post";
import Comment from "../pages/Comment";
import NotFound from "../pages/NotFound";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
                <Route path="post" element={<Post/>} />
                <Route path="comment" element={<Comment/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
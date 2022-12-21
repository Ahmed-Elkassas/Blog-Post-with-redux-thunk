import { Route, Routes } from "react-router-dom";
import { PostForm } from "./components/posts/PostForm";
import { PostsList } from "./components/posts/PostsList";
import { SinglePost } from "./components/posts/SinglePost";
import { EditPostForm } from "./components/posts/EditPostForm";


function App() {
  return (
    <Routes>
      <Route index element={<PostsList />} />
      <Route  path='post' >
        <Route index element={<PostForm />} />
        <Route path=":postId" element={<SinglePost />} />
        <Route path="edit/:postId" element={<EditPostForm />} />
      </Route>
    </Routes>
  );
}

export default App;

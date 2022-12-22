import { Route, Routes } from "react-router-dom";
import { PostsForm } from "./components/posts/PostsForm";
import { PostsList } from "./components/posts/PostsList";
import { SinglePost } from "./components/posts/SinglePost";
import { EditPostForm } from "./components/posts/EditPostForm";
import { Layout } from "./components/UI/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<PostsForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { PostForm } from "./components/posts/PostForm";
import { PostsList } from "./components/posts/PostsList";
import { SinglePost } from "./components/posts/SinglePost";


function App() {
  return (
    <Routes>
      <Route index element={<PostsList />} />
      <Route  path='post' >
        <Route index element={<PostForm />} />
        <Route path=":id" element={<SinglePost />} />
      </Route>
    </Routes>
  );
}

export default App;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../redux/reducers/posts-slice";

export const PostForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setBody(e.target.value)
  } 

  const onAddPost = () => {
    if (title && body) {
      dispatch(
        addNewPost(title, body)
      )
      setTitle('')
      setBody('')
  }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onChangeTitle} />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={body} onChange={onChangeContent} />
        <button type="button" onClick={onAddPost}>Save Post</button>
      </form>
    </section>
  );
};

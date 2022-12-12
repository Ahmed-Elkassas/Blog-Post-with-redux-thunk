import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../redux/reducers/posts-slice";

export const PostForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContent = (e) => {
    setContent(e.target.value)
  } 

  const onAddPost = () => {
    if (title && content) {
      dispatch(
        addNewPost(title, content)
      )
      setTitle('')
      setContent('')
  }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" value={title} onChange={onChangeTitle} />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" value={content} onChange={onChangeContent} />
        <button type="button" onClick={onAddPost}>Save Post</button>
      </form>
    </section>
  );
};

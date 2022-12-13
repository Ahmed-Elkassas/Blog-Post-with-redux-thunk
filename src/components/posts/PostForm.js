import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../../redux/reducers/posts-slice";
import { getAllUsers } from "../../redux/reducers/users-slice";

export const PostForm = () => {
  const dispatch = useDispatch();

  const users = useSelector(getAllUsers);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState('')

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setBody(e.target.value);
  };

  const onChangeAuthors = (e) => {
    setUserId(e.target.value)
  }

  const renderedUsers = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>{user.name}</option>
    )
  })

  const onAddPost = () => {
    if (title && body) {
      dispatch(addNewPost(title, body, userId));
      setTitle("");
      setBody("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="authors">Authors</label>
        <select value={userId} onChange={onChangeAuthors}>
          <option value="">Select an author</option>
          {renderedUsers}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onChangeContent}
        />
        <button type="button" onClick={onAddPost}>
          Save Post
        </button>
      </form>
    </section>
  );
};

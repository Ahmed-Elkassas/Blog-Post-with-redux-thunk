import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost } from "../../redux/reducers/posts-slice";
import { getAllUsers } from "../../redux/reducers/users-slice";
import { useNavigate, useParams } from "react-router-dom";

export const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(getAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onChangeAuthors = (e) => {
    setUserId(e.target.value);
  };

  const abledSaveButton =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostHandler = () => {
    if (abledSaveButton) {
      try {
        setRequestStatus("pending");
        dispatch(updatePost({ id: post.id, title, body: content, userId }));
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        alert(error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onChangeAuthors}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onChangeContent}
        />
        <button
          type="button"
          onClick={onSavePostHandler}
          disabled={!abledSaveButton}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

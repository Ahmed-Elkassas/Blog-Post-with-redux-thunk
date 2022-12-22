import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPostById } from '../../redux/reducers/posts-slice';
import { getAllUsers } from '../../redux/reducers/users-slice';
import { useParams } from 'react-router-dom'

export const EditPostForm = () => {

  const { postId } = useParams()

  const dispatch = useDispatch()
  
  const post = useSelector((state) => selectPostById(state, Number(postId)))
  const users = useSelector(getAllUsers)

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);

  const usersOptions = users.map(user => (
    <option 
      key={user.id}
      value={user.id}
    >{user.name}</option>
  ))

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
                />
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId}>
                    <option value="" ></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                />
                <button
                    type="button"
                >
                    Save Post
                </button>
            </form>
        </section>
  )
}

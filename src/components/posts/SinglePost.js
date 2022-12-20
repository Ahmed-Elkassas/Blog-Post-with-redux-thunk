import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux'

import PostAuthor from "../users/PostAuthor";
import TimeAgo from "../TimeAgo";
import { selectPostById } from '../../redux/reducers/posts-slice';


export const SinglePost = () => {
    const { postId } = useParams()

    const post = useSelector((state) => selectPostById(state, Number(postId)))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p className="postDetails">
                <Link to={`post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
        </article>
    )
}


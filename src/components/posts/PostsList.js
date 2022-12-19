import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  getAllPosts,
  getPostsError,
  getPostsStatus,
} from "../../redux/reducers/posts-slice";
import { TimeAgo } from "../TimeAgo";
import { PostAuthor } from "../users/PostAuthor";

export const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (postStatus === "idle") dispatch(fetchPosts());
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => {
      return (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body.substring(0, 100)}</p>
          <div className="postDetails">
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </div>
        </article>
      );
    });
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Your posts</h2>
      {content}
    </section>
  );
};

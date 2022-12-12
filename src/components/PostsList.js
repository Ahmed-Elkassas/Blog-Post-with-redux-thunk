import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, getAllPosts, getPostsError, getPostsStatus } from "../redux/reducers/posts-slice"

export const PostsList = () => {

    const posts = useSelector(getAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    const dispatch = useDispatch()

    useEffect(() => {
      
    if(postStatus === 'idle') dispatch(fetchPosts())
     
    }, [postStatus, dispatch])
    
    const renderedPosts = posts.map((post) => {
        return (
            <article key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body.substring(0, 100)}</p>
            </article>
        )
    })

    let content;
    if(postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if(postStatus === 'succeeded') {
        content = renderedPosts
    } else if(postStatus === 'failed') {
        content = <p>{error}</p>
    }

  

  return (
    <section>
        <h2>Your posts</h2>
        {content}
    </section>
  )
}


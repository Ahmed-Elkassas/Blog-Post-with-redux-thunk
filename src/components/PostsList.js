import { useSelector } from "react-redux"
import { getAllPosts } from "../redux/reducers/posts-slice"

export const PostsList = () => {

    const posts = useSelector(getAllPosts)

    const renderedPosts = posts.map((post) => {
        return (
            <article key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.content.substring(0, 100)}</p>
            </article>
        )
    })

  return (
    <section>
        <h2>Your posts</h2>
        {renderedPosts}
    </section>
  )
}


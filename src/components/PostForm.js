export const PostForm = () => {
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" />
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};

// app/routes/posts/[postId].tsx
import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';

export default function Post() {
  const { postId } = useParams();
  const post = posts.find(post => post.id === Number(postId));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}

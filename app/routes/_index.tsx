// app/routes/index.tsx
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Index() {
  return (
    <div>
      <h1>Welcome to My Blog!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import DefaultLayout from '../../components/Layout/Default';
import { LOADING_TEXT_BASE } from '../../constants';
import Card from '../../components/Card/Card';
import Text from '../../components/Typography/Text';

export default function Posts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetch(`${process.env.RAZZLE_API_PATH}/posts/`);
        const {posts, meta} = await data.json();
        
        setPosts(posts);
      } catch (e) {
        console.error(`Error fetch posts: ${e.message}`)
      }
    }

    if (!posts?.length) {
      getPosts();
    }

  }, [posts])
  
  return (
    <DefaultLayout>
    <div>
      <Text type="h1">Blog Posts</Text>
      <ul>
        {posts ? posts?.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <Card title={post.title} />
            </Link>
          </li>
        )) : (
          <p>{LOADING_TEXT_BASE} posts!</p>
        )}
      </ul>
    </div>
    </DefaultLayout>
  );
};

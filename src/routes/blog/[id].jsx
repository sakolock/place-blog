import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DefaultLayout from "../../components/Layout/Default";
import Text from '../../components/Typography/Text';
import Date from '../../components/Common/Date';
import Comment from '../../components/Comment/Comment';
import { LOADING_TEXT_BASE } from '../../constants';

// {"post": {"id": 1, "title": "A new post", "body": "Something very interesting!", "created_at": "2021-11-09T16:04:51.895Z", "updated_at": "2021-11-09T16:04:51.895Z", "comment_count": 1, "user": {"id": 1, "display_name": "Superman"}}}

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      
      try {
        const res = await fetch(`${process.env.RAZZLE_API_PATH}/posts/${id}`);
        const {post} =  await res.json();
        setPost(post);
      } catch (e) {
        console.error(e);
      }
    }

    if (!post) {
      getPost()
    }

  }, [post, id])

  useEffect(() => {
    const getComments = async () => {
      
      try {
        const res = await fetch(`${process.env.RAZZLE_API_PATH}/posts/${id}/comments`);
        const {comments} =  await res.json();
        setComments(comments);
      } catch (e) {
        console.error(e);
      }
    }

    if (post && !comments) {
      getComments()
    }

  }, [post, comments, id])
 
  return (
    <DefaultLayout>
      {post ? (
        <article className="my-5 py-4">
          <Text type="h1">{post?.title}</Text>
          <Date text="Updated on" date={post?.updated_at} />
          {/* <p>{post.updated_at.getMonth()} {post.updated_at.getDate()}, {post.updated_at.getYear()}</p> */}
          <p className="my-4">{post?.body}</p>
          <section className="border-t border-t-blue-300 pt-4">
            <Text type="h2">Comments ({post?.comment_count})</Text>
            
              <ul className="flex flex-col gap-4 mt-4">
                {comments?.map((comment) => (
                  <li key={comment?.id}>
                    <Comment display_name={comment.user.display_name} content={comment.content} updated_at={comment.updated_at} />
                    </li>
                  ))}
              </ul>
            </section>
        </article>
      ) : (
        <p>{LOADING_TEXT_BASE} writing!</p>
      )}
      {/* <AddComment postId={id} /> */}
    </DefaultLayout>
  );
};

export default Post;

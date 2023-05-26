import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './routes';
import Posts from './routes/blog/Posts';
import Post from './routes/blog/[id]';
import Protected from './components/Auth/Protected';
import './styles/tailwind.css';
import AddPost from './routes/blog/AddPost';
import Login from './routes/users/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/posts",
    element: <Posts />,
    // loader: someLoader,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
  {
    path: "/posts/create",
    element:(
      <Protected>
        <AddPost/>
      </Protected>
    ),
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <RouterProvider router={router} />
);

export const ErrorBoundary = (e) => (
  <div>{JSON.stringify(e)}</div>
)

// import React from 'react';
// import { createRoot } from 'react-dom';
// import App from './App';

// render(<App />, createRoot(document.getElementById('root')));

if (module.hot) {
  module.hot.accept();
}

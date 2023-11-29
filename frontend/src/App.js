//Mario Matas Martin

import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Chamaida from './components/Chamaida';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'chamaida',
        element: <Chamaida />,
      },
    ],
  },
]);

function App() {
  const userRole = 'admin';

  return (
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          {userRole === 'admin' && (
            <li>
              <Link to="/home">Gestionar Usuarios</Link>
            </li>
          )}
          <li>
            <Link to="/chamaida">Chamaida</Link>
          </li>
        </ul>
      </nav>
    </RouterProvider>
  );
}

export default App;

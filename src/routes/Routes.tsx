import { createBrowserRouter } from 'react-router-dom'

import App from 'App'
import { Error } from 'components/Error/Error'
import { Login } from 'components/Login/Login'
import { NewPass } from 'components/Password/NewPass/NewPass'
import { ResetPass } from 'components/Password/ResetPass/ResetPass'
import { Profile } from 'components/Profile/Profile'
import { Registration } from 'components/Registration/Registration'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/resetPassword',
        element: <ResetPass />,
      },
      {
        path: '/newPassword',
        element: <NewPass />,
      },
    ],
  },
])

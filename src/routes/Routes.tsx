import { createHashRouter } from 'react-router-dom'

import App from 'App'
import { Error } from 'components/Error/Error'
import { Login } from 'components/Login/Login'
import { ResetPass } from 'components/Password/ResetPass/ResetPass'
import { Profile } from 'components/Profile/Profile'
import { Registration } from 'components/Registration/Registration'
import { paths } from 'routes/Paths'

export const router = createHashRouter([
  {
    path: paths.PACK_LIST,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: paths.PACK_LIST,
        element: <>AuthRedirect</>,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: paths.PACK,
            element: <Registration />,
          },
          {
            path: paths.USER_PROFILE,
            element: <Profile />,
          },
          {
            path: paths.LEARN_PACK,
            element: <ResetPass />,
          },
        ],
      },
    ],
  },
])

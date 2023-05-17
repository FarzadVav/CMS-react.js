import Home from './Pages/Home'
import Products from './Pages/Products'
import Users from './Pages/Users'
import Orders from './Pages/Orders'
import Comments from './Pages/Comments'
import Offs from './Pages/Offs'

const routes = [
  {path: '/', element: <Home />},
  {path: '/products', element: <Products />},
  {path: '/users', element: <Users />},
  {path: '/orders', element: <Orders />},
  {path: '/comments', element: <Comments />},
  {path: '/offs', element: <Offs />},
]

export default routes
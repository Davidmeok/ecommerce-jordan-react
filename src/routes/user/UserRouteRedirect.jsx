import { useAuth } from '../../hooks/export'
import { Navigate, Outlet } from 'react-router-dom'

const UserRouteRedirect = () => {
  const { user } = useAuth()

  if (user === false) return 'loading...'

  if (user) return <Navigate to='/account' />

  return <Outlet />
}

export { UserRouteRedirect }

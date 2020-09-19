import Profile from './Pages/Profile';
import Secret from './Pages/Secret';
import ActionPage from './Pages/ActionPage';
import NotFound from './Pages/NotFoundPage'
import Welcome from './Pages/Welcome';

export const privateRoutes = [
  { path: "/profile", exact: true, component: Profile },
  { path: "/secret", exact: true, component: Secret },
  { path: "/add-task", exact: true, component: ActionPage },
  { path: "/edit-task/:id", exact: true, component: ActionPage }
]

export const publicRoutes = [
  { path: "/", exact: true, component: Welcome },
  { path: "/", exact: false, component: NotFound },
]
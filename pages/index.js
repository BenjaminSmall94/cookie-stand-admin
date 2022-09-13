import CookieStandAdmin from '../components/CookieStandAdmin';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth';


export default function Home() {

  const { user, login, logout } = useAuth();

  if (user) {
    return <CookieStandAdmin user={user} logout={logout} />;
  } else {
    return <LoginForm login={login} />
  }
}

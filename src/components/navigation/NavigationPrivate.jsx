import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'store/auth/selector';

export const NavigationPrivate = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/login" state={location} />;
};

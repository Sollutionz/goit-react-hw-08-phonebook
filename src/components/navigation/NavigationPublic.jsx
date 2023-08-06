import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsAuth } from 'store/auth/selector';

export const NavigationPublic = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const { state } = useLocation();
  return !isAuth ? children : <Navigate to={state ? state : '/'} />;
};

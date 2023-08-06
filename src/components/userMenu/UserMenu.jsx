import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUser } from 'store/auth/selector';
import { logOutThunk } from 'store/auth/thunk';
import { logOutReduxItems } from 'store/contacts/contactsSlice';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutThunk());
    dispatch(logOutReduxItems());
  };
  return (
    <>
      <div className={css.container}>
        <div className={css.textCont}>
          {isAuth ? (
            <p className={css.email}>{`Greetings ${user.name}!😘`}</p>
          ) : (
            ''
          )}
          <p className={css.email}>{user.email}</p>
        </div>

        {isAuth ? (
          <button onClick={handleLogOut} className={css.logOut}>
            Logout
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

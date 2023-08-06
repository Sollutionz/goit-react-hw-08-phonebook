import { UserMenu } from 'components/userMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { selectIsAuth } from 'store/auth/selector';
import { Filter } from 'components/filter/Filter';

export const SharedLayout = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <header className={css.header}>
        <div className={css.label}>
          <span role="img" aria-label="telephone icon">
            📞
          </span>
          PhoneBook
        </div>
        <div className={css.links}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="contacts" className={css.link}>
            Contacts
          </Link>
          {isAuth ? (
            ''
          ) : (
            <Link to="login" className={css.link}>
              LogIn
            </Link>
          )}
          {isAuth ? (
            ''
          ) : (
            <Link to="register" className={css.link}>
              Register
            </Link>
          )}
        </div>
        <UserMenu />
        <Filter></Filter>
      </header>
      <main className={css.main}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

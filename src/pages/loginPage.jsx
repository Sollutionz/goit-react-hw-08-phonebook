import { useNavigate } from 'react-router-dom';
import css from './registerPage.module.css';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logInThunk } from 'store/auth/thunk';
import { useEffect } from 'react';
import { selectIsAuth } from 'store/auth/selector';

export const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    isAuth ? navigate(`/contacts`) : <></>;
  }, [isAuth, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logInThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => toast.success('Logged in!'))
      .catch(error => toast.error(`Something went wrong... ${error}`));
  };

  return (
    <>
      <form className={css.container} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

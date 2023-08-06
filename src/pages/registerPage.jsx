import { signUp } from 'services/contactsApi';
import css from './registerPage.module.css';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'store/auth/thunk';

export function RegisterPage() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const NewUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    signUp(NewUser)
      .then(() => toast.success('Created'))
      .then(
        dispatch(
          logInThunk({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
          })
        )
      )
      .catch(error => toast.error(`Something went wrong... ${error}`));
  };
  return (
    <>
      <form className={css.container} onSubmit={handleSubmit}>
        <div className={css.mb3}>
          <label htmlFor="exampleInputName1" className={css.formlabel}>
            User name
          </label>
          <input
            type="text"
            name="name"
            className={css.formcontrol}
            id="exampleInputName1"
          />
          <label htmlFor="exampleInputEmail1" className={css.formlabel}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            className={css.formcontrol}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={css.formtex}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={css.mb3}>
          <label htmlFor="exampleInputPassword1" className={css.formlabel}>
            Password
          </label>
          <input
            type="password"
            name="password"
            className={css.formcontrol}
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className={css.btnprimary}>
          Submit
        </button>
      </form>
    </>
  );
}

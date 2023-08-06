import css from './homePage.module.css';

export const HomePage = () => {
  return (
    <>
      <div className={css.hero}></div>
      <h1 className={css.heroHeader}>Wellcome to the Phonebook!</h1>
    </>
  );
};

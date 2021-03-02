import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './login.module.scss';
import ButtonMain from '../Buttons/buttonMain';

type Inputs = {
  login: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.title}>Login to eShop app</h1>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {errors.login && <span className={styles.form__error}>This field is required</span>}
        <input
          className={styles.form__input}
          name="login"
          ref={register({ required: true })}
          placeholder="Your login"
        />
        {errors.password && <span className={styles.form__error}>This field is required</span>}
        <input
          className={styles.form__input}
          name="password"
          ref={register({ required: true })}
          placeholder="Your password"
        />
        <ButtonMain>Login</ButtonMain>
      </form>
    </div>
  );
};

export default Login;

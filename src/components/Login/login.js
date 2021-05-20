/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { useForm } from 'react-hook-form';

import styles from './login.module.scss';
import ButtonMain from '../Buttons/buttonMain';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.title}>Login to eShop-App</h1>
      </header>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {errors.login && <span className={styles.form__error}>This field is required</span>}
        <input
          className={styles.form__input}
          name="login"
          placeholder="Your login"
          {...register('login', { required: true })}
        />
        {errors.password && <span className={styles.form__error}>This field is required</span>}
        <input
          className={styles.form__input}
          name="password"
          placeholder="Your password"
          {...register('password', { required: true })}
        />
        <ButtonMain>Login</ButtonMain>
      </form>
    </div>
  );
};

export default Login;

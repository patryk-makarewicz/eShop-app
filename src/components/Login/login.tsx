import React from 'react';
import { useForm } from 'react-hook-form';

import styles from './login.module.scss';

type Inputs = {
  login: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <p>Login to eShop app</p>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input name="login" ref={register({ required: true })} placeholder="Your login" />
        {errors.login && <span>This field is required</span>}
        <input name="password" ref={register({ required: true })} placeholder="Your password" />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;

import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import { Input, INPUTS } from "./Input";
import Text from "../Typography/Text";
import Button from "../Common/Button";
import FormError from './FormError';
// {"user": {"email": "abc@123.com", "password": "super-secret", "display_name": "Superman"}}
// Response
// {"id": 1, "display_name": "Superman"}
export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = async (data) => {
    console.log(data)
    let { email, password } = data
    console.log(email, password)
    console.log('data', data)
    // const data = await registerUser({email, password, display_name}, () => {
    //   navigate(from, { replace: true });
    // });
  }
  console.log('hey')
  return (
    <>
      <Text type="h1">Login</Text>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
      {/* <form onSubmit={handleSubmit(handleFormSubmit)}> */}
      {/* <form action="/users/sign_in" method="/post"> */}
        <Input label="Username" inputType={INPUTS.text} {...register('display_name', { required: true })} />
        {errors.display_name && <FormError>Username is required.</FormError>}
        <Input label="Password" inputType={INPUTS.password} {...register('password', { required: true })} />
        {errors.password && <FormError>Password is required.</FormError>}
        <Input inputType={INPUTS.submit} label="Login" />
      </form>
    </>
  )
}

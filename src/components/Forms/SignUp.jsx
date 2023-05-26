import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from "react-router-dom";
import { Input, INPUTS } from "./Input";
import FormError from './FormError';
import Text from "../Typography/Text";
import Button from "../Common/Button";
import { register as registerUser } from "../../api/auth";
// {"user": {"email": "abc@123.com", "password": "super-secret", "display_name": "Superman"}}
// Response
// {"id": 1, "display_name": "Superman"}

export default function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";

  const handleFormSubmit = async (data) => {
    let { email, password, display_name } = data
    console.log(email, password, display_name)
    console.log('data', data)
    const res = await registerUser({email, password, display_name}, () => {
      navigate(from, { replace: true });
    });
  }

  return (
    <>
      <Text type="h1">Register</Text>
      <form onSubmit={handleSubmit((data) => handleFormSubmit(data))}>
        <Input label="Email" inputType={INPUTS.email} {...register('email', { required: true })} />
        {errors.email && <FormError>{JSON.stringify(errors)}</FormError>}
        <Input label="Username" inputType={INPUTS.text} {...register('display_name', { required: true })} />
        {errors.display_name && <FormError>Username is required.</FormError>}
        <Input label="Password" inputType={INPUTS.password} {...register('password', { required: true })} />
        {errors.password && <FormError>Password is required.</FormError>}
        <Button type="submit">Register</Button>
      </form>
    </>
  )
}

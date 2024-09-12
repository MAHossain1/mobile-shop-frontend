'use client';

import { verifyToken } from '@/app/utils/verifytoken';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Input } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import SubmitButton from '../ui/SubmitButton';

type TInput = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams(); // Get the query parameters
  const redirect = searchParams?.get('redirect'); // Extract the 'redirect' parameter from the query

  const [login] = useLoginMutation();

  const onSubmit: SubmitHandler<TInput> = async data => {
    const userCredential = {
      email: data.email,
      password: data.password,
    };

    try {
      const result = await login(userCredential);

      // Check if there's an error in the result
      if (result.error) {
        const err = result.error as { data?: { message?: string } };

        if (err?.data?.message === 'This user is not found!') {
          toast.error('User not found!');
        } else if (err?.data?.message === 'Your password is incorrect!') {
          toast.error('Your password is incorrect!');
        } else {
          toast.error(err?.data?.message || 'An unknown error occurred.');
        }
      } else {
        // No error, proceed with login success
        toast.success('User Logged in Successfully!');

        const user = verifyToken(result.data.data.accessToken);

        dispatch(setUser({ user, token: result.data.data.accessToken }));

        // If redirect parameter exists, go there, otherwise go to homepage
        router.push(redirect ? String(redirect) : '/');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-3">
        <Input
          {...register('email', { required: true })}
          isRequired
          type="email"
          label="Email"
          name="email"
          variant="bordered"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
      </div>
      <div>
        <Input
          {...register('password', { required: true })}
          className="mt-3"
          isRequired
          type="password"
          label="Password"
          name="password"
          variant="bordered"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
      </div>
      <div className="flex justify-end text-primary">
        <Link href="/register">
          <small>New User? Please Register</small>
        </Link>
      </div>
      <SubmitButton>Login</SubmitButton>
    </form>
  );
};

export default LoginForm;

'use client';

import { Input } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubmitButton from '../ui/SubmitButton';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

type TInput = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInput>();

  const router = useRouter();

  const [signup] = useSignupMutation();

  const onSubmit: SubmitHandler<TInput> = async data => {
    // console.log(data);
    const registerInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const result = await signup(registerInfo);

      const err = result?.error as { data?: { message?: string } };

      console.log(err);

      if (err?.data?.message === 'Cast error.') {
        toast.error('User already exists');
      } else {
        toast.success('User Sign Up Successfully');
        router.push('/login');
      }
    } catch (error) {
      //   console.log(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register('name', { required: true })}
          isRequired
          name="name"
          type="text"
          label="Name"
          variant="bordered"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
      </div>
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
        <Link href="/login">
          <small>Already have an account? Login</small>
        </Link>
      </div>
      <SubmitButton>Register</SubmitButton>
    </form>
  );
};

export default RegisterForm;

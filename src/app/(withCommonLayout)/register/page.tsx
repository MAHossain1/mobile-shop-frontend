import RegisterForm from '@/components/form/RegisterForm';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';

const RegisterPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="flex justify-center">
          <p className="font-bold text-2xl text-inherit px-4">Register</p>
        </CardHeader>
        <CardBody>
          <RegisterForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default RegisterPage;

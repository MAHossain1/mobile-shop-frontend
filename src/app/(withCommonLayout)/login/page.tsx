import LoginForm from '@/components/form/LoginForm';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <Card className="w-96">
        <CardHeader className="flex justify-center">
          <p className="font-bold text-2xl text-inherit px-4">Login Please</p>
        </CardHeader>
        <CardBody>
          <LoginForm />
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;

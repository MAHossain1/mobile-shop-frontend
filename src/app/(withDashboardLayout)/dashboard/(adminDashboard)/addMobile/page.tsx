/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { selectToken } from '@/redux/features/auth/authSlice';
import { useCreateMobileMutation } from '@/redux/features/mobiles/mobilesApi';
import { useAppSelector } from '@/redux/hooks';
import { Button, Input, Spinner } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const AddMobile = () => {
  const [mobileData, setMobileData] = useState({
    name: '',
    price: 0,
    imgUrl: '',
    brand: '',
    model: '',
    ratings: 0,
    features: [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [createMobile] = useCreateMobileMutation();
  const token = useAppSelector(selectToken);
  const router = useRouter();

  //   console.log(token, 'from add mobile');

  const handleImageFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
      handleImageUpload(e.target.files[0]);
    }
  };

  const handleImageUpload = async (file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post(
        'https://api.imgbb.com/1/upload',
        formData,
        {
          params: {
            key: '3b9d23915f5438ec0c8cc66ce2bd1b7e',
          },
        }
      );

      setMobileData({
        ...mobileData,
        imgUrl: response.data.data.url,
      });
    } catch (error) {
      console.error('Error uploading image', error);
      toast.error('Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  const [feature, setFeature] = useState(''); // For managing the current feature input

  const handleAddFeature = () => {
    if (feature.trim()) {
      setMobileData(prevState => ({
        ...prevState,
        features: [...prevState.features, feature.trim()],
      }));
      setFeature(''); // Clear the input field after adding
    }
  };

  //   console.log(mobileData, 'add mobile');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mobileData, 'from submit');
    setLoading(true);
    try {
      if (!mobileData.imgUrl) {
        toast.error('Please upload an image before submitting');
        return;
      }

      // Check for all required fields
      if (
        !mobileData.name ||
        !mobileData.brand ||
        !mobileData.model ||
        !mobileData.price ||
        !mobileData.ratings
      ) {
        toast.error('All fields must be filled');
        return;
      }

      const newProduct = await createMobile({ mobileData, token }).unwrap();
      console.log(newProduct, 'after submitting');
      toast.success('Mobile added successfully');
      router.push('/mobiles'); // Adjust the route as needed

      setMobileData({
        name: '',
        price: 0, // Ensure this is a number
        imgUrl: '',
        brand: '',
        model: '',
        ratings: 0, // Ensure this is a number
        features: [] as string[],
      });
    } catch (error: any) {
      console.error('Error adding Mobile:', error); // Log the actual error
      toast.error('Failed to add Mobile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Add New Mobile
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mobile Name */}
        <Input
          label="Mobile Name"
          placeholder="Enter mobile name"
          fullWidth
          value={mobileData.name}
          onChange={e => setMobileData({ ...mobileData, name: e.target.value })}
          required
        />
        <Input
          label="Mobile Brand"
          placeholder="Enter Mobile Brand"
          fullWidth
          value={mobileData.brand}
          onChange={e =>
            setMobileData({ ...mobileData, brand: e.target.value })
          }
          required
        />

        <Input
          label="Mobile Model"
          placeholder="Enter Mobile Model"
          fullWidth
          value={mobileData.model}
          onChange={e =>
            setMobileData({ ...mobileData, model: e.target.value })
          }
          required
        />

        {/* Price */}
        <Input
          label="Price (USD)"
          placeholder="Enter product price"
          type="number"
          fullWidth
          value={mobileData.price.toString()} // Convert number to string
          onChange={
            e => setMobileData({ ...mobileData, price: Number(e.target.value) }) // Convert string back to number
          }
          required
        />

        <Input
          label="Ratings"
          placeholder="Enter Mobile Ratings"
          type="number"
          fullWidth
          value={mobileData.ratings.toString()}
          onChange={e =>
            setMobileData({ ...mobileData, ratings: Number(e.target.value) })
          }
          required
        />

        {/* Image File */}
        <Input
          type="file"
          accept="image/*"
          onChange={handleImageFileChange}
          required
        />

        {/* Input for Features */}
        <Input
          label="Add Feature"
          placeholder="Enter a Feature"
          fullWidth
          value={feature}
          onChange={e => setFeature(e.target.value)}
        />
        <Button onClick={handleAddFeature} className="mt-2">
          Add Feature
        </Button>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="ghost"
          color="primary"
          isDisabled={loading}
          className="mt-4 font-semibold uppercase text-xl"
        >
          {loading ? <Spinner /> : 'Add Mobile'}
        </Button>
      </form>
    </div>
  );
};

export default AddMobile;

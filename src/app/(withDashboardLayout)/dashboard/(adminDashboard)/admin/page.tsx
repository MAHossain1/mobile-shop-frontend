/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  useDeleteMobileMutation,
  useGetAllMobileQuery,
} from '@/redux/features/mobiles/mobilesApi';
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Spinner,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import { DeleteIcon } from '../../dashboardComponent/DeleteIcon';
import { useAppSelector } from '@/redux/hooks';
import { selectToken } from '@/redux/features/auth/authSlice';
import { toast } from 'sonner';
import Link from 'next/link';

const AdminMobileDashboard = () => {
  const { data: mobilesData, isLoading, error } = useGetAllMobileQuery('');

  const token = useAppSelector(selectToken);

  const [deleteMobile] = useDeleteMobileMutation();

  // const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  // const toggleMobileDetails = (mobileId: string) => {
  //   console.log(mobileId, 'clicked');
  //   setExpandedMobileId(expandedMobileId === mobileId ? null : mobileId);
  // };

  const handleMobileDelete = async (mobileId: string) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this mobile?'
    );

    // If the user clicks "OK", proceed with deletion
    if (isConfirmed) {
      console.log('clicked', mobileId);
      try {
        await deleteMobile({ mobileId, token });
        toast.success('Successfully deleted the mobile');
      } catch (error) {
        toast.error('Failed to delete mobile!');
      }
    } else {
      // If the user clicks "Cancel", do nothing
      toast.info('Deletion canceled');
    }
  };

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
        <p>Loading...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="text-center text-red-600">
        <p>Something went wrong! Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl uppercase font-semibold text-gray-700 my-4">
        Mobiles Management
      </h1>
      <div className="text-right m4-2 mb-2">
        <Button variant="ghost" color="primary">
          <Link href="/dashboard/admin/add-mobile">Add Mobile</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableColumn>Image</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Brand</TableColumn>
          <TableColumn>Model</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Ratings</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {mobilesData?.data?.map((mobile: any) => (
            <TableRow key={mobile._id}>
              <TableCell>
                <Image
                  src={mobile.imgUrl}
                  alt={mobile.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </TableCell>
              <TableCell>{mobile.name}</TableCell>
              <TableCell>{mobile.brand}</TableCell>
              <TableCell>{mobile.model}</TableCell>
              <TableCell>${mobile.price.toFixed(2)}</TableCell>
              <TableCell>{mobile.ratings} ⭐</TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  {/* <Tooltip content="Details">
                    <span
                      className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      onClick={() => toggleMobileDetails(mobile._id)}
                    >
                      🔍
                    </span>
                  </Tooltip> */}
                  <Tooltip color="danger" content="Delete user">
                    <span
                      className="text-2xl text-danger cursor-pointer active:opacity-50"
                      onClick={() => handleMobileDelete(mobile._id)}
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminMobileDashboard;

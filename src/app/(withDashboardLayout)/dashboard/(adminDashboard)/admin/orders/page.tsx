/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { selectToken } from '@/redux/features/auth/authSlice';
import {
  useGetAllOrderQuery,
  useUpdateOrderMutation,
} from '@/redux/features/order/orderApi';
import { useAppSelector } from '@/redux/hooks';
import {
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from '@nextui-org/react';
import { toast } from 'sonner';
import { DeleteIcon } from '../../../dashboardComponent/DeleteIcon';
import { EyeIcon } from '../../../dashboardComponent/EyeIcon';

const ManageOrderPage = () => {
  const token = useAppSelector(selectToken);
  const {
    data: ordersData,
    isLoading,
    error,
    refetch,
  } = useGetAllOrderQuery(token);
  const [updateOrder] = useUpdateOrderMutation();

  // console.log(ordersData);

  const allStatus = ['Pending', 'Delivered', 'Canceled'];

  const handleChangeStatus = async (orderId: string, status: string) => {
    try {
      // console.log('Before API call:', { orderId, status, token });

      // Check if orderId and token are present
      if (!orderId) {
        toast.error('Order ID is required.');
        return;
      }
      if (!token) {
        toast.error('User token is required.');
        return;
      }

      // Call the API to update order status
      await updateOrder({ orderId, status, token }).unwrap();
      toast.success('Status Changed Successfully');

      // Refetch the order data after updating
      refetch();
    } catch (error) {
      // console.error('Failed to update status:', error);
      toast.error('Failed to update status');
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
        Orders Management
      </h1>
      <Table>
        <TableHeader>
          <TableColumn>Order Id</TableColumn>
          <TableColumn>Customer Id</TableColumn>
          <TableColumn>Order Date</TableColumn>
          <TableColumn>Amount</TableColumn>
          <TableColumn>Order Status</TableColumn>
          <TableColumn>Order Status</TableColumn>
          <TableColumn>Order Action</TableColumn>
        </TableHeader>
        <TableBody>
          {ordersData?.data?.map((order: any) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>{order.userId}</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>${order.totalAmount}</TableCell>
              <TableCell>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded ${
                    order.order_status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : order.order_status === 'Delivered'
                      ? 'bg-green-100 text-green-700'
                      : order.order_status === 'Canceled'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {order.order_status}
                </span>
              </TableCell>

              <TableCell>
                <Select
                  onChange={e => handleChangeStatus(order._id, e.target.value)}
                  placeholder="Select Order Status"
                >
                  {allStatus.map(status => (
                    <SelectItem key={status}>{status}</SelectItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2">
                  <Tooltip content="Details">
                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                      <EyeIcon />
                    </span>
                  </Tooltip>

                  <Tooltip color="danger" content="Delete Order">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
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

export default ManageOrderPage;

import React from 'react';
import ReviewAfterDelivery from './ReviewAfterDelivery';

interface OrderCardProps {
  order: {
    _id: string;
    userId: {
      name: string;
      email: string;
    };
    products: {
      productId: {
        name: string;
        price: number;
        description: string;
      };
      quantity: number;
    }[];
    totalAmount: number;
    order_status: string;
    createdAt: string;
  };
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  const { userId, products, totalAmount, order_status, createdAt } = order;

  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 my-4">
      <h2 className="text-xl font-semibold">Order ID: {order._id}</h2>
      <p>
        <strong>User:</strong> {userId.name} ({userId.email})
      </p>
      <p>
        <strong>Order Date:</strong> {new Date(createdAt).toLocaleDateString()}
      </p>
      <p>
        <strong>Total Amount:</strong> ${totalAmount}
      </p>
      <p>
        <strong>Status:</strong>{' '}
        <span
          className={`${
            order_status === 'Pending'
              ? 'text-yellow-600'
              : order_status === 'Delivered'
              ? 'text-green-600'
              : 'text-red-600'
          }`}
        >
          {order_status}
        </span>
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Products</h3>
        <ul>
          {products.map(product => (
            <li key={product.productId.name} className="mb-3">
              <p>
                <strong>Name:</strong> {product.productId.name}
              </p>
              <p>
                <strong>Description:</strong> {product.productId.description}
              </p>
              <p>
                <strong>Price:</strong> ${product.productId.price}
              </p>
              <p>
                <strong>Quantity:</strong> {product.quantity}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* Conditionally show "Give Review" button if the order is delivered */}
      {order_status === 'Delivered' && (
        <div className="mt-4">
          <ReviewAfterDelivery order={order} />
        </div>
      )}
    </div>
  );
};

export default OrderCard;

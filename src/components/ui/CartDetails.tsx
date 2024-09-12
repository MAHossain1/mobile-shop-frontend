/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { removeMobile, updateQuantity } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartDetails = ({ mobile }: any) => {
  const dispatch = useAppDispatch();

  const handleQuantity = (type: 'increment' | 'decrement', id: string) => {
    dispatch(updateQuantity({ type, id }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeMobile({ id }));
  };

  return (
    <div className="flex items-center justify-between space-x-4 border border-gray-300 rounded-lg p-4 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full max-w-md mx-auto mb-4">
      <img
        src={mobile.imgUrl}
        alt={mobile.name}
        className="w-24 h-24 object-cover rounded-md border border-gray-200 shadow-md"
      />
      <div className="flex-grow mx-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
          {mobile.name}
        </h3>
        <p className="text-lg font-bold text-gray-900 mb-2">${mobile.price}</p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantity('decrement', mobile._id)}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <Minus size={18} />
          </button>
          <span className="text-lg font-semibold">{mobile.quantity}</span>
          <button
            onClick={() => handleQuantity('increment', mobile._id)}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
      <button
        onClick={() => handleRemove(mobile._id)}
        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartDetails;

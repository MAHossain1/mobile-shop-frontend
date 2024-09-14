// components/CustomerTestimonials.tsx

import { Avatar } from '@nextui-org/react';
import ScrollToTop from './ScrollToTop';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d', // Replace with actual image path
    comment:
      'The best mobile shop I have ever used. Great prices and amazing customer service!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', // Replace with actual image path
    comment:
      'Wide selection of smartphones with excellent deals. Highly recommended!',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    image: 'https://i.pravatar.cc/150?u=a04258a2462d826712d', // Replace with actual image path
    comment:
      'Super fast delivery and the quality of the products is top-notch!',
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50 mx-auto w-full max-w-screen-xl radius-medium">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-gray-600">
          Hear from our satisfied customers about their shopping experience.
        </p>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default CustomerTestimonials;

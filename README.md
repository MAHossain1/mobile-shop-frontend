# Mobile Shop

**Mobile Shop** is a comprehensive platform tailored for mobile phone enthusiasts. It offers a streamlined and engaging shopping experience, enabling users to explore, compare, and purchase the latest smartphones. With advanced features like user reviews, order management, and a modern UI/UX design, the platform ensures a user-friendly experience for both customers and administrators.

## Live URLs

- **Backend**: [Mobile Shop Backend](https://mobile-shop-backend-seven.vercel.app/)
- **Frontend**: [Mobile Shop Frontend](https://mobile-shop-frontend-gamma.vercel.app/)

## Technologies Used

- **Next.js**: For server-side rendering and static site generation.
- **Redux**: State management for user and cart data.
- **Redux Persist**: To persist cart data across sessions.
- **NextUI**: For UI components.
- **Sonner**: For toast notifications.
- **Next Themes** (Optional): For implementing dark and light modes.

## 🚀 User and Admin Credentials

### User Login

- **Email**: user1@mobile.com
- **Password**: ami123

### Admin Login

- **Email**: admin@mobile.com
- **Password**: ami123

## Key Features

### UI/UX Enhancements

- **Improved User Interface**: Upgraded from previous versions to provide a more engaging and user-friendly experience.
- **Responsive Design**: Specifically designed for mobile enthusiasts, featuring intuitive navigation and visually attractive elements

### Redux Persist

- Implemented Redux Persist to retain user cart data across sessions, providing a seamless shopping experience even after page reloads or returning to the platform.

### Error Handling

- Implemented Next.js error handling features to provide informative error messages and graceful fallbacks, ensuring a robust user experience even in the event of unexpected errors.

### Navbar Enhancements

- Added key elements to the navigation bar including:
  - **Login/Register Button**
  - **Logout Button**
  - **Cart Icon** with a badge showing the number of unique products added.

### Pages

#### Product Pages

- **Product Listing Pages (`/mobile` , `/`,)**:
  - Add mobile to cart with an "Add To Cart" button.
  - Cart icon in the navbar displays a badge for unique mobiles added.
- **Product Detail Pages (`/mobile/123`)**:
  - Add mobiles to cart from the detail page.
  - Authorized users can provide reviews without the need to purchase or receive the product.
  - Reviews displayed below mobile details.

#### Login / Register Page

- **Register Page (`/register`)**: Allows users to create an account with essential details such as User Name, Email, and Password.
- **Login Page (`/login`)**: Enables secure user login with email and password credentials.

#### Dashboard Page

- **Admin Dashboard**:
  - **Mobiles (`/dashboard/admin`, `/dashboard/admin/mobiles`)**: Table view of all mobiles with delete button
  - **Add Mobile (`/dashboard/admin/add-mobile`)**: Admin will be able to new mobile.
  - **Orders Management (`/dashboard/admin/orders`)**: Manage order status transitions from Pending to Delivered or canceled.
- **User Dashboard**:
  - **My Orders (`/dashboard/my-orders`)**: View personal order history and provide ratings for delivered products.

#### Checkout Page (`/checkout`)

- Displays the selected products with their quantities and calculates the total price, including a delivery fee of 15 Taka.
- Offers "Cash On Delivery" as the payment method.
- The "Proceed Checkout" button generates an order with a pending status, empties the cart, and shows a toast notification once the order is completed.

### Optional Tasks

- **Dark & Light Mode**: Implemented using the Next Themes package.
- **Server Actions**: Utilized to POST reviews for products on the Product Detail Page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MAHossain1/mobile-shop-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mobile-shop-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

We welcome contributions from the community! To contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature or fix

```bash
   git checkout -b my-feature-branch
```

3. Make your changes and ensure all tests pass.
4. Submit a pull request with a detailed description of the changes you’ve made.

## License

This project is licensed under the MIT License. For more details, refer to the LICENSE file.

This file contains all relevant sections such as installation, contributing, and license in one document, as requested.

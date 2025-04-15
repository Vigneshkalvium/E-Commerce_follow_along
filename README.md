# Ecommerce Follow Along Project
Welcome to the **Ecommerce Follow Along Project**, this is a hands-on project where we will build a complete e-commerce application using the MERN stack(MongoDB, Express.js, and Node.js). The goal is to learn how to develop a full-stack web application step by step.

## Milestone 1: Project Overview

#### 1. Understanding the MERN Stack:
**MongoDB :** A database for storing application data in a flexible, document based format.
**Express.js :** A backend web application framework for building APIs and handling server logics.
**React.js :** A framework library for building User Interfaces.
**Node.js :** A runtime environment that allows javascript to run on the server.

#### 2. REST API Structure
REST APIs are used to allow communication between the frontend and backend.
We'll create APIs for:
- **User Authentication**: Allowing users to register and log in.
- **Product Management**: Adding, Updating, and Retrieving products data.
- **Order Handling**: Managing customer orders.

#### 3. Database Schema Design
We'll learn how to design and organize data using MongoDB. A schema helps us define how the data is stored and related.


#### 4. Authentication
Authentication ensures only the right people can access certain features. For example:
- Users need to log in to place orders or see their personal data.
- It keeps the app secure by verifying users' identities.~

#### SECTION 2:
 Milestone 2:
  In this I create a react app and design the login page and style it Tailwindcss. It gives a wonderful Experience and i get some knowledge that how to work on a professional project. 

  ## Milestone 3:
  Set up dedicated folders for organizing backend code effectively. Initialized and configured a Node.js server to handle API requests. Connected the application to MongoDB to store and manage data. Implemented basic error handling to ensure smooth server operation.

  ## Milestone 4:
  Created a User Model to define how user data is structured in the database also developed a user interactions, like adding or retrieving data. Additionally, configured Multer to handle file uploads, allowing users to store files such as images.

  ## Milestone 5:
   In this I create a react app and design the signup page and style it Tailwindcss. It gives a wonderful Experience and i get some knowledge that how to work on a professional project. 

## Milestone 6:
In this milestone, we created a backend endpoint to securely store user data during signup. Key features include:

- Password Encryption: Encrypting passwords before storing them in the database to enhance security.
- Secure Data Storage: Saving user details while following best security practices.
- Compliance: Ensuring password protection aligns with security laws like  GDPR and PCI-DSS.

## Milestone 7 :
In this milestone, we implemented user login authentication by validating credentials and comparing encrypted passwords using bcrypt. The process involves retrieving user data, hashing the entered password, and matching it with the stored hash. If authenticated, access is granted; otherwise, an error is returned. This enhances security and protects user data. 🚀

## Milestone 8:
### Learning Goals 🎯  
- Build a **frontend card component** for products.  
- Display these **product cards** on the homepage.  

This milestone focuses on designing a reusable product card and integrating it into the homepage to showcase multiple products effectively. 🚀

# Milestone 9 - Creating a Product Form

## Why Create a Product Form?
The Product Form is essential for adding new products to the database. It allows users to input product details, which will be stored in MongoDB Atlas and displayed on the Products Home Page.

## Key Features of the Product Form:
- **Product Details Input:** The form collects essential details like:
  - Product Name  
  - Price  
  - Category  
  - Description  
  - Stock Availability  
- **Data Storage:** The entered data will be saved in MongoDB Atlas.  
- **Future Enhancements (for experimentation):**  
  - **Admin Access:** Only admins can upload products.  
  - **Shop Profiles:** A user with a "Shop Profile" can add and manage products.  

## Steps to Implement:
1. **Create a Product Form** in **React/HTML** to collect product details.  
2. **Handle Form Submission** to store the product data in MongoDB.  
3. **Restrict Access** (Optional Enhancements) based on user roles (Admin/Shop).  

This milestone helps in understanding how to structure and manage product data efficiently.

# Milestone 10 Summary

In this milestone, you'll learn how to create a **mongoose schema** for products and build an **endpoint** to store product details in MongoDB. The main steps include:

## 1. Product Schema
- Define the structure for product data (e.g., name, description, price) with validation for required fields and correct data types.

## 2. Endpoint Creation
- Build a POST endpoint to receive product data, validate it, and save it to MongoDB.

## 3. Validation
- Ensure only valid data is saved, which helps maintain data integrity and prevent errors.

# Milestone 11

In Milestone 11, I focused on implementing functionality to send and receive product data between the backend and frontend of my e-commerce project. On the backend, I created an API endpoint that retrieves all products from MongoDB, sending the data to the frontend in JSON format. On the frontend, I created a function to fetch the product data and display it dynamically using a previously created product card component. This milestone helped me understand how to handle data transfer between the backend and frontend and how to display dynamic content using React components.


# Milestone 12

In Milestone 12, I focused on filtering product data based on the user’s email and displaying it dynamically on the frontend. On the backend, I created an API endpoint that retrieves products from MongoDB based on a specific user email. On the frontend, I developed a function to fetch the filtered data and displayed it using the previously created product card component. This milestone helped me understand how to filter data with specific constraints and pass it to the client for dynamic rendering, improving how user-specific product information is handled and shown.

# Milestone 13

Updating Existing Data in MongoDB
- Create a PUT or PATCH API endpoint using Express.js.
- Use Mongoose to find and update the document by its ID.
- Ensure validation and error handling for a smooth update process.

# Milestone 14
Deleting Data from MongoDB
- Create a DELETE API endpoint using Express.js.
- Use Mongoose to find and delete the document by its ID.
- Ensure validation and error handling for a smooth deletion process.

# Milestone 15

In Milestone 15, you will learn how to create a reusable Nav component and integrate it across multiple pages, including Home, My Products, Add Product, and Cart. The focus will be on ensuring smooth navigation and making the navbar fully responsive for all screen sizes. By completing this milestone, you will gain a deeper understanding of component reusability and navigation in web applications, improving both user experience and maintainability. 🚀

# Milestone 16

In this milestone, you will create a new page to display detailed information for each product, including an option to adjust quantity and an "Add to Cart" button. This will enhance the user experience by allowing better product interaction. Once completed, push your code to a public GitHub repository, update the README with your progress, and submit the repository link as required. 

# Milestone 17:
In this milestone, we designed the cart schema to store product details in a user's cart, including product ID, name, quantity, price, and total. The schema also tracks the total amount for the cart and associates the cart with a specific user.

# Milestone 18: 
In this milestone, we created a **GET `/cart`** endpoint to fetch the user's cart details, including product information and total amount. The endpoint ensures that only authenticated users can access their cart and retrieves the cart data from the database.

# Milestone 19: Cart Functionality 🛒
Learning Goals 🎯
By the end of this milestone, you will be able to:
Create a cart page that displays products using the endpoint built in Milestone 18.
Implement + and - buttons to adjust product quantity.
Develop backend endpoints to handle quantity updates.

# Milestone 20:
In Milestone 20, you will focus on building a user profile page that displays essential user information. This involves creating a backend endpoint to send all user data via email and a frontend profile page to display the retrieved data. The profile page will include sections for the user's photo, name, and email, along with a dedicated section for addresses. If addresses exist, they will be displayed with an "Add Address" button for adding new ones. If no addresses are found, a message stating "No address found" will be shown. This milestone will enhance your understanding of user data management and frontend-backend integration. 🚀

# Milestone 21:
In this milestone, you will develop a frontend form to capture user addresses, including country, city, address lines, zip code, and address type. You will implement state management to store the entered address details and ensure smooth navigation from the user profile page to the address form when the "Add Address" button is clicked. This milestone focuses on enhancing user experience by providing a structured and interactive way to input and manage address information. 🚀

# Milestone 22:
In Milestone 22, you will develop an API endpoint to receive address data submitted from the frontend address form. This endpoint will process the received address details and add them to the addresses array inside the user's collection in the database. By implementing this, you will gain a deeper understanding of how to handle data submission, update user records, and manage arrays within a database. This milestone is essential for enhancing backend development skills, particularly in handling API requests and modifying stored user data efficiently. 🚀

# Milestone 23:
Milestone 23 focuses on implementing the order placement flow. A "Place Order" button will be added to the cart page, which, when clicked, navigates to the "Select Address" page. This page will display all available addresses associated with the user, allowing them to choose one. A backend endpoint will be created to retrieve and send all user addresses to the frontend, ensuring seamless address selection before order confirmation.

# Milestone 24:
The Order Summary page will provide users with a clear overview of their purchase before finalizing the order. It will display all the products being ordered, including their details such as name, quantity, and price. Below the product list, the selected delivery address will be shown to ensure the user reviews it before proceeding. The total cart value will also be displayed, giving a complete cost breakdown. At the bottom of the page, a "Place Order" button will be available, allowing the user to confirm and complete their purchase seamlessly.

# Milestone 25:
This endpoint allows users to place orders by sending product details, user information, and address details. The system retrieves the user's _id using their email and processes each product as a separate order while maintaining the same address. Each order is stored in the MongoDB orders collection using the previously defined Order schema. This ensures that every product is tracked as an independent order while linking all orders to the same user and delivery address.

# Milestone 26:
This endpoint allows retrieval of a user's order history using their email address. When a request is made, the server first searches for the user's _id based on the provided email. Once the _id is obtained, it queries the database to fetch all orders associated with that user. The response includes the complete list of orders, enabling seamless tracking of purchase history. This functionality ensures efficient data retrieval while maintaining a user-friendly experience.

# Milestone 27:
Milestone 27 focuses on implementing the My Orders page in the e-commerce project. This involves sending a GET request to the /my-orders endpoint, where the user's email is passed to retrieve all their orders from the database. The fetched orders will then be displayed dynamically on the My Orders page, ensuring users can easily view their purchase history. Additionally, a navigation link to this page will be added to the navbar for better accessibility. This update enhances the user experience by providing a dedicated section for order tracking and management.

# Milestone 28:
Milestone 28 enhances the **My Orders** page by adding a **Cancel Order** button for each active order. This button will allow users to cancel an order if it has not already been canceled. If an order is already marked as canceled, the button will not be displayed. To achieve this, a new **API endpoint** will be created to handle order cancellations. When a user clicks the cancel button, the order **ID** will be sent to this endpoint, which will retrieve the order, update its status to **canceled**, and save the changes. This feature improves order management and gives users more control over their purchases.

# Milestone 29 - PayPal Integration Setup:
In this milestone, we set up the PayPal sandbox environment for online payments. First, create a PayPal account and access the PayPal Developer Dashboard. From there, locate the sandbox accounts section, copy the UserID, and save it. Additionally, retrieve and save the client ID from the sandbox account. On the order confirmation page, implement two payment options: Cash on Delivery (COD) and online payment. Use radio buttons to toggle between these options, ensuring that the PayPal payment buttons appear when online payment is selected. In the next milestone, we will implement the functionality to display and process PayPal online payments.

# Milestone 30 - Implementing PayPal Online Payments
In this milestone, we integrate PayPal online payments into our project. Using the previously created PayPal sandbox account and client ID, implement the PayPal API to enable online transactions. Install the react-paypal-js NPM package, which provides the PayPalScriptProvider component to display various payment methods, including credit and debit cards. This step will enhance your understanding of integrating online payments seamlessly into your application.

# Milestone 31
In this milestone, we set up global state management in our React application using the react-redux package. First, we installed react-redux via npm. Then, we created a new folder named store containing two files: store.js and userActions.js. Inside store.js, we defined a userReducer function responsible for managing the user's email in the global state and configured the Redux store using this reducer. In userActions.js, we created an action creator function named setEmail to dispatch actions that update the email value in the store. Finally, in index.js, we wrapped the root <App /> component with Redux’s <Provider> component and passed the store as a prop to ensure the global state is accessible throughout the application. This setup allows us to manage and access the user's email globally using Redux.

# Milestone 32
In Milestone 32, we implemented global state management to handle user authentication by storing the user's email after login. When the user logs in successfully, we use the dispatch method from Redux to store their email in a global state using a slice (userSlice). This allows us to access the email across different components using the useSelector hook. By doing this, we avoid passing props manually and ensure a consistent user context throughout the application. This email is then used to filter and fetch data specific to the logged-in user in other pages, enhancing both security and user experience.

# Milestone 33
To begin using JWT authentication in your Node.js application, first install the jsonwebtoken package by running npm install jsonwebtoken in your project directory. Once installed, you can use the sign method from this package to create a JWT token by passing a payload that includes the user's email and ID. To control how long the token remains valid, you can set the expiresIn property using the maxAge option, such as '1d' for one day or '3h' for three hours. After generating the token, use the res.cookie() method provided by Express to store the token in a cookie on the user's browser. For security purposes, ensure the cookie is set with httpOnly: true to prevent access from client-side scripts. Here’s an example of setting the cookie: res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });, where maxAge is in milliseconds. This setup helps manage user sessions securely using JWTs stored in browser cookies.
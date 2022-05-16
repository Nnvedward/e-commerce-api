## E-Commerce Management system API
A Restful API for an E-Commerce management system.

# Getting Started

**Prerequisites**

In order to have this project up and running you will need:

 `NodeJS 10+`

**Setup** 

First, you need to clone this project using one of the links above, using this command:

 git clone `https://github.com/Nnvemeka/e-commerce-api.git`

Then you should run: `npm install`

Create a **config** folder in the **src** directory and create a `dev.env` file, add the following:  
**PORT**:  
**MONGODB_URL**:  
**JWT_SECRET**:  

And afterward, you supposed to run: `npm run dev`, to run the project in your local machine.

Then head to the localhost on port 8080 **https://localhost:8080**

Congrats the project is fully working.


# Endpoints
| Methods     | Endpoints              | Access    | Description |
| ----------  | -------------          | --------  | ----------- |
| POST        | /auth/sign-up          | Public    | Sign up     |
| POST        | /auth/sign-in          | Public    | Sign in     |
| PATCH       | /users/userID          | Private   | Update user |
| GET         | /users/userID          | Private   | Get a user  |
| GET         | /users                 | Private   | Get all users |
| DELETE      | /users/userID          | Private   | Delete a users|
| POST        | /role/role             | Public    | Create a role |
| GET         | /role/roleID           | Public    | Get a role    |
| POST        | /role/permission       | Public    | Create a permission  |
| GET         | /role/manage-permission/roleID | Public    | Manage permission    |
| POST        | /role/manage-role-permission/roleID | Public    | Manage role permission    |
| GET         | /role/assigned-permission/roleID    | Public    | Get assigned role permissions    |
| POST        | /category/create        | Public    | Create a category   |
| PATCH       | /category/update/categoryID     | Public    | Update a category  |
| GET         | /category/find/categoryID       | Public    | Get a category     |
| GET         | /category              | Public    | Get all category   |
| DELETE      | /category/categoryID   | Public    | Delete a category  |
| POST        | /manufacturer/create   | Public    | Create a manufacturer   |
| PATCH       | /manufacturer/update/manufacturerID | Public    | Create a manufacturer|
| GET         | /manufacturer/find/manufacturerID   | Public    | Get a manufacturer   |
| GET         | /manufacturer          | Public     | Get all manufacturers   |
| DELETE      | /manufacturer/manufacturerID        | Public    | Delete a manufacturer   |
| POST        | /item/create           | Public     | Create an item   |
| PATCH       | /item/update/itemID    | Public     | update an item   |
| GET         | /item/find/itemID      | Public     | Get an item      |
| GET         | /item                  | Public     | Get all items    |
| DELETE      | /item/itemID           | Public     | Delete an item   |
| POST        | /cart/add              | Public     | Add item to cart |
| PATCH       | /cart/update/cartID    | Public     | update cart      |
| GET         | /cart/userID           | Public     | Get user cart    |
| GET         | /cart                  | Public     | Get all carts    |
| DELETE      | /cart/cartID           | Public     | Delete cart      |
| POST        | /order/create          | Public     | Create order     |
| PATCH       | /order/update/orderID  | Public     | update order     |
| GET         | /order/userID          | Public     | Get user order   |
| GET         | /order                 | Public     | Get all orders   |
| DELETE      | /order/orderID         | Public     | Delete order     |
| POST        | /shipping/create             | Public     | Create shipping address     |
| PATCH       | /shipping/update/shippingID  | Public     | update shipping address     |
| GET         | /shipping/shippingID         | Public     | Get shipping address        |
| GET         | /shipping                    | Public     | Get all shipping addresses  |
| DELETE      | /shipping/shippingID         | Public     | Delete shipping address     |

# Contributing
Contributions, issues and feature requests are welcome!


# Show your support
Give a ⭐️ if you like this project!
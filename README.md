## /users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:

- `email` (string): The email of the user. Must be a valid email address.
- `password` (string): The password of the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code:** `200 OK`
- **Response Body:**
  ```json
  {
    "token": "your_jwt_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com",
      "socketId": null
    }
  }
  ```

#### Error
- **Status Code:** `400 Bad Request`
- **Response Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      },
      {
        "msg": "password must be greater than 6",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

- **Status Code:** `401 Unauthorized`
- **Response Body:**
  ```json
  {
    "message": "Invalid credentials"
  }
  ```# API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object with the following fields:

- `email` (string): The email of the user. Must be a valid email address.
- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string): The last name of the user. Must be at least 3 characters long.
- `password` (string): The password of the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}



{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com",
    "socketId": null
  }
}



{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be greater than 3",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be greater than 6",
      "param": "password",
      "location": "body"
    }
  ]
}



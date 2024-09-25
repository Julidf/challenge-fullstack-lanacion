## Full-stack Challenge Club La Nación.

## Overview

This application is a basic level challenge of a landing page, presenting information requested from the backend.
It provides a basic backend infrastructure to handle requests and responses from a JSON file used as a database.


## Technologies Used

* Vite
* SWR
* TypeScript
* JavaScript
* Node.js
* Express


## API Endpoints

**/api/tourism**
- GET
- Retrieves tourism accounts filtered by specific tags. **returns** a maximum of 4 accounts per request. The response includes the account data and the total number of accounts found.

**/api/discount-codes**
- GET
- Retrieves discount code accounts that have a voucher. Similar to the tourism endpoint **returns** up to 4 accounts per request. The response includes the account data and the total number of accounts found.


## Getting Started

To get started with the application, follow these steps:

1. Clone the repository.

### Frontend Initialization

2. Navigate to the frontend directory.
3. Install the dependencies using `npm install`.
4. Start the frontend server using `npm run dev`.
5. This will start the frontend application on the port 5173.

### Backend Initialization

2. Navigate to the backend directory.
3. Install the dependencies using `npm install`.
4. Start the backend server using `npm start`.
5. This will start the backend application on the port 8000.

### Docker Initialization

If you prefer to get started with the app using Docker:

2. Ensure Docker is installed on your machine.
3. Navigate to the root directory of the project.
4. Build the Docker images using:
   ```bash
   docker-compose build
   ```
5. Start the application using:
   ```bash
   docker-compose up
   ```
This will initialize both the frontend and backend services in separate containers.




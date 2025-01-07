# Travel API Integration Documentation

## General Overview

This documentation provides a comprehensive guide to the integration of a travel API that fetches flight data and creates flight orders using Duffel's API. The integration consists of a backend implemented in both Python (Flask) and Node.js (Express), and a frontend component. The backend fetches flight data from FlightView and creates flight orders via Duffel's API. The data is stored in Firebase Firestore for persistence.

## Quick Start Guide

### Prerequisites

- Python 3.x
- Node.js and npm
- Firebase account and service account key
- Duffel API access token
- Environment variables set in a `.env` file

### Running the Backend Locally

#### Python Backend

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Set Up Environment:**

   - Create a `.env` file in the root directory and add your Duffel API access token:

     ```
     DUFFEL_ACCESS_TOKEN=your_duffel_access_token
     ```

   - Place your Firebase service account key JSON file in the root directory and name it `serviceAccountKey.json`.

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Server:**

   ```bash
   python fetch_flight_data.py
   ```

   The server will run on `http://localhost:5000`.

#### Node.js Backend

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run the Express Server:**

   ```bash
   node node-backend.js
   ```

   The server will run on `http://localhost:6000`.

### Running the Frontend Locally

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Frontend Server:**

   ```bash
   npm start
   ```

   The frontend will be accessible at `http://localhost:3000`.

### Running Remotely

- Deploy the backend and frontend to your preferred cloud service (e.g., AWS, Heroku, Vercel).
- Ensure environment variables are set appropriately on the cloud platform.

### Testing Options

- Integration tests are available in `integration_tests.py`.
- Run tests using:

  ```bash
  python -m unittest integration_tests.py
  ```

## Troubleshooting Guide

- **Common Issues:**
  - Ensure all environment variables are correctly set.
  - Verify that the Firebase service account key is correctly placed and named.
  - Check network connectivity if API requests fail.

- **Error Logs:**
  - Check console logs for error messages.
  - Use debugging tools like Postman to test API endpoints.

## Support Contact Information

For support, please contact:

- **Email:** support@example.com
- **Phone:** +1-800-555-0199

## Links to API Provider Documentation

- [FlightView API Documentation](https://www.flightview.com/developers/)
- [Duffel API Documentation](https://duffel.com/docs/api)

This documentation should provide a clear path to setting up and running the integration, as well as troubleshooting common issues. For further assistance, please refer to the support contact information provided.
# Duffel Flights Integration Documentation

## General Overview

This documentation provides a comprehensive guide to integrating with the Duffel Flights API using a Flask backend. The integration allows you to list flight offers by making requests to the Duffel API. The backend is built using Flask and communicates with Duffel's API to fetch flight offers based on the provided request data. The integration also includes a middleware for handling CORS, ensuring that the API can be accessed from different origins.

## Quick Start Guide

### Prerequisites

- Python 3.6 or higher
- pip (Python package manager)
- Duffel API Key

### Backend Setup

#### Running Locally

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add your Duffel API key:

   ```plaintext
   DUFFEL_API_KEY=your_duffel_api_key_here
   ```

3. **Install Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Server:**

   ```bash
   python app.py
   ```

   The server will start on `http://localhost:5000`.

#### Running Remotely

1. **Deploy to a Cloud Provider:**

   - Ensure your cloud environment supports Python and Flask.
   - Set the `DUFFEL_API_KEY` environment variable in your cloud environment.
   - Deploy the application using your cloud provider's deployment process.

2. **Access the API:**

   The API will be accessible at the URL provided by your cloud provider.

### Frontend Setup

The frontend component is not included in this documentation. Ensure your frontend is configured to make POST requests to the `/duffel-flights-list-offers` endpoint.

### Testing Options

- **Integration Tests:**

  Integration tests are available in the `integration_tests.py` file. To run the tests, use the following command:

  ```bash
  python -m unittest integration_tests.py
  ```

## Troubleshooting Guide

- **Common Issues:**

  - **Invalid API Key:**
    Ensure that the `DUFFEL_API_KEY` is correctly set in your environment variables.

  - **CORS Errors:**
    If you encounter CORS errors, verify that the middleware is correctly applied and that the headers are set to allow requests from your frontend's origin.

  - **Network Issues:**
    Check your network connection and ensure that the Duffel API is reachable from your server.

- **Debugging:**

  - Use Flask's built-in debugger by setting `FLASK_ENV=development` in your environment variables for more detailed error messages.

## Support Contact Information

For support related to this integration, please contact:

- **Email:** support@example.com
- **Phone:** +1-800-555-0199

## Links to API Provider Documentation

- [Duffel API Documentation](https://duffel.com/docs/api)
- [Duffel API Authentication Guide](https://duffel.com/docs/api/authentication)

This documentation should provide you with the necessary information to set up and troubleshoot the Duffel Flights API integration. For further assistance, please refer to the support contact information provided above.
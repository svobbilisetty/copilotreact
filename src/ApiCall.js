import axios from 'axios';

export const getStocks = async () => {
  try {
    const response = await axios.get('http://localhost:3001/stock');
    // Assuming your stock data is in response.data
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // You might want to handle the error more gracefully, e.g., by returning a default value or throwing an error.
    throw error;
  }
};

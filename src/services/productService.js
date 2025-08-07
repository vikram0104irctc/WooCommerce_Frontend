import api from './api';

export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const ingestProducts = async () => {
  try {
    const response = await api.get('/products/ingest');
    return response.data;
  } catch (error) {
    console.error('Error ingesting products:', error);
    throw error;
  }
};

export const evaluateSegment = async (rules) => {
  try {
    const response = await api.post('/segments/evaluate', { rules });
    return response.data.data;
  } catch (error) {
    console.error('Error evaluating segment:', error);
    throw error;
  }
};
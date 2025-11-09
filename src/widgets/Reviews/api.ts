// пример axios запроса
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const getReviews = async () => {
  const res = await axios.get(`${API_URL}/reviews`);
  return res.data;
};

export const postReview = async (data: any) => {
  const res = await axios.post(`${API_URL}/reviews`, data);
  return res.data;
};

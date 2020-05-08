import axios from 'axios';
export const getStoreData = async () => await axios.get('/store');

export const getNextPageData = async (type, cursor, id) => await axios.get(`/fetch?type=${type}&id=${id}&currentCursor=${cursor}`);
export const generateCheckout = async cart => await axios.post(`/checkout`, {
  data : cart
});

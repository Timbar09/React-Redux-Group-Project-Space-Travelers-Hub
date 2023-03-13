import axios from 'axios';

const getData = async (url) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export default getData;

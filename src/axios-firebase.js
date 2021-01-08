import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://math-race-7ea5f-default-rtdb.europe-west1.firebasedatabase.app', // 'https://react-my-burger-2492e.firÍebaseio.com',
});

export default instance;

import axios from 'axios';

axios.defaults.baseURL = 'https://final-project-back.herokuapp.com/api';

async function getBalance() {
    const response = await axios.get('/users/balance');
    return response.data.data.user.balance;
}

export { getBalance };
import axios from 'axios';

const supportedCurrencies = ['USD', 'EUR', 'RUR']

function getCurrencyRates() {
    return axios.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
        .then((response) => response.data.filter(({ ccy }) => supportedCurrencies.includes(ccy)));
}

export { getCurrencyRates };
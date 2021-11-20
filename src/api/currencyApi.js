import axios from 'axios';

const supportedCurrencies = ['USD', 'EUR', 'RUR'];

const todayDate = new Date().toISOString().slice(0, 10);
const date = todayDate.split('-').join('');

function getCurrencyRates() {
  return axios
    .get(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?date=${date}`,
    )
    .then(response =>
      response.data.filter(({ ccy }) => supportedCurrencies.includes(ccy)),
    );
}

export { getCurrencyRates };

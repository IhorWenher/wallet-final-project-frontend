const currencyRates = (state) => state.walletReducer.currency.currencyRates;
const currencyRatesLoading = (state) => state.walletReducer.currency.currencyRatesLoading;
const currencyRatesError = (state) => state.walletReducer.currency.currencyRatesError;

const currencySelectors = { currencyRates, currencyRatesLoading, currencyRatesError };

export default currencySelectors;
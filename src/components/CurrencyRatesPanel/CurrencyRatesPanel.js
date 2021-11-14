import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencies } from '../../redux/currency/currencyOperations';
import currencySelector from "../../redux/currencySelectors";

function CurrencyRatesPanel() {

    const currencyRates = useSelector(currencySelector.currencyRates);
    const currencyRatesLoading = useSelector(currencySelector.currencyRatesLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrencies);
    }, [dispatch]);

    return (
        <div>
            {currencyRatesLoading
             ? <div><h1>Loading rates ...</h1></div>
             : <div>
                 {currencyRates.map(({ ccy, buy, sale }) => <h1 key={ccy}>{`${ccy} ${buy} ${sale}`}</h1>)}
               </div>}
        </div>
    );
}

export default CurrencyRatesPanel;
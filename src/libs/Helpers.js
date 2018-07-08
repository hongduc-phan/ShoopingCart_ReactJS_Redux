class Helpers {
    static toCurrency (value, currencyUnit, position= "left") {
        if (position === 'left') {
            return currencyUnit + ' ' + value;
        }
        else {
            return value + ' ' +currencyUnit;
        }
    }
}

export default Helpers;
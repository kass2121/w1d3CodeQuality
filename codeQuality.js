module.exports = {
    isVowel,
    computeSalesCommission,
    calcDownpayment,
    convertFahrenheit,
    calcDistance
};

/**
 * the program will return the boolean value 
 * 
 * @param {string} string  string
 * @returns {boolean} return boolean
 */
function isVowel(string) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
        return true;
    else
        return false;
}
//----------------------------------------------------------------
/**
 * the program will return the Commission
 * 
 * @param {boolean} isSalariedAccount  If the salesman is salaried  or not
 * @param {number} salesAmount the amount of sales
 * @returns {number} return numbers
 */
function computeSalesCommission(isSalariedAccount, salesAmount) {

    let percent = 0;
    //If the salesman is salaried 

    if (isSalariedAccount == true) {
        if (salesAmount < 300) {
            percent = 0;
        } else if (salesAmount >= 300 && salesAmount <= 500) {
            percent = 0.01;
        } else {
            percent = 0.02;
        }
    }
    // If the salesman is not salaried 
    else {
        if (salesAmount >= 300 && salesAmount <= 500) {
            percent = 0.02;
        } else if (salesAmount > 500) {
            percent = 0.03;
        }
    }

    let commission = salesAmount * percent;
    return commission;
}
//test
console.log(computeSeleCommission(false, 300));
//----------------------------------------------

/**
 * the program will return the downPayment
 * 
 * @param {number} cost
 * @returns {number} return number
 */

function calcDownpayment(cost) {
    function calcDownpayment(cost) {
    let downPayment = 0;
    if (cost > 0 && cost < 50000) {
        downPayment = cost * 0.05;
    } else if (cost >= 50000 && cost < 100000) {
        downPayment = 2500 + (0.1 * (cost - 50000));
    } else if (cost >= 100000 && cost < 200000) {
        downPayment = 7500 + (0.15 * (cost - 100000));
    } else if (cost >= 200000) {
        downPayment = 5000 + (0.1 * (cost - 200000));
    }
    return downPayment;
}
//call the function
console.log(calcDownpayment(50000));

}

/**
 * the program will return the distance
 * 
 * @param {number} fahrenheit the input
 * @param {number} celsius the output
 * @returns {number} return celsius
 */
function convertFahrenheit(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;

}
//call function
console.log(convertFahrenheit(100));

/**
 * the program will return the distance
 * 
 * @param {number} x1
 * @param {number} y1 
 * @param {number} x2
 * @param {number} y2
 * @returns {number} return ditance
 */
function calcDistance(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    return distance;
}
console.log(Math.round(calcDistance(0, 0, 5, 5)));

// the end
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = (dollarValue) =>{
    let valueEuro = dollarValue/1.2;
    let valueYen = valueEuro * 127.9
    return valueYen
}

const fromYenToPound = (yenValue) =>{
    let valueEuro1 = yenValue/127.9;
    let valuePound = valueEuro1 * 0.8;
    return valuePound
}
module.exports = {sum, fromDollarToYen, fromYenToPound, fromEuroToDollar, sum}
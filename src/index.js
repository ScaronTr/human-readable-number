const singleDigits = {
   '0': 'zero',
   '1': 'one',
   '2': 'two',
   '3': 'three',
   '4': 'four',
   '5': 'five',
   '6': 'six',
   '7': 'seven',
   '8': 'eight',
   '9': 'nine',
}
const TenToTwenty = {
   '10': 'ten',
   '11': 'eleven',
   '12': 'twelve',
   '13': 'thirteen',
   '14': 'fourteen',
   '15': 'fifteen',
   '16': 'sixteen',
   '17': 'seventeen',
   '18': 'eighteen',
   '19': 'nineteen',
} 

const dozens = {
   '2': 'twenty',
   '3': 'thirty',
   '4': 'forty',
   '5': 'fifty',
   '6': 'sixty',
   '7': 'seventy',
   '8': 'eighty',
   '9': 'ninety',
}

let result;

module.exports = function toReadable (number) {
   result = '';
   number = number.toString()

   for (let i = 0; i < number.length; i++) {
      if (number.length === 1) {
         for (let key in singleDigits) {
            if (key === number[i]) {
               result = singleDigits[key];
            };
         };
      } else if (number.length === 2) {
         if (Number(number) >= 10 && Number(number) <= 19) {
            for (let key in TenToTwenty) {
               if (key === number) {
                  result = TenToTwenty[key];
               };
            };
            break;
         } else if (number[1] === '0'){
            for (let key in dozens) {
               if (key === number[i]) {
                  result = dozens[key];
               };
            };
            break;
         } else {
            for (let key in dozens) {
               if (key === number[i]) {
                  result = `${result}${dozens[key]}`;
               };
            };
            for (let key in singleDigits) {
               if (key === number[i + 1]) {
                  result = `${result} ${singleDigits[key]}`;
               };
            };
            break;
         };
      } else if (number.length === 3) {
         if (Number(number) % 100 === 0) {
            for (let key in singleDigits) {
               if (key === number[i]) {
                  result = `${singleDigits[key]} hundred`;
               };
            };
            break;
         } else {
            for (let key in singleDigits) {
               if (key === number[i]) {
                  result = `${singleDigits[key]} hundred`;
               };
            };
            if (Number(number.slice(1, 3)) >= 10 && Number(number.slice(1, 3)) <= 19) {
               for (let key in TenToTwenty) {
                  if (key === number.slice(1, 3)) {
                     result = `${result} ${TenToTwenty[key]}`;
                  };
               };
               break;
            } else if (number[2] === '0'){
               for (let key in dozens) {
                  if (key === number[i + 1]) {
                     result = `${result} ${dozens[key]}`;
                  };
               };
               break;
            } else {
               for (let key in dozens) {
                  if (key === number[i + 1]) {
                     result = `${result} ${dozens[key]}`;
                  };
               };
               for (let key in singleDigits) {
                  if (key === number[i + 2]) {
                     result = `${result} ${singleDigits[key]}`;
                  };
               };
               break;
            };
         };
   };
   };
   return result;
}

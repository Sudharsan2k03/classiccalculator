const funFacts = {
   0: "Zero is the only number that can't be represented in Roman numerals.",
  1: "One is the first odd number and the multiplicative identity.",
  2: "Two is the only even prime number.",
  3: "Three is the first odd prime number and considered lucky in many cultures.",
  4: "Four is the smallest composite number and the first square number after one.",
  5: "Five is the number of human senses.",
  6: "Six is the smallest perfect number (sum of its divisors equals the number).",
  7: "Seven is often considered a lucky number and appears frequently in mythology.",
  8: "Eight is the number of legs on a spider.",
  9: "Nine is the highest single-digit number in the decimal system.",
  10: "Ten is the base of our decimal number system.",
  12: "Twelve is a highly composite number and the number of months in a year.",
  13: "Thirteen is considered unlucky in many Western cultures.",
  15: "Fifteen is the product of the first two odd prime numbers: 3 and 5.",
  16: "Sixteen is a perfect square (4 squared).",
  18: "Eighteen is the legal adult age in many countries.",
  20: "Twenty is the number of natural amino acids used to build proteins.",
  24: "Twenty-four hours make a full day.",
  25: "Twenty-five is a perfect square (5 squared).",
  30: "Thirty is the number of days in the months of April, June, September, and November.",
  40: "Forty is often used to represent a long period in literature and religion.",
  42: "42 is the answer to the ultimate question of life, the universe, and everything.",
  50: "Fifty is half of one hundred and a common milestone age.",
  60: "Sixty seconds make a minute; sixty minutes make an hour.",
  64: "Sixty-four is a perfect square (8 squared) and the number of squares on a chessboard.",
  70: "Seventy is often used as a milestone age.",
  72: "Seventy-two is the number of names of God in some traditions.",
  80: "Eighty is the standard retirement age in many countries.",
  90: "Ninety degrees is a right angle.",
  100: "One hundred is a century and a perfect score in many grading systems.",
  360: "A circle has 360 degrees."
};

export const getFactByNumber = (number) => {
  if (funFacts.hasOwnProperty(number)) {
    return funFacts[number];
  }
  return `No special fun fact for ${number}, but every number is cool!`;
};

export default funFacts;
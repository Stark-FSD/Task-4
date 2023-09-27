console.log("File Linked")

//1.Answer:


//a. Print Odd Numbers in an Array

//Anonymous Function:

const printOddNumbers = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

//IIFE:

(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

//b. Convert All Strings to Title Caps in a String Array

//Anonymous Function:

const titleCaseStrings = function (strArray) {
  return strArray.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const inputarray = ["hello", "world", "javascript"];
console.log(titleCaseStrings(inputarray));

//IIFE:

const inputArray = ["hello", "world", "javascript"];

(function (strArray) {
  const titleCaseArray = strArray.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  console.log(titleCaseArray);
})(inputArray);

//c. Sum of All Numbers in an Array

//Anonymous Function:

const sumArray = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//IIFE:

console.log(
  (function (arr) {
    return arr.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  })([1, 2, 3, 4, 5])
);

//d. Return All Prime Numbers in an Array

//Anonymous Function:

const isPrime = function (num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getPrimeNumbers = function (arr) {
  return arr.filter(function (num) {
    return isPrime(num);
  });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE:

console.log(
  (function (arr) {
    const isPrime = function (num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      if (num % 2 === 0 || num % 3 === 0) return false;
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
    };

    return arr.filter(function (num) {
      return isPrime(num);
    });
  })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);

//e. Return All Palindromes in an Array

//Anonymous Function:

const isPalindrome = function (str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getPalindromes = function (arr) {
  return arr.filter(function (str) {
    return isPalindrome(str);
  });
};

console.log(getPalindromes(["level", "hello", "noon", "world", "radar"]));

//IIFE:

console.log(
  (function (arr) {
    const isPalindrome = function (str) {
      const reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    };

    return arr.filter(function (str) {
      return isPalindrome(str);
    });
  })(["level", "hello", "noon", "world", "radar"])
);

//f. Return Median of Two Sorted Arrays of the Same Size

//Anonymous Function:

const findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));

//IIFE:

console.log(
  (function (nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
      return mergedArray[mid];
    }
  })([1, 3], [2, 4])
);

//g. Remove Duplicates from an Array

//Anonymous Function:

const removeDuplicates = function (arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//IIFE:

console.log(
  (function (arr) {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  })([1, 2, 2, 3, 4, 4, 5])
);

//h. Rotate an Array by k Times

//Anonymous Function:

const rotateArray = function (arr, k) {
  const n = arr.length;
  const rotatedArray = [];
  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    rotatedArray[newIndex] = arr[i];
  }
  return rotatedArray;
};

console.log(rotateArray([1, 2, 3, 4, 5], 3));

//IIFE:

console.log(
  (function (arr, k) {
    const n = arr.length;
    const rotatedArray = [];
    for (let i = 0; i < n; i++) {
      const newIndex = (i + k) % n;
      rotatedArray[newIndex] = arr[i];
    }
    return rotatedArray;
  })([1, 2, 3, 4, 5], 3)
);

/////////////////////////////////////////////////////////////////////

//2.Answer:

//a. Print Odd Numbers in an Array

const printOddNumber = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

//b. Convert All Strings to Title Caps in a String Array

const titleCaseString = (strArray) => {
  return strArray.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
};

const inputARray = ["hello", "world", "javascript"];
console.log(titleCaseStrings(inputArray));

//c. Sum of All Numbers in an Array

const sumarray = (arr) => {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//d. Return All Prime Numbers in an Array

const iSPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getPrimeNumber = (arr) => {
  return arr.filter((num) => isPrime(num));
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//e. Return All Palindromes in an Array

const iSPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

const getPalindrome = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

console.log(getPalindromes(["level", "hello", "noon", "world", "radar"]));
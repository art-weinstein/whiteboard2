
const heyThere = welcome("Hey there");
function welcome(salutation) {
  return function(yourName) {
    return `${salutation}! Nice to meet you, ${yourName}!`
  }
}

const prefixSir = addPrefix("Sir");

function addPrefix(prefix){
  return `${prefix} dude`
}

function nameEnhancer(prefix){
  return function (suffix){
    return `${prefix} dude ${suffix}`
  }
}
const duchessThird = nameEnhancer("Duchess")("The Third");

function nameEnhancer(prefix){
  return function (suffix){
    return `${prefix} dude ${suffix}`
  }
}

function nameEnhancer(prefix, name){
    return function (suffix){
      return `${prefix} ${name} ${suffix}`  
  }
}

//Q1
// array will split spaces and replace them with %20 through the join command, code will then return the replaced string
function createURL(str){
  var replace = str.split(" ").join("%20");
  return replace;
}

// function compressArr(arr){
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++){
//     if (newArr.indexOf(arr[i]) === -1){} {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function removeDuplicates(arr){
//   let uniqueArr = [];
//   arr.forEach((i) => {
//       if (!uniqueArr.includes(i)) {
//           uniqueArr.push(i);
//       }
//   });
//   return uniqueArr;
// }

//Q2
// function will initialize an empty array, the forEach loop will increment through every element in the array. The if statement checks if the current element
// is not in the unique array, and pushes it. Once the loop is finished, it will return the pushed uniqueArr.
function removeDuplicates(arr){
  let uniqueArr = [];
  arr.forEach((element) => {
    if(!uniqueArr.includes(element)){
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
}


//Q3, work in progress
function compressStr(str){
  let n = str.length;
  for (let i = 0; i < n; i++){
    let count = 1;
    while (i < n - 1 && str[i] == str[i+1]){
      count ++;
      i++;
    }
    return str + count;
  }
}


//Q4
// The first for loop is incremented at the first letter, the nested loop checks the rest of the subsequent letters if they match the letter in the first for loop
// if no match is detected, the initial for loop increments to the next letter, and the nested for loop repeats and checks the subsequent letters for a duplicate.
// to break the loop, the return statement of false is within the nested for loop, so that once a duplicate letter is detected, the code will terminate and return false.
// if no duplicates are detected, the first loop will finish and end with true once all the parameters are met. 
function uniqueCharacters(str)
{    
    // If at any time we encounter 2
    // same characters, return false
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if (str[i].toLowerCase() == str[j].toLowerCase())
                return false;
        }
      }
    // If no duplicate characters
    // encountered, return true
    return true;
}

//Q5
// try to recreate a bubbleSort

function sort(arr){
  // let sortArr = [];
  var done = false;
  while(!done){
    done = true;
    for (let i = 0; i < arr.length; i++){
      if (arr[i - 1] > arr[i]){
        done = false;
        temp = arr[i -1];
      }
    }
  }
}
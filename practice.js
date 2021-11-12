
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

function createURL(str){
  var replace = str.split(" ").join("%20");
  return replace;
}

function compressArr(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (newArr.indexOf(arr[i]) === -1){} {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function removeDuplicates(arr){
  let uniqueArr = [];
  arr.forEach((i) => {
      if (!uniqueArr.includes(i)) {
          uniqueArr.push(i);
      }
  });
  return uniqueArr;
}

function removeDuplicates(arr){
  let uniqueArr = [];
  arr.forEach((element) => {
    if(!uniqueArr.includes(element)){
      uniqueArr.push(element);
    }
  });
  return uniqueArr;
}

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

function printRLE(str)
{
    let n = str.length;
    for (let i = 0; i < n; i++)
    {
        // Count occurrences of current character
        let count = 1;
        while (i < n - 1 && str[i] == str[i+1])
        {
            count++;
            i++;
        }
        // Print character and its count
      }
      return (str[i]) + (count);
}

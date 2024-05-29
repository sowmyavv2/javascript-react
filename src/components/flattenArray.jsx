
//Flatten an Array

//Two Approaches Recursive and Iterative

//This is recursive
function flattenArray(value) {
    let flatArray = [];
    if(Array.isArray(value)) {
      value.forEach(item => {
        flatArray.push(...flatArray(item))
      })
    }
    else {
      flatArray.push(value)
    }
    // Write your code here
  }
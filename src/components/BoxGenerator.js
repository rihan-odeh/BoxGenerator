import React from 'react'
function BoxGenerator(){


const nums = [1, 2, 3, 4, 5];
  
function double(num) {
    return num * 2;
}
 
const newNums = nums.map( double );

return (
<div>
    {newNums}
</div>
); 
}
export default BoxGenerator; 

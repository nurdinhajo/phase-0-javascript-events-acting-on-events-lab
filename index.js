// Your code here

//To the left

function moveDodgerLeft() {
 var leftNumbers = dodger.style.left.replace('px', '')
 var left = parseInt(leftNumbers, 10)

 if (left > 0) {
   dodger.style.left = `${left - 1}px`
 }
}


//To the right

function moveDodgerRight() {
 var leftNumbers = dodger.style.left.replace('px', '');
 var left = parseInt(leftNumbers, 10);
 if (left < 360) { // assuming 400px container width and 40px dodger width
   dodger.style.left = `${left + 1}px`;
 }
}

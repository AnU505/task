const btn = document.querySelector('button');
let confirmed = true;
const array = [1,2,3,4,5,6,7,8,9];
 let copy = [...array] // for not merging the original array

btn.addEventListener('click', (e) => {
  if(confirmed) {
    if(copy.length == 0) {
    copy = [...array]
    }
    randomNumber(copy)
  }
})
function randomNumber(arr) {
 
  let randomIndex = Math.floor(Math.random()*arr.length);
 alert(arr[randomIndex]);
 arr.splice(randomIndex, 1);
 if (arr.length ==0) {
 message()
 }
 
}
function message() {
 const response = window.confirm("All the numbers were inspired");
confirmed = response


}
// var inputLabel = document.getElementById('container');
// function pushBtn(obj) {
//   var pushed = obj.innerHTML;
//
//   if (pushed == '=') {
//     //calculate
//     inputLabel.innerHTML = eval(inputLabel.innerHTML);
//
//   }
//   else if (pushed == 'AC') {
//     //All Clear
//     inputLabel.innerHTML = '';
//
//   }else {
//     if (inputLabel.innerHTML == '0') {
//       inputLabel.innerHTML = pushed;
//     } else {
//       inputLabel.innerHTML += pushed;
//     }
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  var buttonNum = document.getElementsByTagName('button');
  buttonNum[0].addEventListener('click', function (event) {
    var displayNum = event.target.id;
    document.getElementById('screen').innerHTML = displayNum;
       console.log(displayNum);
});
  var clicks = document.querySelectorAll(".buttonNum");
  for (var i = 0; i < clicks.length; i++) {
    clicks[i].addEventListener('click', function (event) {
       document.getElementById('screen').innerHTML=this.value;
       console.log(this.value);
  });
} 
});
// var myButton = document.getElementsByTagName("Button");
// myButton[]. addEventListener("click", function (event) {
//     console.log("Button Clicked" + this);
// })
//
// var buttons = document.querySelectorAll('.buttonNum');
// for (var i = 1; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function (event) {
//     console.log(this.value + ' was clicked');
//   })
// }
// });

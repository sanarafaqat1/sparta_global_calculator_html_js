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
  var click = document.getElementsByTagName("button");
  for (var i = 0; i < click.length; i++) {
    click[i].addEventListener("click", function(event){
      document.getElementById('screen').innerHTML=this.value;
    })
  }
});



//   click[0].addEventListener('click', function (event) {
//     var displayNum = event.target.id;
//     document.getElementById('screen').innerHTML = displayNum;
//        console.log(displayNum);
// });
//   var clicks = document.querySelectorAll(".buttonNum");
//   for (var i = 0; i < clicks.length; i++) {
//     clicks[i].addEventListener('click', function (event) {
//        document.getElementById('screen').innerHTML=this.value;
//        console.log(this.value);
//   });
// }
// var clickOp = document.querySelectorAll(".operator");
// for (var i = 0; i < clickOp.length; i++) {
//   clickOp[i].addEventListener('click', function (event) {
//      document.getElementById('screen').innerHTML=this.value;
//      console.log(this.value);
// });
// }
// var clickClear = document.querySelectorAll(".buttonClear");
// for (var i = 0; i < clickClear.length; i++) {
//   clickClear[i].addEventListener('click', function (event) {
//      document.getElementById('screen').innerHTML=this.value;
//      console.log(this.value);
// });
// }
// var clickEquals = document.querySelectorAll(".equals");
// for (var i = 0; i < clickEquals.length; i++) {
//   clickEquals[i].addEventListener('click', function (event) {
//      document.getElementById('screen').innerHTML=this.value;
//      console.log(this.value);
// });
// }
// var clickPlus = document.querySelectorAll(".operatorPlus");
// for (var i = 0; i < clickPlus.length; i++) {
//   clickPlus[i].addEventListener('click', function (event) {
//      document.getElementById('screen').innerHTML=this.value;
//      console.log(this.value);
// });
// }
// });
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

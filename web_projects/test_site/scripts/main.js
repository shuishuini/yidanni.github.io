let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/summer-3490611_960_720.jpg'){
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/summer-3490611_960_720.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please input your name');
  if(!myName || myName === null) {
    setUserName();
  }else{
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Summer is soooo cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
}else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Summer is soooo cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/pepe.jpg') {
        myImage.setAttribute('src', 'images/pepe2.png');
    } else {
        myImage.setAttribute('src', 'images/pepe.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

const setUserName = () => {
    let myName = prompt('Please enter your name');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Feels good ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Feels good " + storedName;
}

myButton.onclick = function() {
    setUserName();
}
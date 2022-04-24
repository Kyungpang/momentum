const images = ["bg-img-01.jpg", "bg-img-02.jpg", "bg-img-03.jpg"];

const chosenImage = images[Math.floor((Math.random() * images.length))];

document.body.style.backgroundImage = `url(img/${chosenImage})`;

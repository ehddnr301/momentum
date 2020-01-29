const body = document.querySelector("body");

const IMG_NUMBER = 10;
const IMG_URL = [
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1527796087574-4aa5c69d5fd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1538935640135-844bd0bb1ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2805&q=80",
  "https://images.unsplash.com/photo-1514472532243-4b98ecca4704?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1517056338492-cb43f18f72a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1509218541462-aa68e407d0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
  "https://images.unsplash.com/photo-1541663097887-ae5703cf56d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80",
  "https://images.unsplash.com/photo-1532381551255-ba7ed60072c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1524807516161-169559ce8180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2768&q=80",
  "https://images.unsplash.com/photo-1489610368847-c0d1dea29b4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
];

const paintImage = imgNumber => {
  const image = new Image();
  image.src = IMG_URL[imgNumber];
  image.classList.add("bgImage");
  body.prepend(image);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
};

const bgInit = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
};

bgInit();

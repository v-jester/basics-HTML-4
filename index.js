"use strict";
const birthday = document.getElementById("birthday");
const school = document.querySelector(".school");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const zoomIn = document.querySelector(".zoom_in");
const zoomOut = document.querySelector(".zoom_out");
const photo = document.querySelector(".photo");
const url =
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/22/16/oslo.jpg?width=1200&height=900&fit=crop";
const activeStates = { active1: 0, active2: 0, active3: 0 };

const switchColorOfElement = (element, activeKey, color, background) => {
  if (!activeStates[activeKey]) {
    element.style.color = color;
    element.style.backgroundColor = background;
    activeStates[activeKey]++;
  } else {
    const colorOfElement = window.getComputedStyle(school).color;
    const backgroundOfElement = window.getComputedStyle(school).backgroundColor;
    school.style.color = birthday.style.color;
    school.style.backgroundColor = birthday.style.backgroundColor;
    birthday.style.color = colorOfElement;
    birthday.style.backgroundColor = backgroundOfElement;
  }
};

birthday.addEventListener("click", () => {
  switchColorOfElement(birthday, "active1", "red", "black");
});
school.addEventListener("click", () => {
  switchColorOfElement(school, "active2", "blue", "yellow");
});

add.addEventListener("click", () => {
  const img = document.createElement("img");
  img.classList.add("picture");
  img.src = url;
  img.style.height = "900px";
  img.style.width = "1200px";
  photo.appendChild(img);
});

zoomIn.addEventListener("click", () => {
  const picture = document.querySelector(".picture");
  if (picture) {
    let currentHeight = parseInt(picture.style.height) || 900;
    let currentWidth = parseInt(picture.style.width) || 1200;
    picture.style.height = currentHeight + 100 + "px";
    picture.style.width = currentWidth + 100 + "px";
  }
});

zoomOut.addEventListener("click", () => {
  const picture = document.querySelector(".picture");
  if (picture) {
    let currentHeight = parseInt(picture.style.height) || 900;
    let currentWidth = parseInt(picture.style.width) || 1200;
    picture.style.height = currentHeight - 100 + "px";
    picture.style.width = currentWidth - 100 + "px";
  }
});

remove.addEventListener("click", () => {
  const picture = document.querySelector(".picture");
  if (picture) {
    photo.removeChild(picture);
  }
});

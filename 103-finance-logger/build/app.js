"use strict";
window.onload = () => {
    const btnAdd = document.querySelector("#btnAdd");
    const selType = document.querySelector("#selType");
    btnAdd.addEventListener("click", (event) => {
        event.preventDefault();
        console.log(selType.value);
    });
};

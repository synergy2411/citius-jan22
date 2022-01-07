"use strict";
window.onload = () => {
    const btnClick = document.getElementById("btnClick");
    btnClick.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Who's this?");
    });
};

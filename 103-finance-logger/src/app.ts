window.onload = () => {
    const btnClick = document.getElementById("btnClick") as HTMLButtonElement;

    btnClick.addEventListener("click", (event : Event) => {
        event.preventDefault();
        alert("Who's this?")
    })
}
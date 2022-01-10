window.onload = () => {
    const btnAdd = document.querySelector("#btnAdd") as HTMLButtonElement
    const selType = document.querySelector("#selType") as HTMLSelectElement

    btnAdd.addEventListener("click", (event : Event)=>{
        event.preventDefault();
        console.log(selType.value)
    })
}
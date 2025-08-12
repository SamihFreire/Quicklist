//Obtendo elementos do formulário
const form = document.querySelector("form");
const input = document.getElementById("item-list");
const shopping_list = document.querySelector(".shopping-list");

form.onsubmit = (event) => {
    event.preventDefault();

    creatELementHTML();
    
    input.value = "";
}

window.addEventListener("click", (event) => {
    //console.log(event); //Visualizo toda a estrutura
    //console.log(event.target); //Visualizo o elemento em especifico
    //console.log(event.target.offsetParent); //Visualizo seu nó pai

    if(event.target.className == "delete-icon") {
        event.target.offsetParent.remove(); //Deleta o nó pai
    }
})

function creatELementHTML(){
    const checkbox_wrapper = document.createElement("div");
    const checkbox_image = document.createElement("div");
    const checkbox_item = document.createElement("input");
    const label_checkbox_item = document.createElement("label");
    const delete_icon = document.createElement("div");

    shopping_list.append(checkbox_wrapper);
    checkbox_wrapper.classList.add("checkbox-wrapper");

    checkbox_wrapper.append(checkbox_image);
    checkbox_image.classList.add("checkbox-image");

    checkbox_wrapper.append(checkbox_item);
    checkbox_item.setAttribute("type", "checkbox");
    checkbox_item.setAttribute("name", "checkbox-item");
    checkbox_item.setAttribute("id", "checkbox-item");

    checkbox_wrapper.append(label_checkbox_item);
    label_checkbox_item.setAttribute("for", "checkbox-item");
    label_checkbox_item.textContent = input.value;

    checkbox_wrapper.append(delete_icon);
    delete_icon.classList.add("delete-icon");
}

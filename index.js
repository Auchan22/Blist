//Selectores
const Modal = new bootstrap.Modal(document.getElementById('modal'), {keyboard: false})
const shopModal = document.getElementById("shoping-modal")
const body = document.getElementById("body")

const textArea = document.getElementById("descripcion")
const title = document.getElementById("titulo")
const select = document.getElementById("select")

const submit = document.getElementById("submit-btn")
const alertMsg = document.querySelector(".alert-msg")

const addBtn = document.getElementById("add-button")

const form = document.getElementById("form")

const msgTitulo = document.getElementById("msg-title")
const msgSelect = document.getElementById("msg-select")

const containerDescription = document.getElementById("shopping-item-description")
const closeBtn = document.getElementById("close-btn")
const descIcon = document.getElementById("itemIcono")
const descTitle = document.getElementById("itemTitulo")
const descPara = document.getElementById("itemDescripcion")

const containerItems = document.getElementById("shopping-list-tiny")
const itemList = document.getElementById("shop-list")

const msgTituloPc = document.getElementById("msg-title-pc")
const msgSelectPc = document.getElementById("msg-select-pc")

const formPc = document.getElementById("form-pc")

const submitPc = document.getElementById("submit-btn-pc")

const textAreaPc = document.getElementById("descripcion-pc")
const titlePc = document.getElementById("titulo-pc")
const selectPc = document.getElementById("select-pc")

const containerDescriptionPc = document.getElementById("shopping-item-description-pc")
const containerItemsPc = document.getElementById("shopping-list-tiny-pc")
const itemListPc = document.getElementById("shop-list-pc")
const closeBtnPc = document.getElementById("close-btn-pc")

const descIconPc = document.getElementById("itemIcono-pc")
const descTitlePc = document.getElementById("itemTitulo-pc")
const descParaPc = document.getElementById("itemDescripcion-pc")

//Funciones

function noCard(){
    let falso = false
    const noCards = document.getElementById("no-cards");

    if(falso){
        falso = true;
    }else{noCards.style.display = "none"}
}

function limpiarForm(){
    form.reset();
}

function limpiarFormPc(){
    formPc.reset();
}

// function limpiarAlert(){
//     alertMsg.style.display = "none"
// }

// function devolverAlert(){
//     alertMsg.style.display = "block"
// }

//Eventos

closeBtn.addEventListener("click", (e)=>{
    containerItems.style.display = "block"
    containerDescription.style.display = "none"
    addBtn.style.display = "block"
})

closeBtnPc.addEventListener("click", (e)=>{
    // console.log("Hola")
    containerItemsPc.style.display = "block"
    containerDescriptionPc.style.display = "none"
})

modal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget

  var recipient = button.getAttribute('data-bs-whatever')

  var modalTitle = modal.querySelector('.modal-title')
  var modalBodyInput = modal.querySelector('.modal-body input')

}) /*Evento que se encarga de mostrar el modal */

submit.addEventListener("click", (e)=>{

    const categoria = document.forms["form"]["select"].value;
    const titulo = document.forms["form"]["titulo"].value;

    if(titulo == "" ){

        msgTitulo.innerHTML = "Completa el campo"
        msgTitulo.classList.add("red")

    }else if(categoria == 0){

        msgSelect.innerHTML = "Elige un item"
        msgSelect.classList.add("red")

    }else{

        noCard() /*fUNCION QUE ELIMINA LA CARD QUE AVISA QUE NO HAY UN ITEM */

        const shoppingList = document.getElementById("shopping-list-tiny")
        shoppingList.classList.replace("d-none", "d-block")
    
        Modal.hide()
    
        const shopULlist = document.getElementById("shop-list")
    
        let item = document.createElement("li") 
        item.classList.add("list-group-item")
        item.setAttribute("data-info", `${textArea.value}`)
        item.setAttribute("data-image", `${select.value}`)
        item.setAttribute("data-title", `${title.value}`)
        shopULlist.appendChild(item)
    
        item.classList.add("d-flex", "align-items-center", "flex-row", "justify-content-between")
    
        let image = document.createElement("img");
        image.setAttribute("src", `${select.value}`)
        image.setAttribute("width", "50px")
        image.setAttribute("height", "50px")
        item.appendChild(image)
    
        let titleCard = document.createElement("h3");
        titleCard.innerText = title.value
        item.appendChild(titleCard)
    
        let icon = document.createElement("i");
        icon.classList.add("fas", "fa-chevron-right")
        item.appendChild(icon)

        addBtn.style.bottom = "0px"
        addBtn.style.right = "0px"

        limpiarForm()

    }
})

submitPc.addEventListener("click", (e)=>{

    const categoriaPc = document.forms["form-pc"]["select-pc"].value;
    const tituloPc = document.forms["form-pc"]["titulo-pc"].value;

    if(tituloPc == "" ){

        msgTituloPc.innerHTML = "Completa el campo"
        msgTituloPc.classList.add("red")

    }else if(categoriaPc == 0){

        msgSelectPc.innerHTML = "Elige un item"
        msgSelectPc.classList.add("red")

    }else{

        noCard() /*fUNCION QUE ELIMINA LA CARD QUE AVISA QUE NO HAY UN ITEM */

        const shoppingListPc = document.getElementById("shopping-list-tiny-pc")
        shoppingListPc.classList.replace("d-none", "d-block")
    
        Modal.hide()
    
        const shopULlistPc = document.getElementById("shop-list-pc")
    
        let itemPc = document.createElement("li") 
        itemPc.classList.add("list-group-item")
        itemPc.setAttribute("data-info", `${textAreaPc.value}`)
        itemPc.setAttribute("data-image", `${selectPc.value}`)
        itemPc.setAttribute("data-title", `${titlePc.value}`)
        shopULlistPc.appendChild(itemPc)
    
        itemPc.classList.add("d-flex", "align-items-center", "flex-row", "justify-content-between")
    
        let imagePc = document.createElement("img");
        imagePc.setAttribute("src", `${selectPc.value}`)
        imagePc.setAttribute("width", "50px")
        imagePc.setAttribute("height", "50px")
        itemPc.appendChild(imagePc)
    
        let titleCardPc = document.createElement("h3");
        titleCardPc.innerText = titlePc.value
        itemPc.appendChild(titleCardPc)
    
        let iconPc = document.createElement("i");
        iconPc.classList.add("fas", "fa-chevron-right")
        itemPc.appendChild(iconPc)

        limpiarFormPc()

    }
})

itemList.addEventListener("click", (e)=>{
    containerItems.style.display = "none"
    containerDescription.style.display = "block"
    addBtn.style.display = "none"

    document.getElementById("itemTitulo").innerHTML = e.target.getAttribute("data-title")
    document.getElementById("itemDescripcion").innerHTML = e.target.getAttribute("data-info")
    document.getElementById("itemIcono").src = e.target.getAttribute("data-image")
})

itemListPc.addEventListener("click", (e)=>{
    containerItemsPc.style.display = "none"
    containerDescriptionPc.style.display = "block"

    document.getElementById("itemTitulo-pc").innerHTML = e.target.getAttribute("data-title")
    document.getElementById("itemDescripcion-pc").innerHTML = e.target.getAttribute("data-info")
    document.getElementById("itemIcono-pc").src = e.target.getAttribute("data-image")
})

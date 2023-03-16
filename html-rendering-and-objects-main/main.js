
var imageInp = document.querySelector("#image")
var nameInp = document.querySelector("#name")
var breedInp = document.querySelector("#breed")
var ownerInp = document.querySelector("#owner");
var saveBtn = document.querySelector("#save");
var cardsArea = document.querySelector(".cards-area");
var animalsCollection = new Array();


saveBtn.addEventListener("click",function(){
    if(checkInputsValidation()){
        var tmp = getAnimalsItems(imageInp.value,nameInp.value,breedInp.value,ownerInp.value);
        var cardHtml = getCardHtml(tmp);
        cardsArea.innerHTML += cardHtml;
        animalsCollection.push(tmp);
        clearInputsValues();
    }
});

function getAnimalsItems(image,name,breed,owner){
    return {
        name:name,
        breed:breed,
        owner:owner,
        image:image
    };
}


function clearInputsValues(){
    var allInps = document.querySelectorAll(".form-control");
    for(var i = 0; i < allInps.length; i++){
        allInps[i].value = '';
    }
}



function checkInputsValidation(){
    var allInps = document.querySelectorAll(".form-control");
    for(var i = 0; i < allInps.length; i++){
        if(allInps[i].value == ''){
            return false;
        }
    }

    return true;
}


function getCardHtml(animal){
    return `<div class="card">
                <img src="${animal.image}"
                    class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${animal.name} : ${animal.breed}</h4>
                    <p class="card-text">${animal.owner}</p>
                </div>
            </div>`
}

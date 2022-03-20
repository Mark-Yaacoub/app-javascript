// dark mood

let button2 = document.getElementById('dark');
let body = document.querySelector('body');


button2.onclick = function () {

    if (body.classList.toggle('dark-mood')) {
        body.classList.add('dark-mood')
        body.classList.remove('light-mood')
        this.innerText = 'Light Mood'

    } else {
        body.classList.add('light-mood')
        body.classList.remove('dark-mood')
        this.innerText = 'Dark Mood'

    }


}

// viwe and hiden list
let secctionAdd = document.getElementById('secctionAdd');
let addData = document.getElementById('addData');
let exportData = document.getElementById('exportData');
let secctioExport = document.getElementById('secctioExport');
let viweData = document.getElementById('viweData');
let secctionViwe = document.getElementById('secctionViwe');
let cancelData = document.getElementById('cancelData');
let cancelexport = document.getElementById('cancelexport');
let cancelviwe = document.getElementById('cancelviwe');

// click btn add

addData.onclick = function () {

    if (secctionAdd.classList.toggle('none')) {
        secctionAdd.classList.add('block')

    } else {

        secctioExport.classList.add('none')
        secctionViwe.classList.add("none")
    }
}
// btn viwe data 

viweData.onclick = function () {
    if (secctionViwe.classList.toggle('none')) {
        secctionViwe.classList.add("block")

    } else {
        secctionAdd.classList.add('none')
        secctioExport.classList.add('none')
    }
}
// click btn export 

exportData.onclick = function () {

    if (secctioExport.classList.toggle('none')) {

        secctioExport.classList.add('block')

    } else {
        secctionAdd.classList.add('none')
        secctionViwe.classList.add("none")

    }
}

cancelData.onclick = function () {
    if (secctionAdd.classList.toggle('none')) {

    }
}

cancelviwe.onclick = function () {
    if (secctionViwe.classList.toggle('none')) {

    }
}

cancelexport.onclick = function () {
    if (exportData.classList.toggle('none')) {

    }
}


// action

let inputContanier = document.querySelectorAll('.row input');
let enterData = document.getElementById('enterData');
let userList = document.getElementById('userList');


let Users = [];


let renderUser = (name, national, idElgouna, phone, resturant, Position, HealthOne, Healthtwo, imgOne, imgTwo) => {
    userList.innerHTML += `

    <div class="add-componant">
    <div id="contact">
        <div class="row">
            <div class="in col-lg-12" id="userList">
                <div class="row">
                    <div class="viewlist col-lg-6">
                
                    <div class=" col-lg-6">
                    <label class="labelAdd"> Name </label>
                    <input value="${name}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd" > National ID </label>
                    <input value="${national}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd" > El-gouna ID </label>
                    <input value="${idElgouna}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd"> Phone </label>
                    <input value="${phone}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd"> Resturant</label>
                    <input value="${resturant}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd"> Position </label>
                    <input value="${Position}"> </input>
                    </div>
                
                    <div class=" col-lg-6">
                    <label class="labelAdd">بدايه الشهاده الصحيه </label>
                    <input value="${HealthOne}"> </input>
                    </div>
                    
                    <div class=" col-lg-6">
                    <label class="labelAdd" >نهايه الشهاده الصحيه</label>
                    <input value="${Healthtwo}"> </input>
                    </div>
                </div>
                
                <div class=" viewlist col-lg-6">
                
                <div class=" col-lg-12">
                <label class="labelAdd col-lg-12"> img National ID face one </label>
                <div class="imgid">
                <img class="imgid col-lg-12" src="${imgOne}"> 
                </div>
                </div>
                
                <div class=" col-lg-12">
                <label class="labelAdd col-lg-12"> img National ID face Two </label>
                <div class="imgid">
                <img class="imgid col-lg-12" src="${imgTwo}"> 
                </div>
            
                </div>
                </div>
                
            </div>
            
        </div>
    </div>
    <buttom class="btn btn-danger delet">Remov</buttom>
</div>

</div>
    `


}



let addUsers = () => {
    let nameUser = inputContanier[0].value;
    let nationalUser = inputContanier[1].value;
    let idelEounaUser = inputContanier[2].value;
    let phoneUser = inputContanier[3].value;
    let restUser = inputContanier[4].value;
    let positionUser = inputContanier[5].value;
    let dateOneUser = inputContanier[6].value;
    let dateTwoUser = inputContanier[7].value;
    let faceOneUser = inputContanier[8].value;
    let faceTwoUser = inputContanier[9].value;

    let usersObject = {
        name: nameUser,
        national: nationalUser,
        idElgouna: idelEounaUser,
        phone: phoneUser,
        resturant: restUser,
        Position: positionUser,
        HealthOne: dateOneUser,
        Healthtwo: dateTwoUser,
        imgOne: faceOneUser,
        imgTwo: faceTwoUser,

    }

    Users.push(usersObject);
    renderUser(usersObject.name, usersObject.national, usersObject.idElgouna, usersObject.phone, usersObject.resturant, usersObject.Position, usersObject.HealthOne, usersObject.Healthtwo, usersObject.imgOne, usersObject.imgTwo)
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delet')) {
        e.target.parentElement.remove();
    }
})

enterData.addEventListener('click', addUsers);
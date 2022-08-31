let div = document.getElementById('cards')



let divFile = document.createElement('div')
divFile.classList.add('cardFile')
div.appendChild(divFile)


let img = document.createElement('img')
img.classList.add('preview')
divFile.appendChild(img)


function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
          img.src= e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

 document.getElementById("img-input").addEventListener("change", readImage, false);


 
function clique(e){
    
    let nome = document.createElement("h4")
    nome.innerHTML = `${inputNome.value}`
    divFile.appendChild(nome)

    let email = document.createElement("h5")
    email.innerHTML =`${inputEmail.value}`
    divFile.appendChild(email)


    let cargo = document.createElement("h5")
    cargo.innerHTML = `${inputCargo.value}`
    divFile.appendChild(cargo)

    let local = document.createElement("h5")
    local.innerHTML = `${inputLocal.value}`
    divFile.appendChild(local)

    let data = document.createElement("h5")
    data.innerHTML = `${inputDate.value}`
    divFile.appendChild(data)

    let btn1 = document.createElement("button")
    divFile.appendChild(btn1)
    btn1.classList.add('btnCadastrar')
    btn1.setAttribute("type", "submit")
    btn1.innerHTML= 'Cadastrar'
    console.log(btn1)

    let btn2 = document.createElement("button")
    divFile.appendChild(btn2)
    btn2.classList.add('btnCancelar')
    btn1.setAttribute("type", "reset")
    btn2.innerHTML= 'Cancelar'
    console.log(btn2)

    divFile.classList.toggle('cardFuncionario')
  

   
        e.preventDefault()

}

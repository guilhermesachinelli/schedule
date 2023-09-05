class Contact{
    constructor(name, landline, phone, imgLink, date, email, cep, city, insta, gitHub){
        this.name = name;
        this.landline = landline;
        this.phone = phone;
        this.imgLink = imgLink;
        this.date = date;
        this.email = email;
        this.cep = cep;
        this.city = city;
        this.insta = insta;
        this.gitHub = gitHub;
    }
}
class ContactList{
    constructor(){
        this.contacts = [];
    }
    addContact(contact){
        this.contacts.push(contact);
        clearFields();
    }
}
const contactList = new ContactList();
function createContact(){
    let name = document.getElementById("name").value;
    let landline = document.getElementById("landline").value;
    let phone = document.getElementById("phone").value;
    let imgLink = document.getElementById("imgLink").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let gitHub = document.getElementById("gitHub").value;
    const contact = new Contact(name, landline, phone, imgLink, date, email, cep, city, insta, gitHub);
    contactList.addContact(contact);
    console.log(contactList);
}
function clearFields(){
    document.getElementById("name").value = "";
    document.getElementById("landline").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("imgLink").value = "";
    document.getElementById("date").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("city").value = "";
    document.getElementById("insta").value = "";
    document.getElementById("gitHub").value = "";
}
function anyInputs(){
    let name = document.getElementById("name").value;
    let landline = document.getElementById("landline").value;
    let phone = document.getElementById("phone").value;
    let imgLink = document.getElementById("imgLink").value;
    let date = document.getElementById("date").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let insta = document.getElementById("insta").value;
    let gitHub = document.getElementById("gitHub").value;
    if(name == "" || landline == "" || phone == "" || imgLink == "" || date == "" || email == "" || cep == "" || city == "" || insta == "" || gitHub == ""){
        return true;
    }else{
        return false;
    }
}
function envieMsg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";
    let msgParaTela = `
     <p class="${tipoMsg}">${msg}</p> `
    msgDiv.innerHTML += msgParaTela;
    setTimeout(function () {
        msgDiv.innerHTML = "";
    }, 3000);
}
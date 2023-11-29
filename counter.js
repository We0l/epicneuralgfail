import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, set, ref, get,push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://epicneuralgfail-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const viewCountInDB = ref(database, "ViewCount")

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






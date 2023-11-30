import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, set, ref, get, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings2 = {
    databaseURL: "https://epicneuralgfail-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app2 = initializeApp(appSettings2)
const database2 = getDatabase(app2)
const viewCountInDB = ref(database2, "ViewCount")

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






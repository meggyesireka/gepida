/*
* File: app.js
* Author: Meggyesi Réka
* Copyright: 2023, Meggyesi Réka
* Group: SZOFT I/1/E
* Date: 2023-03-08
* Github: https://github.com/meggyesireka/
* Licenc: GNU GPL
*/

const arlistaTorzs = document.querySelector("#arlistaTorzs");
const nevInput = document.querySelector("#nev");
const kerekInput = document.querySelector("#kerek");
const hasznalatInput = document.querySelector("#hasznalat");
const arInput = document.querySelector("#ar");

const arlistaLista = [
    { id: 1, nev: "cassis", kerek: "28", hasznalat: "offroad", ar: 557900},
    { id: 2, nev: "Alboin 900", kerek: "28", hasznalat: "trekking", ar: 519900},
    { id: 3, nev: "Asgard", kerek: "29", hasznalat: "technikás utak", ar: 519900},
    { id: 4, nev: "Ruga", kerek: "29", hasznalat: "hegyi", ar: 372900},
    { id: 5, nev: "Reptila", kerek: "28", hasznalat: "városi", ar: 308900},
    { id: 6, nev: "Sirmium", kerek: "29", hasznalat: "hegyi", ar: 264900}
   
];

function loadArlista() {
    arlistaLista.forEach((termek) => {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdNev = document.createElement('td');
        let tdKerek = document.createElement('td');
        let tdHasznalat = document.createElement('td');
        let tdAr = document.createElement('td');

        tdId.textContent = termek.id;
        tdNev.textContent = termek.nev;
        tdKerek.textContent = termek.kerek;
        tdHasznalat.textContent = termek.hasznalat;
        tdAr.textContent = termek.ar;

        arlistaTorzs.append(tr);
        tr.append(tdId);
        tr.append(tdNev);
        tr.append(tdKerek);
        tr.append(tdHasznalat);
        tr.append(tdAr);

    });
}

loadArlista();









import * as Rxjs from "rxjs";
import {interval} from 'rxjs/observable/interval';
import {Servis} from './servis.js';
import { DatabaseService } from "./dbservis.js";


//document.write("Hello there");

const serviss = new Servis();

Servis
    .get()
    
    .then(skole => {
        skole.forEach(skola =>
            {
            
                const div = document.createElement("div");
                div.className = "div";
                document.body.appendChild(div);

                const naslov = document.createElement("div");
                naslov.className = "naslov";
                div.appendChild(naslov);
                naslov.innerText = skola.ime;
               
                const img = document.createElement("img");
                img.className = 'slika';
                div.appendChild(img);                
                img.src = skola.slika;

                const divic = document.createElement("div");
                divic.className = "divic";
                div.appendChild(divic);
                divic.innerText = skola.opis;
            
               const but = document.createElement("button");
                but.className = "dugme";
                div.appendChild(but);
                but.innerHTML = "OPSIRNIJE >>";

                Rxjs.Observable.fromEvent(but, "click")
                    .subscribe(() => {
                         const poz = document.createElement("div");
                         poz.className = "poz";
                         document.body.appendChild(poz);
                         skola.kursevi.forEach(kurs => 
                        {
                            
                            const divkurs = document.createElement("div");
                            divkurs.className = "divkurs";
                            poz.appendChild(divkurs);
                            const nas = document.createElement("div");
                            nas.className = "nas";
                            nas.innerHTML = kurs.naziv;
                            divkurs.appendChild(nas);
                            const telo = document.createElement("div");
                            divkurs.appendChild(telo);
                            telo.className = "telo";
                            
                            const ostalo = document.createElement("div");
                            ostalo.className = "ostalo";
                            telo.appendChild(ostalo);
                            ostalo.innerHTML = kurs.opis;
                            const slicka = document.createElement("div");
                            slicka.className = "slicka";
                            telo.appendChild(slicka);
                            const im = document.createElement("img");
                            
                            im.className = "slika";
                            slicka.appendChild(im);
                            im.src = kurs.slika;
                            im.style.height = "90%";
                            im.style.width = "100%";

                            const cena = document.createElement("div");
                            ostalo.appendChild(cena);
                            cena.className = "cena";
                            cena.innerHTML = "Cena: " + kurs.cena + "€";
                            const cen = document.createElement("div");
                            ostalo.appendChild(cen);
                            cen.innerHTML = "Trajanje kursa: " + kurs.trajanje;
                            cen.className = "cena";
                            const dug = document.createElement("button");
                            ostalo.appendChild(dug);
                            dug.className = "dug";
                            dug.innerHTML = "Prijavi se";

                            Rxjs.Observable.fromEvent(dug, "click")
                            .subscribe(() =>
                            {
                                
                                console.log("Tea");

                                const abc = document.createElement("div");
                                poz.appendChild(abc);
                                abc.id = "abc";
                                document.getElementById('abc').style.display = "block";
                                //popup div starts here
                                const popup = document.createElement("div");
                                abc.appendChild(popup);
                                popup.className = "popup";

                                const s = document.createElement("img");
                                popup.appendChild(s);
                                s.id = "s";
                                s.src = "images/xxx.png";
                                //onclick
                                document.getElementById('s').addEventListener('click', ()=>
                             {
                                console.log('slika');
                                document.getElementById('abc').style.display = "none";


                                
                             });

                            const header = document.createElement("div");
                            popup.appendChild(header);
                            header.className = "header";
                            header.innerHTML = "Rezervisi svoj termin";

                                const divi = document.createElement("div");
                                popup.appendChild(divi);
                                divi.className = "divi";
                                divi.innerHTML = "Ime:";
                                const inp = document.createElement("input");
                                inp.className = "inp";
                                divi.appendChild(inp);

                                const divi1 = document.createElement("div");
                                popup.appendChild(divi1);
                                divi1.className = "divi";
                                divi1.innerHTML = "Prezime:";
                                const inp1 = document.createElement("input");
                                inp1.className = "inp";
                                divi1.appendChild(inp1);

                                const divi2 = document.createElement("div");
                                popup.appendChild(divi2);
                                divi2.className = "divi";
                                divi2.innerHTML = "Email:";
                                const inp2 = document.createElement("input");
                                inp2.className = "inp";
                                divi2.appendChild(inp2);

                                const divi3 = document.createElement("div");
                                popup.appendChild(divi3);
                                divi3.className = "divi";
                                divi3.innerHTML = "Datum pocetka:";
                                const inp3 = document.createElement("input");
                                inp3.setAttribute("type", "date");
                                inp3.className = "inp";
                                divi3.appendChild(inp3);


                                const divi4 = document.createElement("div");
                                popup.appendChild(divi4);
                                divi4.className = "divi";
                                divi4.innerHTML = "Broj telefona:";
                                const inp4 = document.createElement("input");
                                inp4.className = "inp";
                                divi4.appendChild(inp4);

                                const divi5 = document.createElement("div");
                                popup.appendChild(divi5);
                                divi5.className = "divii";
                                divi5.innerHTML = "Napomene:";
                                const inp5 = document.createElement("textarea");
                                inp5.className = "inp5";
                                divi5.appendChild(inp5);

                                //naslov
            

                                //dugme
                                const divdug = document.createElement("div");
                                popup.appendChild(divdug);
                                divdug.className = "divdug";

                                const rezdug = document.createElement("button");
                                divdug.appendChild(rezdug);
                                rezdug.className = "rezdug";
                                rezdug.innerHTML = "Rezervisi"
                                //button click

                               /*const ime = Rxjs.Observable.fromEvent(inp, "input");
                                const prezime = Rxjs.Observable.fromEvent(inp1, "input");
                                const email = Rxjs.Observable.fromEvent(inp2, "input");
                                const datum = Rxjs.Observable.fromEvent(inp3, "input");
                                const telefon = Rxjs.Observable.fromEvent(inp4, "input");
                                const napomene = Rxjs.Observable.fromEvent(inp5, "input");*/
                               
                                       // .map(ev => ev.target.value)
                                       // .subscribe(text => console.log(text));

                                console.log(ime);
                                Rxjs.Observable.fromEvent(rezdug, "click")
                                .subscribe(() => {
                                    console.log("sto nece");

                                    const obj={
                                        "Ime":ime.value,
                                        "Prezime":prezime.value,
                                        "Email":email.value,
                                        "Datum pocetka":datum.value,
                                        "Telefon":telefon.value,
                                        "Napomene":napomene.value

                                    };
                                    const url = "http://localhost:3000/rezervacije";
                                    DatabaseService.addToDataBase(url,obj);
                                    console.log("uspelo");


                                }

                                )
                               

                            }
                        )
                            
                            

                        })
                         //poz.innerHTML = skola.kursevi;
                         console.log(skola.kursevi);
                    });
                    


           
           // console.log(skola);
            }
        )})
    
   





function showObject(skola)
{
    const {ime} = skola;
    document.write(`${ime}`);
}




   


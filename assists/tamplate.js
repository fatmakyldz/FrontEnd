// kod açıklamaları (single comment) sadece bu satırda
/* çoklu açıklamalar (multiple comment)*/

// window.alert("pop-up");
// document.writeln("Sayfada göster");
//console.log("console log"); //kendimizi kontrol etmek
//console.error("console error");
//console.warn("console warn");

//variable(değişkenler)
// var(variable) let(local)es6 const(local ve sabit)es6
//var degiskenAdi=44;
//console.log(degiskenAdi);
//var $_degiskenAdi44="str variable";
//console.log($_degiskenAdi44);

//hosting
//deneme=14.53
//var deneme;
//console.log(deneme);

//////////////////////////////////////////

//operators
// + - * / %
let number1, number2;
number1=18;
number2=5;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1/number2);
console.log(number1*number2);
console.log(number1%number2);

// &&VE    ||VEYA   !DEĞİL
// x++ ++x  y-- --y

// =   ATAMA
// ==  EŞİTTİR(Türüne bakmadan)
// === EŞİTTİR(Türüne bakarak)

////////////////////////////////////////////
//prompt
//let userName=prompt("Lutfen Biseyler Yaziniz");
//console.log(userName);

/////////////////////////////////////////////
//NaN
console.log(4/4);
console.log(4/"4");
console.log(4/"asd");

// Infinity
console.log(0/5);
console.log(44/0);

// Undefined
let data;
//data=99;
console.log(data);

// new: var olan bisey
// null: eskiden var olan artik olmayan 
// zero: var olan ama degeri 0 olan 

/////////////////////////////////////////////////////
// ORNEK-1
// KULLANICIDAN ALDIGINIZ IKI SAYIYI TOPLAYAN BIR JS CODE YAZINIZ?
// let number3,number4,sum=0;
//number3=Number(prompt("BIR SAYI GIRINIZ"));
//number4=Number(prompt("BASKA BIR SAYI GIRINIZ"));
//console.log(number3+number4);

// ORNEK-2
/* 
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32   
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);

// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
//x=2 k=3 y=? (y=18) burasi yorum
//let x=0,y=0,k=0;
//x=Number(prompt("Lütfen X giriniz"));
//k=Number(prompt("Lütfen K giriniz"));
//y=3*x+4*k;
//console.log("Y sonucu:"+y);
// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
// console.log(4+3*2*(3/3-1*6+9/1+(3/3)));


//MATH
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(3,5,6,99,100,-500));
// console.log(Math.max(3,5,6,99,100,-500));
// console.log(Math.abs(-500));
// console.log(Math.abs(500));
// console.log(Math.sqrt(25));
// console.log(Math.pow(2,5));
// console.log(Math.floor(5.9)); //sayiyi asagi yuvarlar
// console.log(Math.ceil(7.000001)); //sayiyi yukari yuvarlar
// console.log(Math.round(3.4)); //yuvarlama
// console.log(Math.round(3.5));
// console.log(Math.round(Math.random()*9+1));
// console.log(Math.sin(45));
// console.log(Math.asin(1));

//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max)))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

// let number5, number6;
// number5=Number(prompt("LUTFEN BIR SAYI GIRINIZ"));
// number6=Number(prompt("LUTFEN BASKA BIR SAYI GIRINIZ"));
// console.log(Math.min(number5, number6));
// console.log(Math.max(number5, number6));
// console.log(Math.sqrt(Math.max(number5, number6)));
// console.log(Math.ceil(Math.sqrt(Math.max(number5, number6))));
// console.log(Math.abs(Math.min(number5, number6)));
// console.log(Math.pow(Math.min(number1,number2),Math.max(number1,number2)));

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

////////////////////////////////////////////
// String
// let value="JAVscript ogreniyorum Javascript ";
// console.log(value);
// console.log(value.length); //kelime ve bosluk uzunlugu
// console.log(value.trim().length); //bastaki ve sondaki bosluklari siler
// console.log(value.toUpperCase()); // hepsini buyuk harf yapar
// console.log(value.toLowerCase()); // hepsini kucuk harf yapar
// console.log(value.indexOf("JAVAscript")); //kelimenin bulundugu yer soldan arar
// console.log(value.lastIndexOf("JAVAscript")); //kelimenin bulundugu yer sagdan arar
// console.log(value.charAt(0)); // sayidaki harfe gore karakteri soyler
// console.log(value.charAt(value.length-2)); // sayidaki harfe gore karakteri soyler
// console.log(value.substring(1)); //parcalama 1 den itibaren 
// console.log(value.substring(0,4)); // 0<=X<=4-1 0 ve 4 arasi karaktarler
// console.log(value.concat(" -sona eklendi")); //sone ekleme yapar
// console.log(value.replace(value," java")); //eski degeri ile yeni degeri degistirir
// console.log(value.startsWith("J")); //soru
// console.log(value.endsWith(" "));

// Örnek: 
// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring(0, st.indexOf(" ")), indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

//////////////////////////////////////////////////////////

//Function

// 1-) returnsuz Parametresiz
// function returnsuzParametresiz() {
//     console.log("returnsuz Parametresiz");
// }
// returnsuzParametresiz();

// // 2-) returnsuz Parametreli
// function returnsuzParametreli(number) {
//     console.log("returnsuz Parametreli: " + Math.pow(number, 2));
// }
// returnsuzParametreli(9);

// // 3-) returnlu Parametresiz
// function returnluParametresiz() {
//     return "returnlu Parametresiz";
// }
// let data3=returnluParametresiz();
// console.log(data3);

// // 4-) returnlu Parametreli
// function returnluParametreli(value) {
//     return "returnlu Parametreli "+ value;
// }
// let data4=returnluParametreli("asdasd");
// console.log(data4);

/////////////////////////////////////////////////////////////
// Normal function,  Anonymous Function, Arrow Functrion, Immedia Function

// Normal function, 
// function normalFunction(){
//     console.log("Normal Function");
// }
// normalFunction();


// Anonymous Function,
// let anonymousFunction= function (){
//     console.log("anonymous Function");
// }
// anonymousFunction();

// Arrow Function,
// let arrowFunction=  ()=>{
//     console.log("arrow  Function");
// }
// arrowFunction();

// Immedia Function ()()
// (function (){
//     console.log("Immedia Function Anonymous");
// })();
// ( ()=>{
//     console.log("Immedia Function Arrow");
// })();

////////////////////////////////////////////////

//conditional
// ( ()=>{
//    let numbr=4;
//    if(numbr>0){
//     console.log("pozitif"); }
//    else{
//     console.log("negatif");}
// })();
// ( ()=>{
//     let numbr=4;
//     let result= (numbr>0) ? "pozitif" : "negatif"
//     console.log(result);
//  })();

// (() => {
//     let number = 4;
//     if (number == 1) {
//         console.log("1");
//     } else if (number === 2) {
//         console.log("2");
//     } else if (number === 3) {
//         console.log("3");
//     } else if (number === 4) {
//         console.log("4");
//     } else if (number === 5) {
//         console.log("5");
//     } else {
//         console.log("1<=sayı<=5 dışındadır");
//     }
// })();

// (() => {
//     let number = 4;
//     switch (number) {
//         case 1:
//             console.log("1");
//             break;
//         case 2:
//             console.log("2");
//             break;
//         case 3:
//             console.log("3");
//             break;
//         case 4:
//             console.log("4");
//             break;
//         case 5:
//             console.log("5");
//             break;
//         default:
//             console.log("1<=sayı<=5 dışındadır");
//             break;
//     }
// })();

// ÖDEV:
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)


// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)


// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

//////////////////////////////////////////////////////
// loop
// (() => {
//     // i++
//     // i=i+1;
//     // i+=1;
//     let sum=0;
//     for (let i = 1; i <= 9; i++) {
//         console.log(i + " ");
//         //console.log(`döngü içinde ${i}`);
//         sum+=i;
//     }
//     console.log("Toplam: "+sum);
// })();

// (() => {
//     // i++
//     // i=i+1;
//     // i+=1;
//     let i = 1;
//     while (i <= 9) {
//         console.log(i + " ");
//         //console.log(`döngü içinde ${i}`);
//         i=i+1;
//     }
// })();

// (() => {
//     // i++
//     // i=i+1;
//     // i+=1;
//     let i = 1;
//     do{
//        console.log(i + " ");
//         //console.log(`döngü içinde ${i}`);
//         i+=1;
//     } while (i <= 9);
// })();

// break, return, continue
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

///////////////////////////////////////////////////////
// try-catch
// (()=>{
// try{
//     alertx("pop-pup verisi")
//     //console.log("burasi calismasi lazim"); burda calismaz finally kullanmak lazim
// }  catch (err){
//     console.error(err);
//     console.info(err.message);
//     console.info(err.name);
// } finally{
//     console.log("burasi calismasi lazim");
// }
    
// console.log("son satir");
// throw "burada kendi istegim uzerine hata meydana gelsin";
// })();

///////////////////////////////////////////
let arr = () => {
         let dizi = [];
         for (let i = 0; i < 5; i++) {
             let random = Math.floor(Math.random() * 9 + 1);
             dizi[i] = random;
         }
         return dizi;
     }
//array
(()=>{
    // let dizi=[20,10,50,60];
    // dizi[4]=5;
    let dizi = arr();
    // console.log(dizi[2]);
    // console.log(dizi[4]);
    // console.log(dizi[dizi.length-1]); // dizinin son elemani
    // Iterative for 
    // for (let i = 0; i < dizi.length; i++){
    //     console.log(dizi[i]);
    //     document.writeln(dizi[i]); // sayfaya yazdirma

    // }
    // document.writeln("<br/>");
    // for in 
    // for (let temp in dizi){
    //     document.writeln(temp); 
    // }
    // document.writeln("<br/>");
    //dizi.push(44); // push iteklemek sonuna ekler 
    //dizi.unshift(23); // basina ekler sayiyi

    //dizi.pop(); // sondan bir eleman cikarir
    //dizi.shift(); // bastan bir eleman cikarir 
    
    //for OF
    //  for (let temp of dizi) {
    //     document.writeln(temp);
    // }
    //dizi.reverse(); // diziyi tersten yazar
    //dizi.sort(); // kucukten buyuge siralar
    //dizi.sort().reverse(); // buyukten kucuge siralar

    //document.writeln("<br/>");
    // for (let temp of dizi) {
    //     document.writeln(temp);
    // }
    // for each 
    //forEach(callbackfn: (value: T, index: number, array: T[]))
    // dizi.forEach((value,index,array)=>{
    //       document.writeln(`${index} => ${value} => ${array}<br/>`);
    // });
})();
// join: dizide ayristirma yapma
// let diziData=()=>{
//     let dizi = arr();
//     document.writeln(dizi+"<br/>");
//     document.writeln(dizi.sort().join(" - ")+"<br/>");
    // .splice(0,2) 0:indis numarasi 2: bu elemana kadar kalsin digerleri sil
    // document.writeln(dizi.splice(0,2));

    // document.writeln(dizi.toString().concat(",data").toUpperCase()+"<br/>");
    // document.writeln(((typeof dizi.toString().concat(",data").toUpperCase()))+"<br/>");
 //dizi.foreach()
 // dizi.map()

//  let data = dizi.map((temp) => {
//    return temp * 2;
//  }).forEach((value,index,array)=>{
//     document.writeln(`${index} => ${value} <br/>`);
// });
// document.writeln(data + " <br/>");


 // dizi.filter()
 //  filter<S extends T>(predicate: (value: T, index: number, array: T[]) 
//  dizi.filter(function(temp){
//         return temp%2==0
//     }).forEach((value,index,array)=>{
//         document.writeln(`${index} => ${value} <br/>`);
//     });
// }
// diziData();
// // Örnek
// // 1.YOL normal diziyle yapalım.
// // 2.YOL map,filter, forEach ile yapalım.
// // rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
// // bu sayılardan tek olanları bulalım.          ==> (filter)
// // bu tek sayıların sonuna 5 ekleyelim          ==> (map)
// // buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
// // bu şarta uyan kaç tane sayı vardır ?         ==> (counter)

///////////////////////////////////////////////////
// Callbackfnc, promise, asyn-await
// Monad : bir verinin ciktisinin baska bir dizinin girisi olmasi
// setTimeout(function(){
//     let counter=0;
//     document.writeln(counter)
//     console.log("setTimeout: " + counter);
//     counter++;
// }, 2000); // 2 sn sonra data gelir 1 kere calisir

// setInterval(function(){
//     let counter=0;
//     document.writeln(counter)
//     console.log("setInterval: " + counter);
//     counter++;
// }, 2000); // 2 sn`ye de bir calisir

// // monad
// const birinci=(numberr)=>{
//     console.log(Math.sqrt(numberr));

// }
// const ikinci=()=>{
//     let numberr=16;
//     birinci(numberr);
// }
// ikinci();

// // callbackfunction
// const ucuncu=(numberr)=>{
//     console.log(Math.sqrt(numberr));

// }
// const dorduncu=(callbackFnc)=>{
//     let numberr=16;
//     callbackFnc(numberr);
// }
// dorduncu(ucuncu);

//////////////////////////////////////////////////////////
// // Dizi Objesi (Api)
// const functionComputerArrayObject = () => {
//     // api'den gelen dizi objesi
//     const computerArrayObject = [
//         { computerName: "bilgisayar adı 1", price: 1000 },
//         { computerName: "bilgisayar adı 2", price: 2000 },
//         { computerName: "bilgisayar adı 3", price: 3000 },
//     ];
//     console.log(computerArrayObject);
//     return computerArrayObject;
// }

// // 1-) Call Back Function
// const callBackFunctionComputer = () => {
//     // api'den gelen dizi objesi
//     const computerArrayObject = functionComputerArrayObject();
//     //console.log(computerArrayObject);

//     // Bilgisayar Adı
//     const computerNameList = () => {
//         computerArrayObject.map((temp) => {
//             console.log(`${temp.computerName}`);
//         });
//     }
//     console.log(computerNameList());

//     // objeye call back ekle
//     const computerObjectAddList = (data, callBackFunction) => {
//         computerArrayObject.push(data);
//         callBackFunction();
//     }

//     // objeye yeni bir data ekleyerek callbackfunction örneğini yapmış olduk
//     computerObjectAddList({ computerName: "bilgisayar adı 4", price: 4000 }, computerNameList)
// }
// //callBackFunctionComputer();

// console.log("");

// // 2-) promise
// const promiseFunctionComputer = () => {
//     // api'den gelen dizi objesi
//     const computerArrayObject = functionComputerArrayObject();

//     // Bilgisayar Adı
//     const computerNameList = () => {
//         computerArrayObject.map((temp) => {
//             console.log(`${temp.computerName}`);
//         });
//     }
//     console.log(computerNameList());

//     // objeye promise Objesi üzerindan data ekle
//     const computerObjectAddList = (data) => {
//         const promiseReturnData = new Promise((resolve, reject) => {
//             computerArrayObject.push(data);
//         })
//         return promiseReturnData;
//     }

//     computerObjectAddList({ computerName: "bilgisayar adı 4", price: 4000 })
//         .then(() => { console.log("olumlu"); })
//         .catch((err) => { console.error(err); })
//     computerNameList()
// }
// //promiseFunctionComputer()

// console.log();

// // async/await
// // 2-) promise
// const asyncAwaitFunctionComputer = () => {
//     // api'den gelen dizi objesi
//     const computerArrayObject = functionComputerArrayObject();

//     // Bilgisayar Adı
//     const computerNameList = () => {
//         computerArrayObject.map((temp) => {
//             console.log(`${temp.computerName}`);
//         });
//     }
//     console.log(computerNameList());

//     // objeye promise Objesi üzerindan data ekle
//     const computerObjectAddList = (data) => {
//         const promiseReturnData = new Promise((resolve, reject) => {
//             computerArrayObject.push(data);
//         })
//         return promiseReturnData;
//     }

//     async function resultAsynAwait() {
//         const data = await computerObjectAddList({ computerName: "bilgisayar adı 4", price: 4000 })
//         console.log(data);
//     }

//     resultAsynAwait();
//     computerNameList();
// }
// //asyncAwaitFunctionComputer();

 //////////////////////////////////////////////////////////
// object
// const obje=()=>{
//     let person={
//         "name" : "fatma",
//         "surname" : "akyıldız",
//         "number" : 18,
//         "fullName": function () {
//             console.log("fonksiyon " + this.name + " " + this.surname);
//         },
//         "javase": ["variable", "optional", "stream"],
//         "java": {
//             "version": "1.8",
//             "date": "2003-09-18",
//         }
//     };
//     console.log(person);
//     console.log(person.name);
//     console.log(person["name"]);
//     console.log(person.name.toUpperCase());
//     console.log(typeof person.name.toUpperCase());
//     console.log(`${person.name} ${person.surname}`);
//     person.fullName();
//     person.isLogin = true;
//     console.log(person.isLogin);
//     console.log(person["isLogin"]);
//     console.log(person.javase[0]);
//     console.log(person.java.version);
// }
// obje();

// const obje2 = () => {
//     let person = function(adi,soyadi){
//         this.adi = adi;
//         this.soyadi = soyadi;
//         console.log(this);
//     }
//     console.log(person);
//     console.log(person());
//     let data=new person("Fatma", "Akyıldız");
//     console.log(data.adi);
// }
// obje2();

// const obje3 = () => {
//          let data={
//             "adi":"Adim44",
//             "soyadi":"Soyadi44"
//          };
//          console.log(data);
    
//          const value=JSON.stringify(data).toUpperCase();//stingfy stinge çevirmek json ile kullanılır
//          console.log(value);
    
//          const parseData=JSON.parse(value); //parse ayrıştırı
//          console.log(parseData);
//      }
// obje3();

// // /*
// // ÖDEV:
// // 1.adım: adınızı ve soyadınızı json objesine ekleyip
// // 2.adım: bu json objesini String'e çevirip
// // 3.adım: bu json objesini String'e çevirilmiş kısımdan substring fonksiyon metodu ile isim ve soyismini ayrıştır
// // 4.adım: adınızı ve soyasınız document.write ile ekranda gösterelim.
// // ip uçu: JSON.stringfy  ve substring()
// // */
// ///////////////////////////////////////////////////////////////////////////

// // DOM
// const dom = () => {
//     //alert("Tıklandı")
//     //document.getElementById("paragId").innerHTML="değişti";
//     //document.querySelector("#paragId").innerHTML = "değişti";
//     //document.querySelector("#paragId").innerHTML = "<b>değişti</b>";
//     document.querySelector("#paragId").innerText = "<b>değişti</b>";
//     document.querySelector("#paragId").style.color = "blue";
//     document.querySelector("#paragId").style.backgroundColor = "black";
//     document.querySelector("#paragId").style.padding = "3rem";
//     document.querySelector("#paragId").style.marginTop = "1rem";
// }

// ///////////////////////////////////////////////////////////////////////////
// // Event
// const deneme1 = () => {
//     alert("deneme")
// }

// const isOtherRedirectPage = () => {
//     let result = window.confirm("google gitmek istiyor musunuz ") ? window.location = "https://www.google.com" : window.alert("Sayfada kalındı");
// }

// // EventListener
// document.getElementById("h1_id")
//     .addEventListener("click", (event) => {
//         alert("Tıklandı")
//     });
///////////////////////////////////////////////////////////////////////////
// LocalStorage
const loginButton=(e)=>{
    //alert("çalıştır")
    // Browser bir şey yapmasın
    //e.preventDefault();

    let username,surname;
    username=document.getElementById("name_id").value;
    //surname=document.getElementById("surname_id").value;

    //console.log(`${username} - ${surname}`);

    // localStorage
    localStorage.setItem("blog_username",username);
    localStorage.setItem("blog_surname",surname);

    // calling function
    localStorageGetData();
}

const localStorageGetData=()=>{
    let localUsername=localStorage.getItem("blog_username");
    let localSurname=localStorage.getItem("blog_surname");
    alert(localUsername+" "+ localSurname)
}
const weddingDate = new Date("June 24, 2027 12:30:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

if(document.getElementById("days")){

document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

}

},1000);

function openImage(src){

document.getElementById("popup").style.display="flex";

document.getElementById("popupImage").src=src;

}

function closeImage(){

document.getElementById("popup").style.display="none";

}

function sendWhatsApp(){

let name=document.getElementById("name").value;

let guest=document.getElementById("guest").value;

let message=document.getElementById("message").value;

let text="Hello Satish & Lipsa ❤️%0A%0AI will attend your wedding.%0A%0AName : "
+name+
"%0AGuests : "
+guest+
"%0AMessage : "
+message;

window.open(
"https://wa.me/919999999999?text="+text,
"_blank"
);

}
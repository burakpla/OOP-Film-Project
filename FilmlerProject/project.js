const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
 
//Start UI Object

const ui=new UI();
//storage object
const storage=new Storage();


//LOAD Events

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoade",function(){
        let films=storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });
}
function addFilm(e){

const title=titleElement.value;
const director=directorElement.value;
const url=urlElement.value;

if(title==="" || director==="" || url===""){
    //warning message
    ui.displayMessages("Tüm alanları doldurun","danger");

     
}
else{
    const newFilm=new Film(title,director,url);
    ui.addFilmToUI(newFilm);//ARAYUZE FILM EKLEME
     ui.displayMessages("Film başarıyla eklendi","success");
    storage.addFilmToStorage(newFilm);//adding film to storage



}


    ui.clearInputs(titleElement,directorElement,urlElement);
    e.preventDefault();
}
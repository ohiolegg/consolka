"use strict";

let numberOfFilms;


function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");     

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

 const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: true
 };


 function rememberMyFilms(){
    for (let i=0; i<2; i++){
        const a = prompt("Один из последних просмотренных фильмов", ""),
              b = prompt("На склько его оцените", "");
        
        if (a != null && b != null && a!= '' && b!='' && a.length<50){
            personalMovieDB.movies[a] = b;
            console.log('da');
        }else{
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();
 
function detectPersonalLevel(){
if(personalMovieDB.count<10){
    alert('Просмотрено довольно мало фильмов');
}else if(personalMovieDB.count>=10&& personalMovieDB.count<30){
    alert('Вы классический зритель');
}else if(personalMovieDB.count>=30){
    alert('Вы - киноман');

}else{
    console.log('error');

}
}
detectPersonalLevel();

function writeYourGenres(){

    for (let i = 1; i<=3; i++) {
        //const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //personalMovieDB.genres[i-1] = genre;
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
           
    }
}
writeYourGenres();

function showMyDB(){
    if(personalMovieDB.privat!=false){
        console.log(personalMovieDB);
    }
}
showMyDB();











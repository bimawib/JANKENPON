var resultWin="WIN"
var resultSeri="DRAW"
var resultLose="LOSE :("
var pilihanKomp=" sementara itu komputer memilih "
var batu="batu"
var gunting="gunting"
var kertas="kertas"
var player1="";
var player2="";

const opsiBatu = document.querySelector('img.batu');
const opsiKertas = document.querySelector('img.kertas');
const opsiGunting = document.querySelector('img.gunting');

// setelah diclick, akan tambah value ke player1 dan inputKedua true
opsiBatu.addEventListener('click',function(){
    player1 = 'batu';
    opsiBatu.setAttribute('style','border: 3px solid red');
    opsiKertas.removeAttribute('style');
    opsiGunting.removeAttribute('style');
});
opsiKertas.addEventListener('click',function(){
    player1 = 'kertas';
    opsiKertas.setAttribute('style','border: 3px solid red');
    opsiGunting.removeAttribute('style');
    opsiBatu.removeAttribute('style');
});
opsiGunting.addEventListener('click',function(){
    player1 = 'gunting';
    opsiGunting.setAttribute('style','border: 3px solid red');
    opsiBatu.removeAttribute('style');
    opsiKertas.removeAttribute('style');
});

// dont forget to delete the border attribute in the try again

const wadah = document.querySelector('.container #wadah');
const tombolReset = document.querySelector('.container #wadah .fill');
const tombolAdu = document.querySelector('.container #wadah .info');
const teksAdu = document.querySelector('.container #wadah .info p');
const teksCoba = document.querySelector('.container #wadah .fill p');
const tombolResult = document.querySelector('.container .infomas p');


wadah.addEventListener('click',function(){

const areaBot = document.querySelector('.container .area-komputer');
const botPic = document.querySelector('.container .area-komputer img');

var randomPlayer2 = Math.floor(Math.random()*3);
if(randomPlayer2==0){
    console.log("batu");
    player2 = "batu";
    areaBot.removeChild(areaBot.firstElementChild);
    const picBatu = document.createElement('img');
    areaBot.appendChild(picBatu);
    picBatu.setAttribute('class','komputer');
    picBatu.setAttribute('src','img/batu.png');
    picBatu.setAttribute('id','transisi');
}
    else if(randomPlayer2==1){
    console.log("gunting");
    player2 = "gunting";
    areaBot.removeChild(areaBot.firstElementChild);
    const picGunting = document.createElement('img');
    areaBot.appendChild(picGunting);
    picGunting.setAttribute('class','komputer');
    picGunting.setAttribute('src','img/gunting.png');
    picGunting.setAttribute('id','transisi');
}
    else if(randomPlayer2==2){
    console.log("kertas");
    player2 = "kertas";
    areaBot.removeChild(areaBot.firstElementChild);
    const picKertas = document.createElement('img');
    areaBot.appendChild(picKertas);
    picKertas.setAttribute('class','komputer');
    picKertas.setAttribute('src','img/kertas.png');
    picKertas.setAttribute('id','transisi');
}
else{
    console.log("nothing");
}

// should remove and make new button


if(player1==batu && player2==gunting){
    hasilnya = "Menang";
    tombolResult.innerHTML = 'RESULT : YOU WIN!';
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('Try Again!');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','fill');
} else if(player1==gunting && player2==kertas){
    hasilnya = "Menang";
    tombolResult.innerHTML = 'RESULT : YOU WIN!';
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('Try Again!');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','fill');
} else if(player1==kertas && player2==batu){
    hasilnya = "Menang";
    tombolResult.innerHTML = 'RESULT : YOU WIN!';
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('Try Again!');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','fill');
} else if(player1==player2){
    hasilnya = "Seri";
    tombolResult.innerHTML = 'RESULT : DRAW :(';
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('Try Again!');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','fill');
} else{
    hasilnya = "Kalah";
    tombolResult.innerHTML = 'RESULT : YOU LOSE (NOOB)';
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('Try Again!');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','fill');
}

if(tombolReset){
    tombolReset.addEventListener('click', function(){
    const wadahDiv = document.getElementById('wadah');
    const dihapus = wadahDiv.getElementsByTagName('section')[0];
    wadahDiv.removeChild(dihapus);
    const pBaru = document.createElement('p');
    const teksBaru = document.createTextNode('️戦え !');
    const sectionBaru = document.createElement('section');
    pBaru.appendChild(teksBaru);
    sectionBaru.appendChild(pBaru);
    wadahDiv.appendChild(sectionBaru);
    sectionBaru.setAttribute('class','info');
});    
}

});


// reset button

// const tempat = document.getElementById('wadah');
//     const hapus = tempat.querySelector('.container #wadah section#fill.fill');
//     tempat.removeChild(hapus);
//     const paragraf = document.createElement('p');
//     const text = document.createTextNode('️戦え !');
//     const seksi = document.createElement('section');
//     paragraf.appendChild(text);
//     seksi.appendChild(paragraf);
//     tempat.appendChild(seksi);
//     seksi.setAttribute('class','info');






// function getRandom(){
//     return Math.floor(Math.random()*3);
// }

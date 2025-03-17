document.getElementsByTagName('body')
[0].style.backgroundColor = 'grey';

//variabel
let nama ="ahmad";
let umur = 20;
let statusMahasiswa = true;
document.getElementById('nama').innerHTML = "Nama saya : "+ nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`;

let mahasiswa = [
    "Ahmad", "Budi", "Caca", "Dedi"
];
mahasiswa.forEach( (mhs) => {
    document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li`;
} );

let nilai =[
    {nama: "Ahmad", nilai: 80},
    {nama: "Budi", nilai: 70},
    {nama: "Caca", nilai: 90},
    {nama: "Dedi", nilai: 85}
];
nilai.forEach( (data)=> {
    document.getElementById('nilai').innerHTML += `<tr>
        <td>${data.nama}</td>
        <td>${data.nilai}</td>
    </tr>`;
} );

fetch('https://dummyjson.com/quotes')
.then(res => res.json())
.then(data => {console.log(data.quotes) 
    data.quotes.forEach( (q) => { document.getElementById('quotes').innerHTML += `<li>${q.quote} - ${q.author}</li>`})
});

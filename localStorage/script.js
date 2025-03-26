let data;//dekalarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu');
//panggil fungsi tampil
tampil()

function simpan(){
    let nama = document.getElementById('nama').value; //ambil value dari input
    console.log(nama);
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);

    if(localStorage.getItem('ls_bukutamu')==null){
         data =[]; // buat array kosong
    } else {
        //ambil data dari local storahe
         data = JSON.parse(localStorage.getItem('ls_bukutamu')); 
    }

    data.push({nama_pengunjung: nama, perlu: keperluan});
    //let tampung =[];//buat array kosong
    //tampung.push(nama);//memasukan value nama ke array tampung
    //data.push(nama);
    localStorage.setItem('ls_bukutamu', JSON.stringify(data));//simpan ke locak storage
    }
    function tampil(){
        localStorage.getItem('ls_bukutamu') == null? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

        data.forEach((item) => {
            daftar_tamu.innerHTML += `<li> ${item.nama_pengunjung} - ${item.perlu}</li>`
        })
    }
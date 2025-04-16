let data;//dekalarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu');
//panggil fungsi tampil
tampil()

function simpan(){
    let nama = document.getElementById('nama').value; //ambil value dari input
    console.log(nama);
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);
    let jk = document.getElementById('jk').value;

    if(localStorage.getItem('ls_bukutamu')==null){
         data =[]; // buat array kosong
    } else {
        //ambil data dari local storage
         data = JSON.parse(localStorage.getItem('ls_bukutamu')); 
    }

    data.push({nama_pengunjung: nama, perlu: keperluan, jk:jk});
    //let tampung =[];//buat array kosong
    //tampung.push(nama);//memasukan value nama ke array tampung
    //data.push(nama);
    localStorage.setItem('ls_bukutamu', JSON.stringify(data));//simpan ke local storage
    }

    //kosongkan isi elemen data tamu
    daftar_tamu.innerHTML = '';
    //panggil fungsi tampil
    tampil();


    function tampil(){
        localStorage.getItem('ls_bukutamu') == null? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

        console.log(data.length); //tampilkan jumlah data di console

        document.getElementById('total_tamu').innerHTML = `total tamu : ${data.length}`;
        let total_laki=0;
        let total_perempuan=0;

        data.forEach((item) => {
            if(item.jk == 'L'){
                total_laki++;
            } else if(item.jk =='P'){
                total_perempuan++;
            }
            daftar_tamu.innerHTML += `<li> 
                ${item.nama_pengunjung} - ${item.perlu}
            </li>`
        })

        document.getElementById('tamu_laki').innerHTML = `<h2>Tamu laki-laki <br> ${total_laki}</h2>`;

            document.getElementById('tamu_perempuan').innerHTML = `<h2>Tamu perempuan<br> ${total_perempuan}</h2>`;
            
            console.log(data.filter( (keperluan) => keperluan.perlu == 'Membaca').length);
            
            document.getElementById('membaca').innerHTML = `<h2>Membaca <br> ${data.filter((keperluan) => keperluan.perlu == 'Membaca').length}</h2>`;
            document.getElementById('browsing').innerHTML = `<h2>Browsing <br> ${data.filter((keperluan) => keperluan.perlu == 'Browsing').length}</h2>`;
            document.getElementById('pinjam_buku').innerHTML = `<h2>Pinjam Buku <br> ${data.filter((keperluan) => keperluan.perlu == 'Pinjam Buku').length}</h2>`;
    }

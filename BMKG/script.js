fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    console.log(data.Infogempa.gempa.Wilayah);
    console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = 
    `<div class="col-lg-6 col-sm-12">
        <h3>wilayah :${data.Infogempa.gempa.Wilayah}</h3>
        <h3>magnitude :${data.Infogempa.gempa.Coordinates}</h3>
        <h3>waktu :${data.Infogempa.gempa.DateTime}</h3>
        <h3>jam :${data.Infogempa.gempa.Jam}</h3>
        <h3>kedalaman :${data.Infogempa.gempa.Kedalaman}</h3>
        <h3>potensi :${data.Infogempa.gempa.Potensi}</h3>
        <h3>bujur :${data.Infogempa.gempa.Bujur}</h3>
        <h3>lintang :${data.Infogempa.gempa.Lintang}</h3>
    </div>

    <div class="col-lg-6 col-sm-12">
        <image src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}">
    </div>`
})

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    data.Infogempa.gempa.forEach( (list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML += `
        <div class="col-sm-4 p-3">
        <div class="card p-3"
        <h2>Wilayah :${list.Wilayah}</h2>
        <p>Waktu :${list.Tanggal} ${list.Jam}</p>
        <p>Magnitude :${list.Magnitude}</p>
        <p>Kedalaman :${list.Kedalaman}</p>
        <p>Potensi :${list.Potensi}</p>
        <hr>
        </div>
        </div>
        `;
    })
})
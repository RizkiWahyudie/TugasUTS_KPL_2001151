function hasil() {
    var gol = parseInt(document.getElementById('golongan').value);
    var child = parseInt(document.getElementById('anak').value);
    var nomorInduk = (document.getElementById('nik').value);
    var name = (document.getElementById('nama').value);
    var jenis_kel = (document.getElementById('jk').value);
    var state = (document.getElementById('status').value);
    var gapok;
    var tunjangan;
    var potongan;
    var total_gaji
    if (gol == 1) {
        gapok = 2200000;
        potongan = 110000;
    } else if (gol == 2) {
        gapok = 2900000;
        potongan = 145000;
    } else if (gol == 3) {
        gapok = 3600000;
        potongan = 180000;
    } else if (gol == 4) {
        gapok = 4500000;
        potongan = 225000;
    }
    if (child == 0) {
        tunjangan = gapok / 5;
    } else if (child == 1) {
        tunjangan = gapok / 4;
    } else if (child == 2) {
        tunjangan = gapok / 3;
    } else if (child >= 3) {
        tunjangan = gapok / 2;
    }
    document.getElementById('total_gapok').innerHTML = 'Rp. ' + gapok;
    document.getElementById('total_tunjangan').innerHTML = 'Rp. ' + tunjangan;
    document.getElementById('total_potongan').innerHTML = 'Rp. ' + potongan;
    document.getElementById('output_nik').innerHTML = nomorInduk;
    document.getElementById('output_nama').innerHTML = name;
    document.getElementById('output_jk').innerHTML = jenis_kel;
    document.getElementById('output_status').innerHTML = state;
    document.getElementById('output_gol').innerHTML = gol;
    document.getElementById('output_anak').innerHTML = child;
    total_gaji = (gapok + tunjangan) - potongan;
    document.getElementById('total').innerHTML = 'Rp. ' + total_gaji;
}
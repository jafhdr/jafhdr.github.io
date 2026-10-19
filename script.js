// ==========================================
// Logika Proyek 2: Sistem Prediksi
// ==========================================
function hitungPrediksi() {
    // 1. Mengambil angka dari kotak input HTML
    let t1 = parseInt(document.getElementById("thn1").value);
    let t2 = parseInt(document.getElementById("thn2").value);
    let t3 = parseInt(document.getElementById("thn3").value);

    // 2. Cek apakah ada kotak yang kosong
    if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
        alert("Harap isi semua data tahun terlebih dahulu!");
        return;
    }

    // 3. Logika Prediksi (Menggunakan Tren Rata-rata Kenaikan)
    let selisih1 = t2 - t1; // Kenaikan dari thn 1 ke thn 2
    let selisih2 = t3 - t2; // Kenaikan dari thn 2 ke thn 3
    
    let rataRataKenaikan = (selisih1 + selisih2) / 2;

    // 4. Hitung hasil tahun ke-4
    let prediksi = Math.round(t3 + rataRataKenaikan);

    // Mencegah hasil prediksi bernilai negatif
    if (prediksi < 0) {
        prediksi = 0;
    }

    // 5. Tampilkan hasilnya ke layar web dengan animasi kecil
    let teksHasil = document.getElementById("hasil-prediksi");
    teksHasil.innerText = "Menghitung...";
    
    setTimeout(() => {
        teksHasil.innerText = prediksi;
    }, 1500); // Jeda setengah detik agar terasa seperti sistem sedang berpikir
}
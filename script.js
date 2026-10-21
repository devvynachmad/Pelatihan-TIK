// 1. Pilih tombol berdasarkan ID-nya dengan tanda petik yang lengkap
const tombolSapa = document.getElementById('sapaButton');

// 2. Tambahkan 'event listener' untuk aksi 'click' dengan penulisan parameter yang benar
tombolSapa.addEventListener('click', function() {
    
    // 3. Jalankan kode ini ketika tombol di-klik (diakhiri dengan titik koma)
    alert('Halo! Terimakasih Sudah Berkunjung! 👋');
    
});

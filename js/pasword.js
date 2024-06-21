// Menunggu hingga seluruh konten halaman telah dimuat
document.addEventListener('DOMContentLoaded', function () {
    
    // Mendapatkan elemen input untuk password dan konfirmasi password
    var password = document.getElementById('password');
    var confirm_password = document.getElementById('confirm_password');
    
    // Mendapatkan elemen untuk menampilkan pesan error jika password tidak cocok
    var password_error = document.getElementById('password-error');

    /**
     * Fungsi untuk memvalidasi apakah password dan konfirmasi password cocok.
     * Jika tidak cocok, pesan error akan ditampilkan. Jika cocok, pesan error disembunyikan.
     */
    function validatePassword() {
        if (password.value !== confirm_password.value) {
            // Tampilkan pesan error jika password dan konfirmasi password tidak cocok
            password_error.style.display = 'block';
        } else {
            // Sembunyikan pesan error jika password dan konfirmasi password cocok
            password_error.style.display = 'none';
        }
    }

    // Menambahkan event listener untuk memvalidasi password setiap kali ada perubahan pada input password
    password.addEventListener('input', validatePassword);
    
    // Menambahkan event listener untuk memvalidasi password setiap kali ada perubahan pada input konfirmasi password
    confirm_password.addEventListener('input', validatePassword);
});

/**
 * Fungsi untuk menampilkan atau menyembunyikan password.
 * Mengubah atribut type dari elemen input antara 'password' dan 'text'.
 * 
 * @param {string} inputId - ID dari elemen input password yang akan diubah.
 * @param {HTMLElement} toggleIcon - Elemen yang diklik untuk menampilkan atau menyembunyikan password.
 */
function togglePasswordVisibility(inputId, toggleIcon) {
    var input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        toggleIcon.textContent = '--'; // Mengubah ikon saat password terlihat
    } else {
        input.type = 'password';
        toggleIcon.textContent = '◉'; // Mengubah ikon saat password tersembunyi
    }
}
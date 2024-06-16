// Menunggu hingga seluruh konten DOM telah dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Membuat instance IntersectionObserver
    const observer = new IntersectionObserver((entries, observer) => {
        // Iterasi melalui setiap entry (elemen yang diamati)
        entries.forEach(entry => {
            // Memeriksa apakah elemen saat ini terlihat di viewport
            if (entry.isIntersecting) {
                entry.target.classList.add("fadeInUp", "animated");
                entry.target.classList.remove("hidden");
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Menentukan persentase elemen yang harus terlihat sebelum memicu animasi
        threshold: 0.1 
    });

    // Mengambil semua elemen dengan kelas 'hidden'
    document.querySelectorAll('.hidden').forEach(element => {
        observer.observe(element);
    });
});

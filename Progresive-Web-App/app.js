// Registrasi Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('Service Worker berhasil diregistrasi:', registration);
            })
            .catch((error) => {
                console.log('Registrasi Service Worker gagal:', error);
            });
    });
}

// Contoh fungsionalitas tambahan
document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplikasi PWA dimuat');
});
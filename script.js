document.querySelector('.menu-btn').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.toggle('shifted');
});
function redirectToPlaylist() {
    window.location.href = 'music_playlist.html'; // Redirect to the second page
}

function toggleMenu() {
    const sidebar = document.getElementById('menu-content');
    sidebar.classList.toggle('active'); // Show or hide the menu
}

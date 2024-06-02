function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

document.getElementById('restart-link').addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
});

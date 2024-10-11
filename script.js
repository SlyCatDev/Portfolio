    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Vérifie si un thème a été précédemment sélectionné et le charge
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'light-theme') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        // Si aucun thème n'est défini, applique le thème sombre par défaut
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }

    // Fonction pour basculer les thèmes au clic du bouton
    themeToggleBtn.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            // Passer au thème sombre
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon'); // Changer l'icône en lune
        } else {
            // Passer au thème clair
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun'); // Changer l'icône en soleil
        }
    });
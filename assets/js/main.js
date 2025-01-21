/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active');
        });
        target.classList.add('filters__active');

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active');
        });
        tab.classList.add('filter-tab-active');
    });
});

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Default to dark mode if no selection exists
if (!selectedTheme) {
    document.body.classList.add(darkTheme); // Apply dark mode
    themeButton.classList.add(iconTheme);  // Set icon to sun
    localStorage.setItem('selected-theme', 'dark'); // Save default theme as dark
    localStorage.setItem('selected-icon', 'ri-sun-line'); // Save default icon as sun
} else {
    // Apply the stored theme and icon
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Obtain the current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

/*=============== CONSENT POPUP FUNCTIONALITY ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const consentPopup = document.getElementById("consent-popup");
    const acceptButton = document.getElementById("accept-button");

    if (consentPopup && acceptButton) {
        acceptButton.addEventListener("click", () => {
            // Add a smooth fade-out effect and hide the popup
            consentPopup.style.transition = "opacity 0.5s ease";
            consentPopup.style.opacity = "0";
            setTimeout(() => {
                consentPopup.style.display = "none";
            }, 500); // Wait for the fade-out to complete
        });
    }
});

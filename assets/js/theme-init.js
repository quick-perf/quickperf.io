const theme = localStorage.getItem('theme');
if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
}

const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');
var switcher = document.getElementById("theme-toggle");

if (theme === "dark") {
    switcher.checked = true;
} else if (theme === "light") {
    switcher.checked = false;
} else if  (userPrefers === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    switcher.checked = false;
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    switcher.checked = true;
}
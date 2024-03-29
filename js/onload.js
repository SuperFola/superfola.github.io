function navbar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
}

async function addFromParts(name, file) {
    let path = file === undefined ? `parts/${name}.html` : `parts/${file}.html`;

    const req = await fetch(path);
    const data = await req.text();
    let el = document.getElementById(name);
    el.innerHTML = data;
}

document.addEventListener('DOMContentLoaded', async () => {
    let files = [['navbar'], ['footer']];

    let searchParams = new URLSearchParams(window.location.search);
    if (!searchParams.has('about')) {
        files.push(['hero']);
        files.push(['projects']);
    } else {
        files.push(['hero', 'about']);
    }

    await Promise.all(files.map(e => addFromParts(...e)));

    // must be called last
    navbar();
});
MutationObserver = window.MutationObserver || window.WebKitMutationObserver
var observer = new MutationObserver(function (mutations, observer) {
    // fired when we switch pages
    console.log(mutations, observer)
    replaceNavLinks()
})
observer.observe(document, {
    subtree: true,
    attributes: true,
})

function replaceNavLinks() {
    const links = document.querySelectorAll('.md-nav__link')
    for (let i = 0, length = links.length; i < length; i++) {
        const text = links[i].childNodes[0].textContent.trim()

        /*
        if (text == 'Sonic Generations') {
            const img = document.createElement('img')
            img.setAttribute('src', '/assets/games/SonicGenerations.png')
            img.setAttribute('width', '30px')
            img.setAttribute('style', 'margin-right: -1rem')
            links[i].insertBefore(img, links[i].firstChild)
        }
        else if (text == 'Sonic Lost World') {
            const img = document.createElement('img')
            img.setAttribute('src', '/assets/games/SonicLostWorld.png')
            img.setAttribute('width', '30px')
            img.setAttribute('style', 'margin-right: -1rem')
            links[i].insertBefore(img, links[i].firstChild)
        }
        else if (text == 'Sonic Frontiers') {
            const img = document.createElement('img')
            img.setAttribute('src', '/assets/games/SonicFrontiers.png')
            img.setAttribute('width', '30px')
            img.setAttribute('style', 'margin-right: -1rem')
            links[i].insertBefore(img, links[i].firstChild)
        }
        */
    }
}

function OpenDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    drawer.classList.add("nlp-paned__left--open")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.classList.add("nlp-scrim--open")
}
function CloseDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    drawer.classList.remove("nlp-paned__left--open")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.classList.remove("nlp-scrim--open")
}
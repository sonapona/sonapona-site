interface HTMLElement {
    scrollTo(y: number, x: number): void
}

HTMLElement.prototype.scrollTo = function(y: number, x: number = 0): void {
    this.scrollTop = y
    this.scrollLeft = x
}

document.querySelector(".nlp-scrim").addEventListener("scroll", function (e) {
    let targ = e.target as HTMLElement
    if (targ.scrollTop == 0) {
        CloseDrawer()
    }
})

function OpenDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.appendChild(drawer)
    drawer.classList.add("nlp-paned__left--open")
    scrim.classList.add("nlp-scrim--open")
    scrim.scrollTo(scrim.scrollHeight, 0)
}
function CloseDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    drawer.classList.remove("nlp-paned__left--open")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.classList.remove("nlp-scrim--open")
    document.querySelector(".nlp-paned").prepend(drawer)
}
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

const flippedClass = "nlp-flipcard--flipped";

let cards = document.querySelectorAll(".nlp-flipcard")
cards.forEach(element => {
    element.addEventListener("click", function(e) {
        if (element.classList.contains(flippedClass)) {
            element.classList.remove(flippedClass)
        } else {
            element.classList.add(flippedClass)
        }
    })
});

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function OpenDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.appendChild(drawer)
    scrim.classList.add("nlp-scrim--open")
    
    setTimeout(() => {
        drawer.classList.add("nlp-paned__left--reparented")
        drawer.classList.add("nlp-paned__left--open")
    }, 150)

    let padding = document.querySelector(".nlp-scrim__padder")

    scrim.scrollTo(padding.scrollHeight / 2, 0)
}
function CloseDrawer() {
    let drawer = document.querySelector(".nlp-paned__left")
    drawer.classList.remove("nlp-paned__left--open")
    drawer.classList.remove("nlp-paned__left--reparented")
    let scrim = document.querySelector(".nlp-scrim")
    scrim.classList.remove("nlp-scrim--open")
    document.querySelector(".nlp-paned").prepend(drawer)
}
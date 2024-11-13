const main = document.querySelector(".test")

const m = ['🎉', '🐼', '🖖', '🍕', '🤠', '🤢', '🌈', '❤️', '🔥', '⛄️', '🍆', '🏆', '🍔', '💦', '🌸', '🦁', '👑', '☠️', '😡', '🌴', '🥁', '🎯', '📓', '🎲', ]

const mas = []
const ret = new Array(48).fill(null)
const temp = []
let chec = []

p = ret.length
c = 0

function rand() {
    const result = [];
    let r = null;
    do {
        r = Math.floor(Math.random() * (p - 0) + 0)
    } while (temp.includes(r));
    result.push(r)
    temp.push(r)
    let k = null
    do {
        k = Math.floor(Math.random() * (p - 0) + 0)
    } while (temp.includes(k));
    result.push(k)
    return result
}

m.forEach((e) => {
    const f = rand();
    temp.push(f[0], f[1])

    let b = {
        element: document.createElement("div"),
        textContent: e,
        chec: true
    }

    b.element.classList = 'block'
    b.element.textContent = ''
    b.element.id = f[0]
    ret[f[0]] = b;

    b = {
        element: document.createElement("div"),
        textContent: e,
        chec: true
    }
    b.element.classList = 'block'
    b.element.textContent = ''
    b.element.id = f[1]


    ret[f[1]] = b;
})


function role(elem, e) {
    if (!elem.classList.contains('click')) {
        e.element.classList = 'block'
        elem.classList += ' click'
        setTimeout(() => { elem.textContent = e.textContent }, 250)
        chec.push(e)
        setTimeout(() => { e.element.classList = 'block' }, 500)

    }
}


ret.forEach((e) => {
    main.appendChild(e.element)
    e.element.addEventListener('click', (t) => {
        role(t.target, e)
        if (chec.length == 2) {
            setInterval(() => {
                e.element.classList += ' click'
                chec[0].element.classList += ' click'
            }, 1000)
            setTimeout(() => {
                chec[0].element.textContent = ' '
                e.element.textContent = ' '
            }, 1250)
            setTimeout(() => {
                chec[0].element.classList = 'block'
                chec = []
            }, 1500)
        }

        setTimeout(() => {
            e.element.classList = 'block'
        }, 2000)
    })
})
const main = document.querySelector(".test")

const m = ['🎉', '🐼', '🖖', '🍕', '🤠', '🤢', '🌈', '❤️', '🔥', '⛄️', '🍆', '🏆', '🍔', '💦', '🌸', '🦁', '👑', '☠️', '😡', '🌴', '🥁', '🎯', '📓', '🎲', ]

for (let index = 0; index < 64; index++) {
    let b = document.createElement("div")
    b.classList = 'block'
    b.textContent = ''
    b.addEventListener('click', (t) => {
        r = Math.floor(Math.random() * (24 - 0) + 0)
        t.target.classList += ' click'
        setTimeout(() => { t.target.textContent = m[r] }, 250)
        console.log(r)
    })

    main.appendChild(b)
}
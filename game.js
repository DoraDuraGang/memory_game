const main = document.querySelector(".test")
const diffButton = document.querySelectorAll(".button-d")
const diff = document.querySelector(".difficulty")

const stikers = ['🎉', '🐼', '🖖', '🍕', '🤠', '🤢', '🌈', '❤️', '🔥', '⛄️', '🍆', '🏆', '🍔', '💦', '🌸', '🦁', '👑', '☠️', '😡', '🌴', '🥁', '🎯', '📓', '🎲', ]

const temp = []
let chec = []
let count = 0

function random_value() {
    do {
        rand_number = Math.floor(Math.random() * (amount_cart - 0) + 0)
    } while (temp.includes(rand_number))
    return rand_number
} //генерация рандомного значения для координат

function coordinate() {
    const result = [];
    let one_random_coordinate = null;
    one_random_coordinate = random_value()
    result.push(one_random_coordinate)
    temp.push(one_random_coordinate)
    let two_random_coordinate = null
    two_random_coordinate = random_value()
    result.push(two_random_coordinate)
    return result
} //присвоение координат для карты

function rotate(elem1, elem2) {
    if (!elem1.classList.contains('click')) {
        elem2.element.classList = 'block'
        elem1.classList += ' click'
        setTimeout(() => { elem1.textContent = elem2.textContent }, 250)
        chec.push(elem2)
        setTimeout(() => { elem2.element.classList = 'block' }, 500)

    }
} //переворот карты

function create_cart(coordinat, element, bord) {
    let cart = {
        element: document.createElement("div"),
        textContent: element,
        open_chec: true
    }

    cart.element.classList = 'block'
    cart.element.textContent = ''
    cart.element.id = coordinat
    bord[coordinat] = cart;
} // создание карты

function create_bord() {
    const mass_cart = new Array(amount_cart).fill(null)
    diff.remove()

    stikers.forEach((element) => {
        const coord_cart = coordinate();
        temp.push(coord_cart[0], coord_cart[1])

        create_cart(coord_cart[0], element, mass_cart)
        create_cart(coord_cart[1], element, mass_cart)
    })

    mass_cart.forEach((e) => {
        main.appendChild(e.element)
        e.element.addEventListener('click', (t) => {
            rotate(t.target, e)
            if (chec.length == 2) {
                setTimeout(() => {
                        e.element.classList += ' click'
                        chec[0].element.classList += ' click'
                    }, 1000) //переворот карты стикером вперед
                setTimeout(() => {
                        chec[0].element.textContent = ' '
                        e.element.textContent = ' '
                    }, 1250) //перепорот карны стикером назад
                setTimeout(() => {
                        e.element.classList = 'block'
                        chec[0].element.classList = 'block'
                        chec = []
                    }, 1500) //возвращение к начальному значению карты
            }
        })
    })
} //создание поля и вращение карт.ю основая функция исполения игры

diffButton.forEach((e) => {
        e.addEventListener('click', (t) => {
            switch (e.getAttribute('id')) {
                case "hard":
                    amount_cart = 48
                    create_bord()
                    break;
                case "normal":
                    amount_cart = 24
                    stikers.splice(amount_cart / 2)
                    create_bord()
                    break;
                case "easy":
                    amount_cart = 16
                    stikers.splice(amount_cart / 2)
                    create_bord()
                    break;

                default:
                    console.error()
                    break;
            }

        })
    }) //выбор количесва элементов
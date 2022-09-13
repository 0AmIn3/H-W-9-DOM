let body = document.body

let cont_1 = document.createElement('div')
let main_box = document.createElement('div')
let box_img = document.createElement('div')
let samsung_img = document.createElement('div')
let like = document.createElement('img')
let share = document.createElement('img')
let CAR = document.createElement('img')
let phone = document.createElement('p')
let price = document.createElement('p')
let cred = document.createElement('p')
let namee = document.createElement('p')
let bts_box = document.createElement('div')
let bts = document.createElement('div')
let icon = document.createElement('img')


cont_1.classList.add('cont_1')
main_box.classList.add('main_box')
box_img.classList.add('box_img')
samsung_img.classList.add('samsung_img')
like.classList.add('like')
share.classList.add('share')
CAR.classList.add('CAR')
icon.classList.add('icon')
phone.classList.add('phone')
price.classList.add('price')
cred.classList.add('cred')
namee.classList.add('namee')
bts_box.classList.add('bts_box')
bts.classList.add('bts')

like.src = './img/5172567_heart_like_love_icon.svg'
share.src = './img/1564530_arrow_next_share_direction_icon.svg'
CAR.src = './img/CAR.png'
icon.src = "./img/stat.png"
phone.innerHTML = 'Смартфоны'
price.innerHTML = '2 054 000 cум'
cred.innerHTML = 'от 213 000 сум/месяц'
namee.innerHTML = 'Samsung Galaxy A13 Черный 4/64 GB'
bts.innerHTML = 'Купить'



body.append(cont_1)
cont_1.append(main_box)
main_box.append(box_img, phone, price, cred, namee, bts_box)
box_img.append(samsung_img, like, share, CAR)
bts_box.append(bts, icon)

let cont = 0
like.onclick = () => {
    if (cont === 0) {
        like.style.filter = 'grayscale(0%)'
        cont = 1
    } else if (cont === 1) {
        like.style.filter = 'grayscale(100%)'
        cont = 0
    }
}


let cont_2 = document.createElement('div')
let box_1 = document.createElement('div')
let box_2 = document.createElement('div')
let box_3 = document.createElement('div')
let box_4 = document.createElement('div')
let p_1 = document.createElement('p')
let p_2 = document.createElement('p')
let p_3 = document.createElement('p')
let p_4 = document.createElement('p')
let h1_1 = document.createElement('div')
let h1_2 = document.createElement('div')
let h1_3 = document.createElement('div')
let h1_4 = document.createElement('div')
let img_1 = document.createElement('div')
let img_2 = document.createElement('div')
let img_3 = document.createElement('div')
let img_4 = document.createElement('div')
let text_1 = document.createElement('div')
let text_2 = document.createElement('div')
let text_3 = document.createElement('div')
let text_4 = document.createElement('div')
let pp_1 = document.createElement('p')
let pp_2 = document.createElement('p')
let pp_3 = document.createElement('p')
let pp_4 = document.createElement('p')
let mon = document.createElement('p')
let mon_2 = document.createElement('p')
let mon_3 = document.createElement('p')
let mon_4 = document.createElement('p')

cont_2.classList.add('cont_2')
box_1.classList.add('box_1')
box_2.classList.add('box_2')
box_3.classList.add('box_3')
box_4.classList.add('box_4')
p_1.classList.add('p_1')
p_2.classList.add('p_2')
p_3.classList.add('p_3')
p_4.classList.add('p_4')
h1_1.classList.add('h1_1')
h1_2.classList.add('h1_2')
h1_3.classList.add('h1_3')
h1_4.classList.add('h1_4')
img_1.classList.add('img_1')
img_2.classList.add('img_2')
img_3.classList.add('img_3')
img_4.classList.add('img_4')
text_1.classList.add('text_1')
text_2.classList.add('text_2')
text_3.classList.add('text_3')
text_4.classList.add('text_4')
pp_1.classList.add('pp_1')
pp_2.classList.add('pp_2')
pp_3.classList.add('pp_3')
pp_4.classList.add('pp_4')
mon.classList.add('mon')
mon_2.classList.add('mon_2')
mon_3.classList.add('mon_3')
mon_4.classList.add('mon_4')

p_1.innerHTML = 'Программа'
p_2.innerHTML = 'Программа'
p_3.innerHTML = 'Программа'
p_4.innerHTML = 'Программа'
text_1.innerHTML = `«Разработка мобильных <br> приложений»`
text_2.innerHTML = `«Разработка мобильных <br> приложений»`
text_3.innerHTML = `«Разработка мобильных <br> приложений»`
text_4.innerHTML = `«Разработка мобильных <br> приложений»`
pp_1.innerHTML = `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно пользуются <br> на смартфонах, умных часах и планшетах.`
pp_2.innerHTML = `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно пользуются <br> на смартфонах, умных часах и планшетах.`
pp_3.innerHTML = `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно пользуются <br> на смартфонах, умных часах и планшетах.`
pp_4.innerHTML = `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно пользуются <br> на смартфонах, умных часах и планшетах.`
mon.innerHTML = '24 месяца'
mon_2.innerHTML = '24 месяца'
mon_3.innerHTML = '24 месяца'
mon_4.innerHTML = '24 месяца'


body.append(cont_2)
cont_2.append(box_1, box_2, box_3, box_4)
box_1.append(p_1, h1_1, pp_1, mon)
box_2.append(p_2, h1_2, pp_2, mon_2)
box_3.append(p_3, h1_3, pp_3, mon_3)
box_4.append(p_4, h1_4, pp_4, mon_4)
h1_1.append(img_1, text_1)
h1_2.append(img_2, text_2)
h1_3.append(img_3, text_3)
h1_4.append(img_4, text_4)

const content__list = document.querySelector('section .content__list')
console.log(content__list)

let pages = 20;
for (let i = 0; i < pages; i++) {
    const div = document.createElement('div')
    div.classList.add('content_item')

    const product_availability = document.createElement('div')
    product_availability.innerHTML = '&#9745; in stock'
    product_availability.classList.add('product_availability')

    const placeholder = document.createElement('div')
    placeholder.classList.add('placeholder')

    const product_rating = document.createElement('div')
    product_rating.innerHTML = '&#9733; &#9733; &#9733; &#9733; &#9733;'
    product_rating.classList.add('product_rating')

    const product_info = document.createElement('div')
    product_info.textContent = 'EX DISPLAY: Lorem ipsum dolor sit amet consectetur adipisicing elit. fdfdfdfdf  ddfd ff df'
    product_info.classList.add('product_info')

    const product_price = document.createElement('div')
    product_price.classList.add('product_price')
    
    const sale = document.createElement('div')
    sale.classList.add('sale')
    sale.textContent = '199$'

    const price = document.createElement('div')
    price.classList.add('price')
    price.textContent = '175$'

    product_price.appendChild(sale)
    product_price.appendChild(price)


    div.appendChild(product_availability)
    div.appendChild(placeholder)
    div.appendChild(product_rating)
    div.appendChild(product_info)
    div.appendChild(product_price)

    content__list.appendChild(div) 
}


function  calc(){
    const calcInfo = document.querySelector('.calcPrice');
    let value = 0;
    const productItem = document.querySelectorAll('.product_card-price_btns')
    let calcOver = document.querySelector('.calcOver')

    productItem.forEach((item)=>{
        let counter = item.querySelector('.product_counter')
        let allPrice = (parseInt(calcInfo.innerText)*1000) * parseInt(counter.innerText)
        value +=  allPrice
        calcOver.innerText = value
    })
}


const filtr = document.querySelector('.aisde_filtr')
const filtrItem = document.querySelector('.aside_wrapper')
let menu = document.querySelector('[data-menu]')
let menuItem = document.querySelector('.menu_burg')
let burgerClose = document.querySelector('.burgerClose')

// burger menu
burgerClose.addEventListener('click',()=>{
    menuItem.classList.remove('burgerMenu-act')
})
menu.addEventListener('click',()=>{
    menuItem.classList.add('burgerMenu-act')
    if(filtrItem.classList.contains('block')){
        filtrItem.classList.remove('block')
    }
})

// slider product

function slideItem(){
    let slideItem = document.querySelectorAll('.slide-item')
    let slider = document.querySelector('.slide_img-obj')
    let itemImg
    let actItem
    for(i=0;slideItem.length>i;i++){
        slideItem[1].classList.add('slideActive')
        slideItem[i].addEventListener('click',function(){
            itemImg = this.querySelector('.slide_img').getAttribute('src')
            slideAct = slider.setAttribute('src',`${itemImg}`)
            slideItem.forEach((item)=>{
                item.classList.remove('slideActive')
            })
            if(itemImg === slider.getAttribute('src')){
                this.classList.add('slideActive')}
        })
        actItem = slideItem[1].querySelector('.slide_img').getAttribute('src')
    }
    slider.setAttribute('src',`${actItem}`)

}

slideItem()

//filtr 
filtr.addEventListener('click',()=>{
    filtrItem.classList.toggle('block')
    if(menuItem.classList.contains('burgerMenu-act')){
        menuItem.classList.remove('burgerMenu-act')
    }
})


const Cart = {
    arr: [],
}

// let vals = []

window.addEventListener('click',(e)=>{
    let counter
    if(e.target.dataset.action === 'minus' || e.target.dataset.action === 'plus'){
        const btnWrapper = e.target.closest('.product_card-price_btns')
        counter = btnWrapper.querySelector('.product_card-price_addinfo')
    }
    if(e.target.dataset.action === 'plus'){
        if(parseInt(counter.innerText)>14)
            return
            counter.innerText = ++counter.innerText
            calc()
    }
    if(e.target.dataset.action === 'minus'){
        if(parseInt(counter.innerText)>1){
            counter.innerText = --counter.innerText
            calc()
        }
    }
    let calcOver = document.querySelector('.calcOver')
    if(e.target.hasAttribute('data-buy')){
        let calcInfo = document.querySelector('.calcPrice');
        let counter = document.querySelector('.product_counter');
        let cartItem = document.querySelector('.bag_item')
        let actCount = parseInt(counter.innerText)
        let actCart = cartItem.innerText = actCount
        let bagAct = document.querySelector('.header_top-right_bag')
        bagAct.classList.add('bag_act')
        let mobCart = document.querySelector('.mob_car-num')
        let mobBack = document.querySelector('.header_mob-cart_item')
        mobBack.classList.add('mob_actCart')
        Cart.arr.push({
            count:actCart,
        })
        let value = 0
        for(let prod of Cart.arr)
        // value += +prod.count
        // cartItem.innerText = value
        if(parseInt(cartItem.innerText) > 99){
            cartItem.innerText = '99+'
        }else{
            value += +prod.count
            cartItem.innerText = value
            mobCart.innerText = value
        }

       // обнуление 
        counter.innerText = 1;
        calcOver.innerText = (parseInt(calcInfo.innerText)*1000);
    }
})


// Email
const submitBtn = document.querySelector('.btn_email')

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault()
})

const mailAccept = document.querySelectorAll('.label_submit')
mailAccept.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        item.classList.toggle('mail_act') 
    })
})

const asideAct = document.querySelectorAll('.aside_menu-item ')
asideAct.forEach((item,i)=>{
    item.dataset.act = i;
    const actInd = item.dataset.act
    item.addEventListener('click',(e)=>{
        e.preventDefault()
        if(parseInt(actInd) === parseInt(i)){
            item.classList.toggle('aside_menu-active')
        }else{
            item.classList.remove('aside_menu-active')
        }
    })
})


// tab

const tabBtn = document.querySelectorAll('.product_card-tab')
const tabContent = document.querySelectorAll('.product_card-tabs')

tabContent.forEach((item,i)=>{
    item.dataset.tab = i;
    if(i!==0){
        item.classList.add('none')
    }
})



tabBtn.forEach((item,i)=>{
    item.dataset.tab = i;
    let tabAct = item.dataset.tab
    item.addEventListener('click',()=>{   
        let actI = item 
        tabBtn.forEach((item,i)=>{
            item.classList.remove('active')
        })
        actI.classList.add('active')
        tabContent.forEach((item)=>{
            item.classList.add('none')
            let setDat = item.dataset.tab
            if(parseInt(tabAct)===parseInt(setDat)){
                item.classList.remove('none')
            }
        })
    })
})

// email form

async function  aut() { 
    let err = 0; 
    let email = document.querySelector('.input_email'); 
    let notValid = document.querySelector('.input_email-notVaild')
    let labelSubmit = document.querySelectorAll('.label_submit')

    if (email.value===''){ 
        err = 1; 
        email.classList.add('err'); 
        notValid.classList.add('flex')
        document.querySelector('.label-email').style.color = '#E01C1C'
    }
    else{ 
        email.value = '';
        notValid.classList.remove('flex')
        document.querySelector('.label-email').style.color = '#fff'
        email.classList.remove('err'); 
        labelSubmit.forEach(item=>{
            item.classList.remove('mail_act')
        })
    }
}

let btnEmail = document.querySelector('.btn_email')
btnEmail.addEventListener('click',()=>{
    aut()
})

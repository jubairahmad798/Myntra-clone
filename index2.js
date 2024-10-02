

// let item={
//     itemImage:'watch.png',
//     rating:{
//         stars:4.5,
//         reviews:1500,
//     },
//     companyName:'Nautica',
//     itemName:'Analogue Wall Clock ',
//     originalPrice:'Rs. 2999',
//     discountPrice:'Rs. 2510',
//     discount:'(16% OFF)'

// }

let bagItems ;

onLoad()

function onLoad(){
    let bagItemStr =localStorage.getItem('bagItem');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayBagIcon()
displayItemsOnHomePage()

}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItem',JSON.stringify(bagItems))
    displayBagIcon()

}

function displayBagIcon(){
    let bagItemCount = document.querySelector('.bag-item-count');
   
    if(bagItems.length>0){
        bagItemCount.innerHTML=bagItems.length;
        bagItemCount.style.visibility='visible';


    }else{
        bagItemCount.style.visibility='hidden';
    }

}


function displayItemsOnHomePage() {
    let itemContainerElement = document.querySelector('.items-container');
    if(!itemContainerElement){
        return;
    }

    let innerHtml='';

items.forEach(item => {
    innerHtml+=`<div class="item-container">

    <img  class="item-image" src="${item.itemImage}" alt="t-shirt" >
    <div class="rating">${item.rating.stars} <span class="star">★</span> | ${item.rating.reviews}</div> 
    <div class="company-name">${item.companyName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="price"> <span class="discount-price">${item.discountPrice}</span>
    <span class="original-price">${item.originalPrice}</span>
    <span class="discount">${item.discount}</span>
  </div>
  <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Cart</button>


</div>`

    
});
itemContainerElement.innerHTML = innerHtml;

}


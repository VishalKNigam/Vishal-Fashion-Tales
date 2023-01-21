let cartContainer = document.querySelector("#cartContainer");
let addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
    display(addToCart)
    function display(data){
        cartContainer.innerHTML = null;
    data.forEach(function(element,i){
        //activeContainer.innerHTML = null;
        // smallContainer.innerHTML = null;
        let card = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src",element.src)
        let description = document.createElement("h3")
        description.innerText = element.description;
        let category = document.createElement("h2");
        category.textContent = element.category;
        let price = document.createElement("h3");
        price.textContent = `Price: ₹${element.price}`;
        let button1 = document.createElement("button")
        button1.innerText = "Delete";
        button1.style.color = "white"
        button1.style.backgroundColor = "pink"
        button1.style.border = "none"
        let button2 = document.createElement("button")
        button2.innerText = "BUY";
        button2.style.color = "white"
        button2.style.backgroundColor = "pink"
        button2.style.border = "none"
        button1.addEventListener("click",function(){
            data.splice(i,1);
            localStorage.setItem("addToCart", JSON.stringify(addToCart));
            display(data);
        })
        card.append(image,description,category,price
        ,button2,button1);
        cartContainer.append(card); 
    })
}
let pricediv = document.querySelector("#price");
let count = document.createElement("h2")
count.textContent = `Total Items in the Cart--- ${addToCart.length}`
let pricespan = document.createElement("h2")

let sum = 0;
for(let i=0; i<addToCart.length; i++){
    sum += addToCart[i].price;
}
pricespan.textContent=`Total sum of all Items--- ${sum}`;
pricediv.append(count,pricespan)

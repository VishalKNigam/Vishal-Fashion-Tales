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
            //addToCart.push(element);
            localStorage.setItem("addToCart", JSON.stringify(addToCart));
            display(data);

        })
        

        card.append(image,description,category,price
        ,button2,button1);
        cartContainer.append(card);
        
        
    })
}
let pricediv = document.querySelector("#price");
let pricespan = document.createElement("h2")
let sum = 0;
for(let i=0; i<addToCart.length; i++){
    sum += addToCart[i].price;
}
pricespan.innerText=`Total sum of all Items is ${sum}`;
pricediv.append(pricespan)



//display(arr)
//console.log(arr)
        // let searchform = document.querySelector("form")
        // let navbar = document.querySelector("#navbar")
        // //console.log(search)
        // searchform.addEventListener("submit",function(e){
        //     e.preventDefault();
        //     smallContainer.innerHTML = null;
        //     activeContainer.innerHTML = null;
        //     navbar.style.position = "relative";
        //     let inputvalue = searchform.search.value;
        //     let filtered = arr.filter(function(element){
        //         if (element.category.toUpperCase().includes(inputvalue.toUpperCase())===true ){
        //             return true;
        //         }else{

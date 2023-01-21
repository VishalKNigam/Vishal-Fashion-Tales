
var i = 1;
var images = [];
// var time = 3000;
// images[0] = "Images/logo.png"
images[1] = "Images/w1.jpg"
images[2] = "Images/w2.jpg"
images[3] = "Images/w3.jpg"
images[4] = "Images/w4.jpg"
images[5] = "Images/w5.jpg"
images[6] = "Images/w6.jpg"
//console.log(images)
slideshow();
function slideshow(){
    document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=1;
    }
    setTimeout("slideshow()",3000);
}
window.onload = slideshow;
let activeContainer = document.querySelector("#activeContainer");
//console.log(activeContainer);
let arr = [];
arr[0]= {
    src: "arr/arr0.jpg",
    category: "Shirts",
    description: "Long Sleeve Relaxed Washed Plaid Flannel Button-Down Shirt",
    price: 2000,
    
}
arr[18]= {
    src: "arr/arr1.jpg",
    category: "Shirts",
    description: "Buffalo Check Softspun Flannel Button-Down Shirt",
    price: 1000,
}
arr[1]= {
    src: "arr/arr2.jpg",
    category: "Shirts",
    description: "Long Sleeve Relaxed Washed Plaid Flannel Button-Down Shirt",
    price: 950 
}
arr[19]= {
    src: "arr/arr3.jpg",
    category: "Shirts",
    description: "Buffalo Check Softspun Flannel Button-Down Shirt",
    price: 400,
}
arr[2]= {
    src: "arr/arr4.jpg",
    category: "Shirts",
    description: "Long Sleeve Poplin Uniform Button-Down Shirt",
    price: 300 
}
arr[20]= {
    src: "arr/arr5.jpg",
    category: "Shirts",
    description: "Long Sleeve Poplin Uniform Button-Down Shirt",
    price: 4000 
}
arr[3]= {
    src: "arr/arr6.jpg",
    category: "Shirts",
    description: "Long Sleeve Lightweight Plaid Flannel Hooded Button-Down Shirt",
    price: 1000 
}
arr[21]= {
    src: "arr/arr7.jpg",
    category: "Shirts",
    description: "ladies long sleeves light Shirt",
    price: 3000 
}
arr[4]= {
    src: "arr/arr8.jpg",
    category: "Shirts",
    description: "ladies long sleeves light Shirt",
    price: 1000 
}
arr[22]= {
    src: "arr/arr9.jpg",
    category: "Shirts",
    description: "Stylish ladies long sleeves light Shirt",
    price: 1000 
}
arr[5]= {
    src: "arr/arr10.jpg",
    category: "Shirts",
    description: "Fancy Shorty Ladies Shirts",
    price: 1000 
}
arr[23]= {
    src: "arr/arr11.jpg",
    category: "Shirts",
    description: "Men's Block bey Shirts",
    price: 1000 
}
arr[6]= {
    src: "arr/arr12.jpg",
    category: "Jeans",
    description: "High-Rise Flare Jean",
    price: 1500 
}
arr[24]= {
    src: "arr/arr13.jpg",
    category: "Jeans",
    description: "Low-Rise Wide Leg Jean",
    price: 3500 
}
arr[7]= {
    src: "arr/arr14.jpg",
    category: "Jeans",
    description: "Mid-Rise Bootcut Jean",
    price: 700 
}
arr[25]= {
    src: "arr/arr15.jpg",
    category: "Jeans",
    description: "Straight Jean",
    price: 3000 
}
arr[8]= {
    src: "arr/arr16.jpg",
    category: "Jeans",
    description: "Athletic Skinny Jean",
    price: 2000 
}
arr[26]= {
    src: "arr/arr17.jpg",
    category: "Jeans",
    description: "High-Rise Curvy Stretch Mom Jean",
    price: 2500 
}
arr[9]= {
    src: "arr/arr18.jpg",
    category: "Jeans",
    description: "Skinny Premium Air Jean",
    price: 1000 
}
arr[27]= {
    src: "arr/arr19.jpg",
    category: "Jeans",
    description: "High-Rise Pull-On Flare Soft Flex Jean",
    price: 2000 
}
arr[10]= {
    src: "arr/arr20.jpg",
    category: "Jeans",
    description: "Skinny Premium Jean with LYCRA® FREEF!T® Technology",
    price: 10000 
}
arr[28]= {
    src: "arr/arr21.jpg",
    category: "Sweater",
    description: "Fair Isle High-Rise Sweater Shorts",
    price: 1000 
}
arr[11]= {
    src: "arr/arr22.jpg",
    category: "Sweater",
    description: "Sweater-Knit Cropped Tennis Tank",
    price: 1000 
}
arr[29]= {
    src: "arr/arr23.jpg",
    category: "Sweater",
    description: "Sweater-Knit Cropped Tennis Tank",
    price: 1000 
}
arr[12]= {
    src: "arr/arr24.jpg",
    category: "Sweater",
    description: "Sweater-Knit Cropped Tennis Tank",
    price: 1000 
}
arr[30]= {
    src: "arr/arr25.jpg",
    category: "Sweater",
    description: "Faded Crew Sweater",
    price: 1000 
}
arr[13]= {
    src: "arr/arr26.jpg",
    category: "Sweater",
    description: "Faded Crew Sweater",
    price: 1000 
}
arr[31]= {
    src: "arr/arr27.jpg",
    category: "Sweater",
    description: "Faded Crew Sweater",
    price: 1000 
}
arr[14]= {
    src: "arr/arr28.jpg",
    category: "Sweater",
    description: "Faded Crew Sweater",
    price: 1000 
}
arr[32]= {
    src: "arr/arr29.jpg",
    category: "Jeans",
    description: "lovely Shirts V-T",
    price: 1000 
}
arr[15]= {
    src: "arr/arr30.jpg",
    category: "Jeans",
    description: "lovely Shirts V-T",
    price: 1000 
}
arr[33]= {
    src: "arr/arr31.jpg",
    category: "Belts",
    description: "Fitting Belts",
    price: 200
}
arr[16]= {
    src: "arr/arr32.jpg",
    category: "Belts",
    description: "Fitting Belts",
    price: 300 
}
arr[34]= {
    src: "arr/arr33.jpg",
    category: "Belts",
    description: "Fitting Belts",
    price: 400
}
arr[17]= {
    src: "arr/arr34.jpg",
    category: "Belts",
    description: "Fitting Belts",
    price: 500
}
arr[35]= {
    src: "arr/arr35.jpg",
    category: "Belts",
    description: "Fitting Belts",
    price: 300
}

let smallContainer = document.querySelector("#smallContainer")
let addToCart = JSON.parse(localStorage.getItem("addToCart")) || [];
display(arr);
function display(data){

    data.forEach(function(element,ind){
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
        let button = document.createElement("button")
        button.innerText = "Add to Cart";
        button.style.color = "white"
        button.style.backgroundColor = "pink"
        button.style.border = "none"
        button.addEventListener("click",function(){
            addToCart.push(element);
            localStorage.setItem("addToCart", JSON.stringify(addToCart))

        })

        card.append(image,description,category,price
        ,button);
        activeContainer.append(card);
        
        
    })
}
//display(arr)
//console.log(arr)
        let searchform = document.querySelector("form")
        let navbar = document.querySelector("#navbar")
        //console.log(search)
        searchform.addEventListener("submit",function(e){
            e.preventDefault();
            smallContainer.innerHTML = null;
            activeContainer.innerHTML = null;
            navbar.style.position = "relative";
            let inputvalue = searchform.search.value;
            let filtered = arr.filter(function(element){
                if (element.category.toUpperCase().includes(inputvalue.toUpperCase())===true ){
                    return true;
                }else{
                    return false;
                }
            })
            display(filtered)
        })
        
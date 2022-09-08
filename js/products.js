let data = [
    {
        productName: "Gray pants",
        category: "Bottomwear",
        price: "50",
        image: "images/pants1.jpg"
    },
    {
        productName: "Normal pants",
        category: "Bottomwear",
        price: "80",
        image: "images/pants2.jpg"
    },
    {
        productName: "Shirt1",
        category: "T-shirt",
        price: "90",
        image: "images/shirt1.jpg"
    },
    {
        productName: "Shirt2",
        category: "T-shirt",
        price: "20",
        image: "images/shirt2.jpg"
    },
    {
        productName: "Shirt3",
        category: "T-shirt",
        price: "300",
        image: "images/shirt3.jpg"
    },
    {
        productName: "Shirt4",
        category: "T-shirt",
        price: "120",
        image: "images/shirt4.jpg"
    },
    {
        productName: "Watch 1",
        category: "Clock",
        price: "30",
        image: "images/watch1.jpg"
    },
    {
        productName: "Watch 2",
        category: "Clock",
        price: "150",
        image: "images/watch2.jpg"
    },
    {
        productName: "Watch 3",
        category: "Clock",
        price: "1500",
        image: "images/watch3.jpg"
    }
]
// console.log(data);

for (let i of data) {
    //create card
    let card = document.createElement('div');

    //card should have category
    card.classList.add('card', i.category, "hide");

    //img div
    let imgContainer = document.createElement("div");

    imgContainer.classList.add("image-container");

    //image tag
    let img = document.createElement("img");
    img.setAttribute("src", i.image);
    // img.style.width = "200px";
    img.style.height = "400px";
    // img.style.objectFit = "cover";
    imgContainer.appendChild(img);

    card.appendChild(imgContainer);
    document.getElementById("products").appendChild(card);


    //container
    let container = document.createElement('div');
    container.classList.add('container');


    //product name
    let name = document.createElement('h5');
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);


     //Price 
     let price = document.createElement('h6');
     price.innerText = "₹" + i.price;
     container.appendChild(price);
 
     card.appendChild(container);
 
     document.getElementById("products").appendChild(card);



}



function filterProduct(value){
    let buttons = document.querySelectorAll('.btn-val');
    // console.log(buttons);
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    });

    //select all cards
    let cards = document.querySelectorAll(".card");
    // console.log(cards);

    cards.forEach((card) =>{
        //Display all cards on All button click
        if(value === "All"){
            card.classList.remove("hide");
        }
        else{
            if(card.classList.contains(value)){
                card.classList.remove("hide");
            }
            else{
                card.classList.add("hide");
            }
        }
    })
}

window.onload = () =>{
    filterProduct('All');
}

function getresult(){
    let searchQuery = document.getElementById('search-field').value;;
    // console.log((searchQuery));

    let cards = document.querySelectorAll(".card");


    // All products name
    // let productNames = document.querySelectorAll(".product-name");
    let names = data.map(e => e.productName);
    console.log(names);
    // console.log(cards);

    names.forEach((name, i) =>{
        let n = name.toUpperCase()
        if(n.includes(searchQuery.toUpperCase())){
            cards[i].classList.remove('hide');
        }
        else{
            cards[i].classList.add('hide');

            // let div = document.getElementById("products");
            // const p = document.createElement('p');
            // p.innerText = "Sorry No data found";
            

        }
    })


}


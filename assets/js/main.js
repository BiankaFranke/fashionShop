// JS Check
console.log('it works');

// Input Data, Declaration
const data = [
    {
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Air",
      brand: "Nike",
      price: "120.00 $",
      sizes: ["37", "38", "39"],
    },
    {
      img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
      name: "Dunk High Pro",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["37", "38", "39", "40", "42"],
    },
    {
      img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
      name: "Old Skool",
      brand: "Vans",
      price: "50.00 $",
      sizes: ["37"],
    },
    {
      img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
      name: "Summer Party",
      brand: "Nike",
      price: "100.00 $",
      sizes: ["42", "43", "44", "45", "46"],
    },
  {
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Retro",
      brand: "Adidas",
      price: "149.00 $",
      sizes: ["39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      name: "Fancy Doc",
      brand: "Crocs",
      price: "79.00 $",
      sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Classic",
      brand: "Reebok",
      price: "99.00 $",
      sizes: ["43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Jungle",
      brand: "New Balance",
      price: "110.00 $",
      sizes: ["39", "40", "41", "42"],
  },
  {
      img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "Essentials",
      brand: "Errant",
      price: "120.00 $",
      sizes: ["41","42", "43", "44", "45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Très chic",
      brand: "Nike",
      price: "150.00 $",
      sizes: ["45", "46"],
  },
  {
      img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
      name: "Plastic Revolution",
      brand: "Adidas",
      price: "180.00 $",
      sizes: ["37", "38", "39", "40"],
  },
  {
      img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Sporty",
      brand: "Asics",
      price: "90.00 $",
      sizes: ["41","42", "43", "44"],
  }
 ]
 
 const cookieBanner = document.querySelector("#cookieBanner");
 const navigation = document.querySelector("#navi");
 const accept = document.querySelector("#accept");
 const katShoes = document.querySelector('#katShoes');

// Cookie Banner
// Cookie check
// if (document.cookie == "") {
//     cookieBanner.style.display = "block";
// } else {
//     cookieBanner.style.display = "none";
// };

// Eventlistener for cookie banner

// document.querySelector("#accept").addEventListener("click", (event) => {
//     event.preventDefault();
//     document.cookie = `acception=yes; Max-Age=1000000000; path=/`;
//     cookieBanner.style.display = "none";
// });

// document.querySelector("#reject").addEventListener("click", (event) => {
//     event.preventDefault();
//     cookieBanner.style.display = "none";
// });

// Sections shoes

data.forEach(item => {
    const article = document.createElement("div");
    const name = document.createElement("p");
    const plus = document.createElement("button");

    const image = document.createElement("img");

    const priceAndArrow = document.createElement("div");

    const price = document.createElement("p");
    const arrow = document.createElement("p");

    const arrowImg = document.createElement('img');

    image.src = item.img;
    image.classList.add("img");
    katShoes.appendChild(image);

    katShoes.appendChild(article);
    article.classList.add("art");
    name.innerText = item.name;
    name.classList.add("name");

    plus.innerText = '+';
    plus.classList.add("plus");
    article.appendChild(name);
    article.appendChild(plus);

    katShoes.appendChild(priceAndArrow);
    priceAndArrow.classList.add("priceAndArrow");
    price.classList.add("price");
    price.innerText = item.price;

    arrowImg.src = '../assets/img/arrow.svg';
    arrowImg.classList.add("arr");

    priceAndArrow.appendChild(price);
    priceAndArrow.appendChild(arrowImg);

    arrowImg.addEventListener('click', () => {
        const accordionDiv = document.createElement("div");
        const brand = document.createElement("p");
        const choice = document.createElement("div");

        arrowImg.style.transform = "rotate(180deg)"

        brand.innerText = item.brand;
        brand.classList.add("brand");
        accordionDiv.appendChild(brand);

        price.style.fontSize = '50px';

        arrowImg.addEventListener('click', () => {
            price.style.fontSize = '30px';
        })
    });

    // item.sizes.forEach(element => {
    //     const answerChoice = document.createElement('button');
    //     answerChoice.innerText = element;
    //     answer.appendChild(answerChoice);
    //     choice.appendChild(answer);
    // });

    // plus.addEventListener('click', () => {

    // });
});

let acc = () => {
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
};


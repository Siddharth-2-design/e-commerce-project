// take value of category through anchor tags of index.html
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const products = [

    // SHOES
    {
        name: "Running Shoes",
        price: 1499,
        category: "shoes"
    },
    {
        name: "Casual Sneakers",
        price: 1799,
        category: "shoes"
    },
    {
        name: "Formal Shoes",
        price: 2299,
        category: "shoes"
    },
    {
        name: "Sports Shoes",
        price: 1999,
        category: "shoes"
    },
    {
        name: "Walking Shoes",
        price: 1299,
        category: "shoes"
    },
    {
        name: "Leather Boots",
        price: 2499,
        category: "shoes"
    },
    {
        name: "Canvas Sneakers",
        price: 1599,
        category: "shoes"
    },
    {
        name: "Training Shoes",
        price: 1899,
        category: "shoes"
    },


    // T-SHIRTS
    {
        name: "Cotton T-Shirt",
        price: 599,
        category: "tshirts"
    },
    {
        name: "Oversized T-Shirt",
        price: 699,
        category: "tshirts"
    },
    {
        name: "Graphic T-Shirt",
        price: 749,
        category: "tshirts"
    },
    {
        name: "Printed T-Shirt",
        price: 649,
        category: "tshirts"
    },
    {
        name: "Polo T-Shirt",
        price: 899,
        category: "tshirts"
    },
    {
        name: "Roundneck T-Shirt",
        price: 549,
        category: "tshirts"
    },
    {
        name: "Slimfit T-Shirt",
        price: 699,
        category: "tshirts"
    },
    {
        name: "Sports T-Shirt",
        price: 799,
        category: "tshirts"
    },


    // COSMETICS
    {
        name: "Face Wash",
        price: 299,
        category: "cosmetics"
    },
    {
        name: "Body Lotion",
        price: 349,
        category: "cosmetics"
    },
    {
        name: "Lip Balm",
        price: 199,
        category: "cosmetics"
    },
    {
        name: "Face Cream",
        price: 449,
        category: "cosmetics"
    },
    {
        name: "Makeup Kit",
        price: 899,
        category: "cosmetics"
    },
    {
        name: "Eye Shadow",
        price: 499,
        category: "cosmetics"
    },
    {
        name: "Hair Serum",
        price: 399,
        category: "cosmetics"
    },
    {
        name: "Body Scrub",
        price: 379,
        category: "cosmetics"
    },


    // TOYS
    {
        name: "Toy Car",
        price: 399,
        category: "toys"
    },
    {
        name: "Building Blocks",
        price: 599,
        category: "toys"
    },
    {
        name: "Remote Car",
        price: 899,
        category: "toys"
    },
    {
        name: "Toy Robot",
        price: 749,
        category: "toys"
    },
    {
        name: "Action Figure",
        price: 499,
        category: "toys"
    },
    {
        name: "Puzzle Game",
        price: 349,
        category: "toys"
    },
    {
        name: "Soft Teddy",
        price: 699,
        category: "toys"
    },
    {
        name: "Toy Train",
        price: 549,
        category: "toys"
    },


    // FURNITURE
    {
        name: "Office Chair",
        price: 4999,
        category: "furniture"
    },
    {
        name: "Study Table",
        price: 5999,
        category: "furniture"
    },
    {
        name: "Wooden Chair",
        price: 2999,
        category: "furniture"
    },
    {
        name: "Coffee Table",
        price: 3999,
        category: "furniture"
    },
    {
        name: "Bookshelf Cabinet",
        price: 6499,
        category: "furniture"
    },
    {
        name: "Bedside Table",
        price: 2499,
        category: "furniture"
    },
    {
        name: "Dining Table",
        price: 8999,
        category: "furniture"
    },
    {
        name: "Sofa Set",
        price: 14999,
        category: "furniture"
    },


    // ELECTRONICS
    {
        name: "Wireless Headphones",
        price: 1999,
        category: "electronics"
    },
    {
        name: "Gaming Headphones",
        price: 2499,
        category: "electronics"
    },
    {
        name: "Bluetooth Headphones",
        price: 1799,
        category: "electronics"
    },
    {
        name: "Gaming Laptop",
        price: 54999,
        category: "electronics"
    },
    {
        name: "Business Laptop",
        price: 44999,
        category: "electronics"
    },
    {
        name: "Mechanical Keyboard",
        price: 2499,
        category: "electronics"
    },
    {
        name: "Wireless Keyboard",
        price: 1499,
        category: "electronics"
    },
    {
        name: "Wireless Mouse",
        price: 799,
        category: "electronics"
    }

];
const boxes = document.querySelectorAll(".box");


function createBoxes(){
    boxes.forEach((box)=>{
            const block = document.createElement("img");
            
            block.src = "images/headphone.jpg";
            block.classList.add("block");
            box.appendChild(block);

    })


}
createBoxes();
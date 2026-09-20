const defaultProducts = [

    {
        id: 1,
        name: "Onion Hair Oil",
        category: "Oil",
        price: 399,
        oldPrice: 499,
        rating: 4.5,
        icon: "🫒",
        link: "#"
    },

    {
        id: 2,
        name: "Anti Hair Fall Shampoo",
        category: "Shampoo",
        price: 349,
        oldPrice: 449,
        rating: 4.4,
        icon: "🧴",
        link: "#"
    },

    {
        id: 3,
        name: "Hair Growth Serum",
        category: "Serum",
        price: 599,
        oldPrice: 699,
        rating: 4.6,
        icon: "💧",
        link: "#"
    },

    {
        id: 4,
        name: "Coconut Hair Oil",
        category: "Oil",
        price: 249,
        oldPrice: 299,
        rating: 4.3,
        icon: "🥥",
        link: "#"
    },

    {
        id: 5,
        name: "Keratin Shampoo",
        category: "Shampoo",
        price: 449,
        oldPrice: 549,
        rating: 4.4,
        icon: "🧴",
        link: "#"
    },

    {
        id: 6,
        name: "Argan Hair Serum",
        category: "Serum",
        price: 699,
        oldPrice: 799,
        rating: 4.7,
        icon: "💧",
        link: "#"
    },

    {
        id: 7,
        name: "Biotin Hair Supplement",
        category: "Supplement",
        price: 499,
        oldPrice: 599,
        rating: 4.3,
        icon: "💊",
        link: "#"
    },

    {
        id: 8,
        name: "Amla Hair Oil",
        category: "Oil",
        price: 199,
        oldPrice: 249,
        rating: 4.2,
        icon: "🌿",
        link: "#"
    },

    {
        id: 9,
        name: "Anti Dandruff Shampoo",
        category: "Shampoo",
        price: 299,
        oldPrice: 399,
        rating: 4.5,
        icon: "🧴",
        link: "#"
    },

    {
        id: 10,
        name: "Scalp Care Serum",
        category: "Serum",
        price: 549,
        oldPrice: 649,
        rating: 4.5,
        icon: "💧",
        link: "#"
    },

    {
        id: 11,
        name: "Hair Multivitamin",
        category: "Supplement",
        price: 699,
        oldPrice: 849,
        rating: 4.4,
        icon: "💊",
        link: "#"
    },

    {
        id: 12,
        name: "Rosemary Hair Oil",
        category: "Oil",
        price: 449,
        oldPrice: 549,
        rating: 4.6,
        icon: "🌿",
        link: "#"
    }

];


let products =
    JSON.parse(
        localStorage.getItem("hairProducts")
    );


if (!products) {

    products = defaultProducts;

    localStorage.setItem(
        "hairProducts",
        JSON.stringify(products)
    );

}


let currentProducts = [...products];


function displayProducts(productList) {

    const grid =
        document.getElementById("productGrid");


    grid.innerHTML = "";


    if (productList.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
            ">

                <h3>No products found</h3>

                <p>
                    Try another search.
                </p>

            </div>
        `;

        return;
    }


    productList.forEach(product => {

        grid.innerHTML += `

            <div class="product-card">

                <div class="product-picture">

                    ${product.icon}

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>


                    <h3>
                        ${product.name}
                    </h3>


                    <div class="rating">
                        ⭐ ${product.rating}
                    </div>


                    <div class="price-row">

                        <div>

                            <span class="price">
                                ₹${product.price}
                            </span>

                            <span class="old-price">
                                ₹${product.oldPrice}
                            </span>

                        </div>

                    </div>


                    <a
                        href="${product.link}"
                        target="_blank"
                        class="buy-button"
                    >
                        View Product →
                    </a>

                </div>

            </div>

        `;

    });

}


function filterProducts(category) {

    if (category === "All") {

        currentProducts = [...products];

    } else {

        currentProducts =
            products.filter(
                product =>
                    product.category === category
            );

    }


    displayProducts(currentProducts);

}


function searchProducts() {

    const search =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    currentProducts =
        products.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );


    displayProducts(currentProducts);

}


function sortProducts() {

    const option =
        document
        .getElementById("sortSelect")
        .value;


    if (option === "low") {

        currentProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    else if (option === "high") {

        currentProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    else {

        currentProducts = [...products];

    }


    displayProducts(currentProducts);

}


displayProducts(products);
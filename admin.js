const ADMIN_PASSWORD = "HairGlow@123";


let products =
    JSON.parse(
        localStorage.getItem("hairProducts")
    ) || [];



/* LOGIN */

function login() {

    const password =
        document.getElementById("password").value;


    if (password === ADMIN_PASSWORD) {

        document.getElementById(
            "loginScreen"
        ).style.display = "none";


        document.getElementById(
            "adminPanel"
        ).style.display = "block";


        displayAdminProducts();

    }

    else {

        alert("Wrong password!");

    }

}



/* LOGOUT */

function logout() {

    location.reload();

}



/* SAVE PRODUCT */

document
    .getElementById("productForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const editId =
                document.getElementById(
                    "editId"
                ).value;


            const product = {

                id: editId
                    ? Number(editId)
                    : Date.now(),

                name:
                    document.getElementById(
                        "name"
                    ).value,

                category:
                    document.getElementById(
                        "category"
                    ).value,

                price:
                    Number(
                        document.getElementById(
                            "price"
                        ).value
                    ),

                oldPrice:
                    Number(
                        document.getElementById(
                            "oldPrice"
                        ).value
                    ),

                rating:
                    Number(
                        document.getElementById(
                            "rating"
                        ).value
                    ),

                icon:
                    document.getElementById(
                        "icon"
                    ).value,

                link:
                    document.getElementById(
                        "link"
                    ).value

            };


            if (editId) {

                products =
                    products.map(
                        item =>
                            item.id === Number(editId)
                                ? product
                                : item
                    );

            }

            else {

                products.push(product);

            }


            saveProducts();

            clearForm();

            displayAdminProducts();


            alert(
                "Product saved successfully!"
            );

        }
    );



/* SAVE */

function saveProducts() {

    localStorage.setItem(
        "hairProducts",
        JSON.stringify(products)
    );

}



/* DISPLAY */

function displayAdminProducts() {

    const container =
        document.getElementById(
            "adminProducts"
        );


    const count =
        document.getElementById(
            "productCount"
        );


    count.textContent =
        products.length;


    container.innerHTML = "";


    products.forEach(product => {

        container.innerHTML += `

            <div class="admin-product">

                <div>

                    <h3>
                        ${product.icon}
                        ${product.name}
                    </h3>

                    <p>
                        ${product.category}
                        • ₹${product.price}
                        • ⭐ ${product.rating}
                    </p>

                </div>


                <div class="admin-actions">

                    <button
                        class="edit"
                        onclick="editProduct(${product.id})"
                    >
                        Edit
                    </button>


                    <button
                        class="delete"
                        onclick="deleteProduct(${product.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>

        `;

    });

}



/* EDIT */

function editProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    document.getElementById("editId")
        .value = product.id;


    document.getElementById("name")
        .value = product.name;


    document.getElementById("category")
        .value = product.category;


    document.getElementById("price")
        .value = product.price;


    document.getElementById("oldPrice")
        .value = product.oldPrice;


    document.getElementById("rating")
        .value = product.rating;


    document.getElementById("icon")
        .value = product.icon;


    document.getElementById("link")
        .value = product.link;


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



/* DELETE */

function deleteProduct(id) {

    const answer =
        confirm(
            "Delete this product?"
        );


    if (!answer) return;


    products =
        products.filter(
            product =>
                product.id !== id
        );


    saveProducts();

    displayAdminProducts();

}



/* CLEAR */

function clearForm() {

    document
        .getElementById("productForm")
        .reset();


    document.getElementById(
        "editId"
    ).value = "";

}
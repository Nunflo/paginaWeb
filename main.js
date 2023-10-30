
const imagenes = ["https://siman.vtexassets.com/assets/vtex.file-manager-graphql/images/d3de4709-8c24-4aa5-9dcb-9a69ff83c1d7___90dfecaf410aeebd255dd8594aff065b.jpg" ,
"https://siman.vtexassets.com/assets/vtex.file-manager-graphql/images/3febb301-e1e4-4850-bd7b-d7ede1dd9be3___e552aa51ef4dcd2276742684826a78b4.jpg",
"https://siman.vtexassets.com/assets/vtex.file-manager-graphql/images/2f4832e7-4097-437d-a724-f90a663204cd___861f69e8c1f2587930291808200be71d.jpg",
"https://siman.vtexassets.com/assets/vtex.file-manager-graphql/images/6467d09e-4112-4181-a9ee-a901f16f1ca8___ae80718285a8b8c9b7b972d648d393de.jpg"
];
const imagen = document.getElementById("imagen");
let currentIndex = 0;

function cambiarImagen() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    imagen.src = imagenes[currentIndex];
}

setInterval(cambiarImagen, 2000); 




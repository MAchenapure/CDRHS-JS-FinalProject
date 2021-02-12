let productsDB = [];
let cart = new Cart();

if (localStorage.getItem('cart') != null) {
    let storage = JSON.parse(localStorage.getItem('cart'));
    cart.addStorage(storage);
} else {
    console.log(`No hay datos cargados.`);
}

cart.printCart();

let zapNikeAirMot2 = new Product('Zapatillas Nike Airmax Motion 2', '9299', '10', 'imgs/nike-airmax-motion2.jpg'); // Masculino
let buzPumaClass = new Product('Buzo Puma Classic', '5499', '15', 'imgs/buzo-puma-classic.jpg'); // Masculino
let zapAdiOrigRunRosa = new Product('Zapatillas Adidas Originals Run', '7499', '5', 'imgs/adidas-originals-run.jpg'); // Femenino
let remPumaTech = new Product('Remera Puma Tech', '2199', '10', 'imgs/remera-pum-tech1.jpg'); // Masculino
let shoNikeFlex = new Product('Short Nike Flex', '4499', '10', 'imgs/short-nike-flex1.jpg'); // Masculino
let remAdiMyTee = new Product('Remera Adidas My Tee', '1539', '10', 'imgs/remera-adidas-mytee1.jpg'); // Femenino
let zapConvAllChuck = new Product('Zapatillas Converse All Star Chuck Taylor', '7595', '10', 'imgs/zap-converse-chuck-allstar1.jpg'); // Femenino
let shoNike10kGlam = new Product('Short Nike 10K Glam Gx', '3999', '10', 'imgs/short-nike-10k-glam-gx1.jpg'); // Femenino
let camNikeSportswear = new Product('Campera Nike Sportswear Windrunner', '10999', '10', 'imgs/campera-nike-sportswear1.jpg'); // Masculino

productsDB.push(zapNikeAirMot2);
productsDB.push(buzPumaClass);
productsDB.push(zapAdiOrigRunRosa);
productsDB.push(remPumaTech);
productsDB.push(shoNikeFlex);
productsDB.push(remAdiMyTee);
productsDB.push(zapConvAllChuck);
productsDB.push(shoNike10kGlam);
productsDB.push(camNikeSportswear);

if (document.querySelector('.main-container')) {
    for (let i = 0; i < productsDB.length; i++) {
        productsDB[i].printCard(i);
    }
}

// TODO Se puede agregar un id de producto para hacer un if en el addProduct() y sumar la cantidada solicitada con la ya registrada. 
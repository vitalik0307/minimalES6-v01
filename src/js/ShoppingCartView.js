export default class ShoppingCartView{
	constructor(){

	}

		showCartPop(products){
			let output = "";
			let ViewCart = $('.popup-cart');
			console.log(sessionStorage.length);
			for (let i = 0; i < sessionStorage.length; i++) {
				let currentSku = sessionStorage.key(i);//this is strong
				let currentQty = sessionStorage.getItem(currentSku);// this is string	
				
				console.log(products.length);
				for (let p = 0; p < products.length; p++){
					let currrentProduct = products[i];
					let productSku = currrentProduct.sku;//or currentProduct["sku"];
					productSku = productSku.toString();
					//console.log(productSku);
					if (productSku == currentSku) {
						let img = currrentProduct.image;//chet at JSON for .image
						let name = currrentProduct.name;
						let price = currrentProduct.price;


						output += `
										<div class="cart-img small-child">
										<img src="${img}">
										</div>
										<div calass="cart-description big-child">
										<p>${name}</p>
										</div>
										<div class="cart-price small-child">
									 	${price}
									 	</div>
									 	 ${currentQty}</p>
									`
					}
					// close if statement
				}
				// close p for loop
				$('.cart-wrapper').html(output);
			}
			// close i for loop
	
			console.log(output);
			// $(".popup-cart").html(output);
		}
		// close showPopUp function
	
}
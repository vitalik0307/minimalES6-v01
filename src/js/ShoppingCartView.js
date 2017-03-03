export default class ShoppingCartView{
	constructor(){

	}

		showCartPop(products){
			// console.log("iam in the showCartPOP");
			let output = "";
			let ViewCart = $('.popup-cart');
			console.log(sessionStorage.length);
			for (let i = 0; i < sessionStorage.length; i++) {
				let currentSku = sessionStorage.key(i);//this is strong
				let currentQty = sessionStorage.getItem(currentSku);// this is string	
				
				console.log(products.length);
				for (let p = 0; p < products.length; p++){
					let currentProduct = products[p];
					let productSku = currentProduct.sku;//or currentProduct["sku"];
					console.log(productSku);
					productSku = productSku.toString();
					//console.log(productSku);
					if (productSku === currentSku) {
						let img = currentProduct.image;//chet at JSON for .image
						let name = currentProduct.name;
						let price = currentProduct.salePrice;
						console.log(price);


						output += `<div>
									<div class="cart-img small-child">
									<img src="${img}">
									</div>
									<div calass="cart-description big-child">
									<p>${name}</p>
									</div>
									<div class="cart-price small-child">
								 	${price}
								 	</div>
								 	<div class="cart-qvantity big-child"
								 	 ${currentQty}</p>
								 	 </div>
								 	 	<button name="update" class="update"">UPDATE</button>
										<button name="remove" class="remove" id="rm_${productSku}">REMOVE</button>
									</div>
									</div>
							`
							

						console.log(output);

					}
					
					// close if statement
				}
				// close p for loop
				$('.cart-wrapper').html(output);
			}
			// close i for loop
	
			// console.log(output);
			// $(".popup-cart").html(output);
		}
		// close showPopUp function
	
}
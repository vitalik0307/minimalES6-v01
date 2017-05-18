import ShoppingCart from './ShoppingCart';

export default class ShoppingCartView{
	constructor(sc){
		this.shoppingCart = sc;
	}

		showCartPop(products){
			// console.log("iam in the showCartPOP");
			let output = "";
			let ViewCart = $('.popup-cart');
			// console.log(sessionStorage.length);

			document.getElementById("shopping-cart-w").innerHTML="";
			for (let i = 0; i < sessionStorage.length; i++) {
				let currentSku = sessionStorage.key(i);//this is strong
				let currentQty = sessionStorage.getItem(currentSku);// this is string	
				
				// console.log(products.length);
				for (let p = 0; p < products.length; p++){
					let currentProduct = products[p];
					let productSku = currentProduct.sku;//or currentProduct["sku"];
					// console.log(productSku);
					productSku = productSku.toString();
					//console.log(productSku);
					if (productSku === currentSku) {
						let img = currentProduct.image;//chet at JSON for .image
						let name = currentProduct.name;
						let price = currentProduct.salePrice;
						// console.log("this is a price " + price);

					 let wrapperDiv = document.createElement("div");
					 wrapperDiv.setAttribute("class","cart-items-wrapper");

					 let imageDiv = document.createElement("div");
					 imageDiv.setAttribute("class","cart-img small-child");

					 let productImage = document.createElement("img");
					 productImage.setAttribute("src", img);

					 let descriptionDiv = document.createElement("div");
					 descriptionDiv.setAttribute("class","cart-description big-child");

					let descriptionPar = document.createElement("p");
					descriptionPar.innerHTML = name;

					let priceDiv = document.createElement("div");
					priceDiv.setAttribute("class","cart-price small-child");

					let productPrice = document.createElement("p");
					productPrice.innerHTML = price;

					let quantityDiv = document.createElement("div");
					quantityDiv.setAttribute("class","cart-qvantity small-child");

					let quantity = document.createElement("p");
					quantity.value = `${currentQty}`;

					let updateButton = document.createElement("button");
					updateButton.setAttribute("class","update");
					updateButton.setAttribute("id","${productSku}");
					updateButton.setAttribute("data-sku",productSku);
					updateButton.setAttribute("type","button");
					let updateButtonTextNode = document.createTextNode("Update");
            		updateButton.appendChild(updateButtonTextNode);

					let removeButton = document.createElement("button");
					removeButton.setAttribute("class","remove");
					removeButton.setAttribute("id","${productSku}");
					removeButton.setAttribute("data-sku",productSku);
					removeButton.setAttribute("type","button");
					let removeButtonTextNode = document.createTextNode("Remove");
            		removeButton.appendChild(removeButtonTextNode);
            		removeButton.addEventListener("click",this.shoppingCart.removeItemFromCart,false);

            		wrapperDiv.appendChild(imageDiv);

            		imageDiv.appendChild(productImage);
            		
            		wrapperDiv.appendChild(descriptionDiv);

            		descriptionDiv.appendChild(descriptionPar);

            		wrapperDiv.appendChild(priceDiv);

            		priceDiv.appendChild(productPrice);

            		wrapperDiv.appendChild(quantityDiv);

            		quantityDiv.appendChild(quantity);

            		wrapperDiv.appendChild(updateButton);

            		wrapperDiv.appendChild(removeButton);

            		document.getElementById("shopping-cart-w").appendChild(wrapperDiv);

					}
					
					// close if statement
				}

			}
			// close i for loop
	
			// console.log(output);
		}
		// close showPopUp function
	
}
	

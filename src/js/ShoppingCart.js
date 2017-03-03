

export default class ShoppingCart{

    constructor(){
        console.log("creating shopping cart");
        // Save data to sessionStorage

        if(Storage){
            this.ss = sessionStorage;
            // you can create a shoppingCart!
            this.initShoppingCart();
        } else
        {
            console.log("Error! SessionStorage not supported in your browser!");
        }
    }

    initShoppingCart(){
        console.log("finished creating shopping cart");
        
    }

    addItemToCart(sku){
        // if product is already in session add +1 to the value
        // else create key and value of  = 1
       
        let numMatches = 0;

        for (var i = 0; i < this.ss.length; i++) {

            if ( this.ss.key(i) == sku){
                console.log("I found an item with a matching sku : " + sku);
                let oldQuanity = this.ss.getItem(sku);
                console.log("oldVal is equal to " + oldQuanity);
                this.ss.setItem(sku, parseInt(oldQuanity) + 1);
                console.log("I just set the value to: " + this.ss.getItem(sku));
                numMatches = 1;
                //break;
            }
            
        }
        if(numMatches == 0){
                console.log("could not find sku in memory adding now")
                this.ss.setItem(sku,1);
            }
        

    }
    removeItemFromCart(sku){
        /*
        let remove = document.getElementByClassName('remove');
        let removeID = remove.getAttribute("id");
        remove.addEventListener("click",function(e){

             if(removeID === sku){
                
    
             }

    
        });




        */

    }

    updateQuantityofItemInCart(sky,qty){

    }

    clearCart(){
        // clear the entire cart
    }


}

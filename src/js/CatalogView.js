
// this class is responsible for displaying the product data...
// Perhaps in a carousel.
export default class CatalogView{
    constructor(){
        this.carousel = document.getElementsByClassName("owl-carousel");
        this.theApp = null;
    }
    initCarousel(){
        $(document).ready(function(){
                        $('.owl-carousel').owlCarousel({
                        rtl:true,
                        loop:true,
                        margin:10,
                        responsive:{
                            0:{items:1},
                            601:{items:2},
                            1050:{items:4}
                        }
                        })
                        });  
        /*
        You should initialize the flickicity carousel here.
        Right now this code just adds the div tags you would need to add
        inside the carousel 'container'.
        Note that this.carousel refers to the div by its class attribute.
        Since more than one tag can belong to the same class,
        you either have to give the carousel tag an id as well...or
        refer to the carousel div tag as this.carousel[0] using bracket
        notation (since classes mean their *could* be more than one tag
        belonging to that class) - see line 88 below.
         */
        
    }
    onClickCartButton(theApp){
        return function(e){
            console.log(e.target.getAttribute("data-sku"));
            let theSku = e.target.getAttribute("data-sku");
            theApp.shoppingCart.addItemToCart(theSku);
        }
    }
    

    addProductsToCarousel(products,theApp){
        this.theApp = theApp;
        if (products === undefined || products == null){
            return ; // do not do anything! there is no data
        }
        /* the loop creates all the elements for each item in the carousel.
         * it recreates the following structure
        * */
        for (let p=0; p<products.length; p++){
            let product = products[p];
            console.log(product);
            // each product is a product object
            // use it to create the element
            // create the DIV tag with class 'product-wrapper'
            let newDiv = document.createElement("div");
            newDiv.setAttribute("class","product-wrapper");
            // create a new IMG tag. Suggest to add data-sku attribute here too
            // so that if you 'click' on the image, it would pop up a quick-view
            // window and you can use the sku.
            let newImg = document.createElement("img");
            newImg.setAttribute("class","product-image");
            newImg.setAttribute("src", product.image);
            newImg.setAttribute("alt", `${product.name}`); // this works too
            newImg.setAttribute("data-sku",product.sku);
            // create manufacture name
            let newManufPara = document.createElement("p");
            newManufPara.setAttribute("class","product-manufacture");
            let newManufTextNode = document.createTextNode(product.manufacturer);
            newManufPara.appendChild(newManufTextNode);
            // create a new Paragraph to show a description
            let newPara = document.createElement("p");
            newPara.setAttribute("class","product-type");
            let newParaTextNode = document.createTextNode(product.longDescription);
            newPara.appendChild(newParaTextNode);
            // create a new H3 tag to show the name
            let newH3Tag = document.createElement("h3");
            let newH3TagTextNode = document.createTextNode(product.name);
            newH3Tag.appendChild(newH3TagTextNode);
            //<h3>Dell Inspirion 12" blah blah</h3>
            let newPricePara = document.createElement("p");
            newPricePara.setAttribute("class","price");
            let newPriceParaTextNode = document.createTextNode("$" + product.regularPrice); // 299.99
            newPricePara.appendChild(newPriceParaTextNode);
            /* you will need similar code to create
            an add to cart and a quick view button
            remember that each button you create should have
            a data-sku attribute that corresponds to the sku
            of each product.
            */
            let quickViewButton = document.createElement("button");
            quickViewButton.setAttribute("class","quick-view-btn");
            quickViewButton.setAttribute("id",`qv_${product.sku}`);
            quickViewButton.setAttribute("data-sku",product.sku);
            quickViewButton.setAttribute("type","button");
            let quickViewTextNode = document.createTextNode("Quick View");
            quickViewButton.appendChild(quickViewTextNode);
            let addToCartButton = document.createElement("button");
            addToCartButton.setAttribute("class","add-to-cart-btn");
            addToCartButton.setAttribute("id",`cart_${product.sku}`);
            addToCartButton.setAttribute("data-sku",product.sku);
            addToCartButton.setAttribute("type","button");
            let addCartTextNode = document.createTextNode("Add To Cart");
            addToCartButton.appendChild(addCartTextNode);
            addToCartButton.addEventListener("click",this.onClickCartButton(this.theApp),false);
            newDiv.appendChild(newImg);
            newDiv.appendChild(newManufPara);
            newDiv.appendChild(newPara);
            newDiv.appendChild(newH3Tag);
            newDiv.appendChild(newPricePara);
            newDiv.appendChild(quickViewButton); // added new quickView Button
            newDiv.appendChild(addToCartButton); // added new add To Cart Button
         
            this.carousel[0].appendChild(newDiv);
        }
        this.initCarousel();
    }
}
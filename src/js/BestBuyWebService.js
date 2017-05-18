
export default class BestBuyWebService{

    constructor(){
        this.url ="";
        this.apiKey = "";
        this.productData = null;
        this.products = null;
    }


    getData(theApp){
        // theApp is a reference to the main app
        // we can pass information to it, including data
        // that is returned from this service

        let serviceChannel = new XMLHttpRequest();
        let url = this.url;

        /*
        // *** To solve the issue of passing the data back to the main app...
        // *** and eventually, to catalogView
        // *** You could the addEventListener to call
        // *** a different function which will have both
        // *** the event object and dataPlaceHolder as parameters
        // *** see http://bit.ly/js-passmoreargsevent
         */

        serviceChannel.addEventListener("readystatechange",this.resultsPreprocessor(theApp),false)
        //add event listener takes 3 parameters 1st is the name of event , 2nd is the function that
        // is executed after the event happens, the third parameter (usually always false) means
        // that once the event is "handled" or "processed", stop.
        serviceChannel.open("GET",url,true);
        serviceChannel.send();
    }

    resultsPreprocessor(theApp){
        /*the addEventListener function near line 29 requires a proper function (an event handler)
         to be returned so we can create one to be returned.
        */
        let thisService = this; // a reference to the instance created from this class
        let eventHandler = function(e){
            thisService.results(e,theApp)
        };
        return eventHandler
    };

    results(e,theApp){

        if (e.target.readyState == 4 && e.target.status == 200){
            // assign this instance's productData to be the responseText
            this.productData = e.target.responseText;
            // assign the app's productData to be the responseText too
            theApp.productData = e.target.responseText;
            // tell the app to prepare the catalog
            // there is another way to do it, with custom
            // events. but this will work for now.
            theApp.prepCatalog();
            // console.log(evt.target.responseText);
            // return evt.target.responseText;
        }
    }

    getProducts(){
        // this method explicity gets the products property
        // from the JSON object. it assumes you have the JSON data
        if(this.productData!=null){
           let jsonData = JSON.parse(this.productData);
           this.products = jsonData.products;
           return this.products;
        }

        return; // if we have no data, return nothing
    }
}

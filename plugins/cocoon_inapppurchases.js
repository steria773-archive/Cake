//Written By Rabia Alhaffar In 13/December/2019
var IAP = Cocoon.InApp;
var Product = IAP.Product;
var ProductID = IAP.Product.productId;
var ProductTitle = IAP.Product.title;
var ProductPrice = IAP.Product.price;
var ProductLocalizedPrice = IAP.Product.localizedPrice;
function InitializeIAP()
{
IAP.initialize({});	
}
function FetchProducts(id)
{
IAP.fetchProducts(id, function(products, error)
{
   if(error){
       console.log("Error: " + error);
   }
   else {
       var next = [];
       for (var i = 0; i < products.length; ++i) {
           var product = products[i];
           console.log(product);
       }
   } 
});   	
}
function CanPurchase()
{
if(IAP.canPurchase()) { return true; }	
else { return false; }
}
function Purchase(id,quantity)
{
IAP.purchase(id,quantity);	
}
function Purchased(id)
{
if(IAP.isPurchased(id)) { return true; }
else { return false; }	
}
function ResetPurchases()
{
IAP.restorePurchases();	
}
function GetProducts()
{
IAP.getProducts();	
}
function EndPurchase(transactionId)
{
IAP.finishPurchase(transactionId);	
}
function ConsumeProducts(id,quantity)
{
IAP.consume(id,quantity);	
}
function ProductAvailableQuantity(id)
{
console.log(IAP.stockOfProduct(id));	
}
function SetValidationHandler()
{
IAP.setLudeiServerValidationHandler();	
}
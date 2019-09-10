var quotes
var categories

function QuoteList() {
    getCategories();
   
}

function getCategories() {
    var divCategories = document.getElementById("container");

    var ajax = new CategoryAjax(divCategories);
    ajax.getCategoriesForTabs(function(response){
        
        categories = response
        for(i=0; i<categories.length; i++) {
            var div = document.getElementById( categories[i].id );
        

            var ajax = new AllQuotesAjax(div, categories[i].id);
            ajax.getQuotes(function(response){
                guotes = response
            })
        }
    })
}

function deleteQuote(id) { 
    var allQuotesAjax = new AllQuotesAjax();
    var user = JSON.parse(sessionStorage.getItem("user"));
    allQuotesAjax.deleteQuote(id, user.access_token, function() {
        window.location.reload(false); 
    });
} 
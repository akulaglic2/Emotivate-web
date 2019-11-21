var AllQuotesAjax = (function () {
    var constructor = function (divContent, category_id) {

        return {
            deleteQuote: function (id, access_token, callback) {
                var doc;
                var result = confirm("Are you sure you want to delete this quote?");
                if (result == true) {
                    var ajax = new XMLHttpRequest();
                    ajax.onreadystatechange = function () {

                        if (ajax.readyState == 4 && ajax.status == 200) {
                            callback()
                        }
                    }

                    ajax.open("DELETE", BASE_URL+"/quotes/" + id, true);
                    ajax.setRequestHeader("Authorization", access_token)
                    ajax.setRequestHeader("Accept", "application/json")
                    ajax.setRequestHeader("Content-Type", "application/json")
                    ajax.send();
                } 

            },
            getQuotes: function (callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    var string = "";
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        if (ajax.response.length == 0) return;
                        var jsonList = JSON.parse(ajax.response).quotes
                        string += "<div class='container1'><div class='list-group'>";

                        for (var i = 0; i < jsonList.length; i++) {
                            string += "<a href='#' class='list-group-item'><p class='quotes'>" + jsonList[i].description + "</p>";
                            string += "<button type='button' class='x' aria-label='Close' onclick='deleteQuote(" + jsonList[i].id + ")' ><span>x</span></button></a>";
                        }
                        string += "</div></div> "
                        divContent.innerHTML = string;
                        callback(jsonList)
                    }
                }
                ajax.open("GET", BASE_URL+"/quotes?category_id=" + category_id, true);
                ajax.setRequestHeader("Content-Type", "application/json")
                ajax.setRequestHeader("Accept", "application/json")
                ajax.send();
            }
        }
    }
    return constructor;
}());

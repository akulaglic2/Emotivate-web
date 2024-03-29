var QuoteAjax = (function () {
    var constructor = function () {
        return {

            createQuote: function (idAuthor, idCategory, description, access_token, callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {// Anonimna funkcija
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        callback();
                    }
                }
                var json = {
                    description: description,
                    author_id: idAuthor,
                    category_id: idCategory
                };

                ajax.open("POST", BASE_URL+"/quotes", true);
                ajax.setRequestHeader("Content-Type", "application/json")
                ajax.setRequestHeader("Accept", "application/json")
                ajax.setRequestHeader("Authorization", access_token)
                ajax.send(JSON.stringify(json));
            }
        }

    }
    return constructor;
}());

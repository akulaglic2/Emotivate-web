var AuthorAjax = (function () {
    var constructor = function (divContent) {
        return {

            getAuthors: function (callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    var string = "";
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        var jsonResponse= JSON.parse(ajax.response)
                        if (jsonResponse.authors == 0) return;
                        string += "<select id='spinnerAuthors' >";
                        string += "<option value='NONE'>NONE</option>"

                        for (var i = 0; i < jsonResponse.authors; i++)
                            string += "<option value=" + i + ">" +
                                     jsonResponse.authors[i].name + "</option>";

                        divContent.innerHTML = string;
                        callback(jsonResponse.authors)
                    }
                }

                ajax.open("GET", BASE_URL+"/authors", true);
                ajax.send();
            },

            createAuthor: function (name, description, access_token, callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        callback();
                    }
                }
                var json = {
                    name: name,
                    description : description
                };
                
                ajax.open("POST", BASE_URL+"/authors", true);
                ajax.setRequestHeader("Authorization", access_token)
                ajax.setRequestHeader("Accept", "application/json")
                ajax.setRequestHeader("Content-Type", "application/json")
                ajax.send(JSON.stringify(json));
            }
        }

    }
    return constructor;
}());

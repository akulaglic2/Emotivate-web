var AuthorAjax = (function () {
    var constructor = function (divContent) {
        return {

            getAuthors: function (callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    var string = "";
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        if (ajax.response.length == 0) return;
                        var jsonList = JSON.parse(ajax.response)
                        string += "<select id='spinnerAuthors' >";
                        string += "<option value='NONE'>NONE</option>"

                        for (var i = 0; i < jsonList.length; i++)
                            string += "<option value=" + i + ">" + jsonList[i].name + "</option>";

                        divContent.innerHTML = string;
                        callback(jsonList)
                    }
                }

                ajax.open("GET", "https://emotivate-node.herokuapp.com/authors", true);
                ajax.send();
            },

            createAuthor: function (name, access_token, callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        callback();
                    }
                }
                var json = {
                    name: name
                };
                
                ajax.open("POST", "https://emotivate-node.herokuapp.com/authors?access_token=" + access_token, true);
                ajax.setRequestHeader("Content-Type", "application/json");
                ajax.send(JSON.stringify(json));
            }
        }

    }
    return constructor;
}());

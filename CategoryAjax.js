var CategoryAjax = (function () {
    var constructor = function (divContent) {
        return {

            getCategories: function (callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    var string = "";

                    if (ajax.readyState == 4 && ajax.status == 200) {
                        if (ajax.response.length == 0) return;
                        var jsonList = JSON.parse(ajax.response)
                        string += "<select id='spinnerCategories'>";

                        for (var i = 0; i < jsonList.length; i++)
                            string += "<option value=" + i + ">" + jsonList[i].name + "</option>";

                        divContent.innerHTML = string;
                        callback(jsonList)
                    }

                }

                ajax.open("GET", BASE_URL+"/categories", true);
                ajax.send();
            },
            getCategoriesForTabs: function (callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    var string = "";


                    if (ajax.readyState == 4 && ajax.status == 200) {
                        if (ajax.response.length == 0) return;
                        var jsonList = JSON.parse(ajax.response)
                        string += "<ul class='nav nav-tabs'>";

                        for (var i = 0; i < jsonList.length; i++)
                            string += "<li><a data-toggle='tab' href='#" + jsonList[i].id + "'>" + jsonList[i].name + "</a></li>";

                        string += " </ul>";
                        string += "<div class='tab-content'>";

                        string += " <div id=" + jsonList[0].id + " class='tab-pane fade in active'></div>";
                        for (var i = 1; i < jsonList.length; i++)
                            string += " <div id=" + jsonList[i].id + " class='tab-pane fade'></div>";

                        string += "</div>"
                        divContent.innerHTML = string;
                        callback(jsonList)
                    }
                }

                ajax.open("GET", BASE_URL+"/categories", true);
                ajax.send();

            },
            createCategory: function (name, access_token, callback) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        callback();
                    }
                }
                var json = {
                    name: name
                };
                
                ajax.open("POST", BASE_URL+"/categories", true)
                ajax.setRequestHeader("Content-Type", "application/json")
                ajax.setRequestHeader("Accept", "application/json")
                ajax.setRequestHeader("Authorization", access_token)
                ajax.send(JSON.stringify(json));
            }
        }

    }
    return constructor;
}());

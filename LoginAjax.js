var LoginAjax = (function () {
    var constructor = function () {
        return {

            login: function (username, password, callback, callbackError) {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function () {
                    if (ajax.readyState == 4 && ajax.status == 200) {
                        var jsonResponse = JSON.parse(ajax.response)
                        callback(jsonResponse);
                    }
                    if (ajax.readyState == 4 && ajax.status != 200) {
                        callbackError();
                    }
                }
                var json = {
                    username: username,
                    password: password
                };

                ajax.open("POST", BASE_URL+"/login", true);
                ajax.setRequestHeader("Content-Type", "application/json")
                ajax.setRequestHeader("Accept", "application/json")
                ajax.send(JSON.stringify(json));
            }
        }

    }
    return constructor;
}());

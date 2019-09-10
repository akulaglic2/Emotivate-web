function Login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var ajax = new LoginAjax();
    ajax.login(username, password, function (response) {
        sessionStorage.setItem("user", JSON.stringify(response))
        location.href = "AllQuotes.html";
    }, function () {
        confirm("Incorrect username or password!")
    })

}

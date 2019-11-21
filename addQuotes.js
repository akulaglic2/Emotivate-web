var authors
var categories


function getAll() {
    getAuthors();
    getCategories();



}

function getAuthors() {
    var divAuthors = document.getElementById("divAuthors");

    var ajax = new AuthorAjax(divAuthors);
    ajax.getAuthors(function (response) {
        authors = response
    })
}

function getCategories() {
    var divCategories = document.getElementById("divCategories");

    var ajax = new CategoryAjax(divCategories);
    ajax.getCategories(function (response) {
        categories = response
    })
}

function createQuote() {
    var ajax = new QuoteAjax();

    var spinnerCategory = document.getElementById("spinnerCategories")
    var selectedCategory = extractCategoryId(categories, spinnerCategory.options[spinnerCategory.selectedIndex].text);

    var spinnerAuthor = document.getElementById("spinnerAuthors")
    var selectedAuthor = extractCategoryId(authors, spinnerAuthor.options[spinnerAuthor.selectedIndex].text);

    var user = JSON.parse(sessionStorage.getItem("user"))

    var quoteDescription = document.getElementById("quoteDescription").value;
    ajax.createQuote(selectedAuthor, selectedCategory, quoteDescription, user.access_token, function () {
        document.getElementById("quoteDescription").value = "";
        alert("Successfully created quote!");
    })
}

function extractCategoryId(categories, categoryName) {
    for (i = 0; i < categories.length; i++) {
        if (categories[i].name == categoryName) return categories[i].id;
    }
}

function extractAuthorId(authors, authorName) {
    for (i = 0; i < authors.length; i++) {
        if (authors[i].name == authorName) return authors[i].id;
    }
    return null;
}

function createAuthor() {
    var ajax = new AuthorAjax();

    var newAuthor = document.getElementById("newAuthor").value;
    var newAuthorDescription = document.getElementById("newAuthorDescription").value
    var user = JSON.parse(sessionStorage.getItem("user"))
    ajax.createAuthor(newAuthor, newAuthorDescription, user.access_token, function () {
        document.getElementById("newAuthor").value = "";
        document.getElementById("newAuthorDescription").value = "";
        alert("Successfully created author!");
    })
}

function createCategory() {
    var ajax = new CategoryAjax();

    var newCategory = document.getElementById("newCategory").value;
    var user = JSON.parse(sessionStorage.getItem("user"));
    ajax.createCategory(newCategory, user.access_token, function () {
        document.getElementById("newCategory").value = "";
        alert("Successfully created category!");
    })
}

function changePage() {
    window.location = 'http://localhost/index.html#?options=go_here';
}

function deleteSession() {
    sessionStorage.removeItem("user");
}
var app = {
    init: function () {
        // Find the path to query (avoid strict-origin-when-cross-origin)
        let origin = window.location.origin;
        let pathname = window.location.pathname;
        // Remove index.php from pathname
        pathname = pathname.substring(0, pathname.lastIndexOf("/"));
        // DEV ONLY: use mockups API
        pathname = pathname.concat("/mock");
        console.log("Pathname: "+pathname);
        $.getJSON(`${origin}${pathname}/users.json`)
            .done(app.writeUsers)
            .fail(app.onFail);
    },
    onFail: function (error) {
        console.log("errore nella lettura del file json");
        console.log(error);
    },
    writeUsers: function (jsonData) {
        console.log(jsonData);
        for (user of jsonData) {
            $("ul").append(`<li>${user.user_id}: <span class="cool">${user.name}</span></li>`);
        }
    }
}


$(document).ready(app.init);
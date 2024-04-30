window.onload = () => {
    document.getElementById("search").addEventListener("click", () => {
        let host = document.getElementById("host").value;
        let emoji_name = document.getElementById("emoji_name").value;

        window.api.request(host, emoji_name);
    });

    window.api.on_res((data) => {
        let info = document.getElementById("info");
        let text =
            'url : <a href="' +
            data.url +
            '">' +
            data.url +
            "<a><br>\nname : " +
            data.name +
            "<br>\ncategory : " +
            data.category +
            "<br>\naliases : " +
            data.aliases +
            "<br>\nlicense : " +
            data.license +
            "<br>\nisSensitive : " +
            data.isSensitive +
            "<br>\nlocalOnly : " +
            data.localOnly +
            "<br>\n";

        info.innerHTML = text;

        let emoji_view = document.getElementById("emoji_view");
        emoji_view.src = data.url;
    });

    window.api.on_res_err((data) => {
        let info = document.getElementById("info");
        let text = "error <br>\n" + "<br>\n " + JSON.stringify(data) + "<br>\n";
        info.innerHTML = text;
    });

    window.api.on_err(() => {
        let info = document.getElementById("info");
        let text = "error <br>\n";
        info.innerHTML = text;
    });
};

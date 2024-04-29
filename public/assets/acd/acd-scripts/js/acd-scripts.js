var subURL = window.location.protocol + "//" + window.location.host;
if(subURL == "http://localhost:3007")	
{	
    subURL = "http://localhost:3000";
}else if(subURL == "https://blog.dev.techjockey.com")
{
    subURL = "https://dev.techjockey.com";
}

var url = subURL+"/assets/acd/acd-scripts/";
!(function (e, t) {
    if (!document.getElementById(e)) {
        let a = document.getElementById("tj-acd-scripts-loader").src,
            n = new URLSearchParams(a.substring(a.indexOf("?") + 1)),
            r = n.get("i"),
            d = n.get("e"),
            o = n.get("d");
        var c = document.createElement("script");
        (c.src = url + "js/acd-func.js?version=6.0&o=" + t + "&i=" + r + "&e=" + d + "&d=" + o), (c.type = "text/javascript"), (c.id = e);
        var s = document.getElementById("tj-acd-scripts-loader");
        s.parentNode.insertBefore(c, s);
    }
})("tj-acd-func", subURL),
(function (e, t) {
    if (!document.getElementById(e)) {
        var c = document.createElement("script");
        (c.src = url + "js/datepicker-full.min.js"), (c.type = "text/javascript"), (c.id = e);
        var s = document.getElementById("tj-acd-scripts-loader");
        s.parentNode.insertBefore(c, s);
    }
})("tj-acd-date");

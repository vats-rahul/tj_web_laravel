const tjSpinWheelSubURL = window.location.protocol + "//" + window.location.host;
var url = tjSpinWheelSubURL+"/assets/acd/gamification/";
!(function (e, t) {
    if (!document.getElementById(e)) {
        let a = document.getElementById("tj-gamification-acd-scripts-loader").src,
            n = new URLSearchParams(a.substring(a.indexOf("?") + 1)),
            r = n.get("i"),
            d = n.get("e"),
            o = n.get("d");
        var c = document.createElement("script");
        (c.src = url + "js/acd-func.js?version=5.7&o=" + t + "&i=" + r + "&e=" + d + "&d=" + o), (c.type = "text/javascript"), (c.id = e);
        var s = document.getElementById("tj-gamification-acd-scripts-loader");
        s.parentNode.insertBefore(c, s);
    }
})("tj-gamification-acd-func", tjSpinWheelSubURL);



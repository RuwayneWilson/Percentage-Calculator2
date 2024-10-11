( () => {
    "use strict";
    function e(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    (function() {
        document.addEventListener("DOMContentLoaded", (function() {
            Array.prototype.slice.call(document.querySelectorAll("input[type=submit]")).forEach((function(t) {
                t.onclick = function(t) {
                    t.preventDefault(),
                    function(t) {
                        var n = t.querySelectorAll("input[type=text]")
                          , a = n[0].value.replace(",", ".")
                          , r = n[1].value.replace(",", ".")
                          , c = 0
                          , u = !1;
                        if (n[0].style.background = "#fff",
                        n[1].style.background = "#fff",
                        n[2].value = "",
                        e(a) || (n[0].style.background = "#fee",
                        u = !0),
                        e(r) || (n[1].style.background = "#fee",
                        u = !0),
                        u)
                            return !1;
                        switch (t.getAttribute("id")) {
                        case "f1":
                            c = a / 100 * r;
                            break;
                        case "f2":
                            c = a / r * 100;
                            break;
                        case "f3":
                            c = (r - a) / a * 100
                        }
                        n[2].value = c
                    }(this.parentNode.parentNode)
                }
            }
            ))
        }
        ), !1)
    }
    ).call(void 0)
}
)();
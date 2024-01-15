(function () {
    var uri = decodeURIComponent(window.location.href);
    var url = uri.split('?');
    if (url.length > 1) {
        var parameters = url[1].split('&');
        if (parameters.length > 0) {
            //create param dictionary to allow out of order query params
            var v = {}
            parameters.forEach(function (param) {
                var p = param.split('=');
                v[p[0]] = p[1];
            });

            //PageView
            let burl = new URL(window.location.href);
            let domain = burl.host;
            //Lead Fire
            var ctaLinks = document.getElementsByTagName("a");
            for (var i = 0; i < ctaLinks.length; i++) {
                ctaLinks[i].addEventListener(
                    "click", function (e) {
                        e.preventDefault();
                        var iframe = document.createElement("iframe");
                        iframe.setAttribute("src", `https://${domain}/thank-you/?fbclid=${v["fbclid"]}`);
                        iframe.style.display = "none";
                        iframe.height = "1";
                        iframe.width = "1";
                        iframe.style.border = "0";
                        iframe.style.overflow = "hidden";
                        document.body.appendChild(iframe);
                        setTimeout(function () {
                            window.location = `https://m.me/newbrightfuturehelp?ref=w19309995`;
                        }, 1000);
                    },
                    false
                );
            }
        }
    }

})();
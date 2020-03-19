var helper = {
    whatOS: function () {
        if (navigator.platform.indexOf('Mac') > -1) {
            return "mac";
        }

        if (navigator.platform.indexOf('Win') > -1) {
            return "windows";
        }
    },
    whatBrowser: function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        var trident = ua.indexOf('Trident/');

        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            return "firefox";
        }

        if (navigator.vendor && navigator.vendor.indexOf('Apple') > -1) {
            return "safari";
        }

        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            return "chrome";
        }

        if (trident > -1) {
            return "ie11";
        }
    },
    whatMobile: {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        All: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera());
        }
    },
    crossCss: function (idName, styling, os, browser) {
        var ele = document.getElementById(idName);
        for (var property in styling) {
            if (helper.whatOS() == os.toLowerCase()) {
                if (helper.whatBrowser() == browser.toLowerCase()) {
                    ele.style[property] = styling[property];
                }
            }
        }
    },
    inlineCSS: function (idName, styling) {
        var ele = document.getElementById(idName);
        for (var property in styling) {
            ele.style[property] = styling[property];
        }
    },
    ellipser: function (idName, numberOfLines, limit, styling, isEllipsis) {
        var docId = docElement.id;
        var eleId = document.getElementById(idName);
        var eleHeight = eleId.clientHeight;
        var eleFontSize = parseInt(window.getComputedStyle(eleId, null).getPropertyValue('font-size'));
        var eleLineheight = parseInt(window.getComputedStyle(eleId, null).getPropertyValue('line-height'));
        var isT;
        var lines = Math.ceil(eleHeight / eleLineheight);
        if (tt == "") {
            isT = false;
        } else {
            isT = isEllipsis;
        }
        if (lines > numberOfLines) {
            for (var property in styling) {
                eleId.style[property] = styling[property];
            }

            if (isT == true) {
                if (t.innerHTML.length > limit) {
                    tl = limit - 3;
                    t.innerHTML = t.innerHTML.substr(0, tl).trim() + "...";
                }
            }
        }

        return lines;
    },
    resizeText: function (idName, fontLimit) {
        var e = document.getElementById(idName);
        var childHeight = parseInt(e.clientHeight),
            parentHeight = parseInt(e.parentElement.style.height);

        if (isNaN(parentHeight)) {
            parentHeight = parseInt(e.parentElement.clientHeight);
        }

        while (childHeight > parentHeight) {
            childFont = parseFloat(window.getComputedStyle(e, null).getPropertyValue("font-size"));

            e.style.fontSize = (childFont - 1) + "px";
            e.style.lineHeight = (childFont - 1) + "px";

            childHeight = e.clientHeight;

            if (childFont <= fontLimit) {
                break;
            }
        }
    },
    setXY: function (idName, IAvar, delimiter) {
        var el = document.getElementById(idName),
            iaVar = IAvar;
        el.style.top = iavar.split(delimiter)[1] + "px";
        el.style.left = iavar.split(delimiter)[0] + "px";
    },
    toMatrix: function (eleId, tranStyle, time) {
        if (time == undefined || time == null || time == NaN) {
            var timer = 0;
        } else {
            var timer = time;
        }

        var el = document.getElementById(eleId);
        var els = document.getElementById("an");
        for (var property in tranStyle) {
            els.style[property] = tranStyle[property];
        }
        var st = window.getComputedStyle(els, null);
        var tr = st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "fail...";
        setTimeout(function () {
            el.style.transform = tr;
        }, timer)
    },
    imageBlank: function (IAvar) {
        var iaVar = IAvar;
        if (iaVar.indexOf("blank.png") > -1) {
            return true;
        } else {
            return false;
        }
    },
    browserClass: function (idName, os, browser) {
        var ele = document.getElementById(idName);
        if (helper.whatOS() == os.toLowerCase()) {
            if (helper.whatBrowser() == browser.toLowerCase()) {
                var l = 0;
                ele.classList.add(idName + helper.whatOS() + helper.whatBrowser());
                for (i = 0; i < ele.getElementsByTagName("*").length; i++) {
                    if (ele.getElementsByTagName("*")[i].id == "" || ele.getElementsByTagName("*")[i].id == undefined || ele.getElementsByTagName("*")[i].id == null) {
                        ele.getElementsByTagName("*")[i].classList.add("ele" + (l++) + helper.whatOS() + helper.whatBrowser())
                    } else {
                        ele.getElementsByTagName("*")[i].classList.add(ele.getElementsByTagName("*")[i].id + helper.whatOS() + helper.whatBrowser())
                    }
                }
            }
        } else {
            ele.classList.add(idName + helper.whatOS() + helper.whatBrowser());
            for (i = 0; i < ele.getElementsByTagName("*").length; i++) {
                if (ele.getElementsByTagName("*")[i].id == "" || ele.getElementsByTagName("*")[i].id == undefined || ele.getElementsByTagName("*")[i].id == null) {
                    ele.getElementsByTagName("*")[i].classList.add("ele" + (l++) + helper.whatOS() + helper.whatBrowser())
                } else {
                    ele.getElementsByTagName("*")[i].classList.add(ele.getElementsByTagName("*")[i].id + helper.whatOS() + helper.whatBrowser())
                }
            }
        }
    },
    el: function () {
        var an = document.createElement('div');
        an.id = "an";
        document.body.appendChild(an);
    }
}
helper.el();

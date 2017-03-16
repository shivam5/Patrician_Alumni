(function (c) {
    var k = function (i, j, k) {
            var a = c.extend({}, c.fn.fancyfolio.defaults, j),
                b = c(i),
                g = [],
                f = [],
                h = !1,
                l = function (c) {
                    var e = b.find("span.ff_left");
                    "u" == c ? e.animate({
                        bottom: 0
                    }, a.titleSlideTransitionUp) : h || e.animate({
                        bottom: "-" + e.outerHeight() + "px"
                    }, a.titleSlideTransitionDown)
                },
                m = function (d, e) {
                    d.stopPropagation();
                    var n = c(e);
                    b.find("span.ff_right").fadeOut(a.maximizeUIFadeTransition);
                    n.fadeOut(a.maximizeUIFadeTransition, function () {
                        b.animate({
                            top: g.top + "px",
                            left: g.left + "px",
                            width: f.width + "px",
                            height: f.height + "px"
                        }, a.maximizeTransitionClose, function () {
                            b.css("z-index", f.zindex);
                            h = !1;
                            var c = b.find("span.ff_left");
                            "0px" == c.css("bottom") && c.animate({
                                bottom: "-" + c.outerHeight() + "px"
                            }, a.titleSlideTransitionDown)
                        })
                    })
                },
                o = function () {
                    g = b.position();
                    f.width = b.width();
                    f.height = b.height();
                    f.zindex = b.css("z-index");
                    b.css("z-index", 1E3);
                    h = !0;
                    var d = b.find("img").outerHeight();
                    b.animate({
                        width: "100%",
                        left: 0,
                        top: "relative" == a.position ? g.top : "0",
                        height: d + "px"
                    }, a.maximizeTransitionOpen, function () {
                        var c = b.find("span.ff_close");
                        c.css({
                            top: 0,
                            right: 0,
                            marginTop: "5px",
                            marginRight: "5px"
                        });
                        c.fadeIn(a.maximizeUIFadeTransition);
                        b.find("span.ff_right").fadeIn(a.maximizeUIFadeTransition)
                    });
                    d = "relative" == a.position ? b.offset().top : b.parent().parent().offset().top;
                    a.scrollToPosition && c("html, body").animate({
                        scrollTop: d - a.maximizePaddingTop
                    }, a.maximizeTransitionOpen)
                };
            (function () {
                var d = "padding: " + a.titleSlideLinkPaddingTop + "px " + a.titleSlideLinkPaddingRight + "px " + a.titleSlideLinkPaddingBottom + "px " + a.titleSlideLinkPaddingLeft + "px;";
                b.prepend('<span style="' + ("padding: " + a.titleSlidePaddingTop + "px " + a.titleSlidePaddingRight + "px " + a.titleSlidePaddingBottom + "px " + a.titleSlidePaddingLeft + "px; height: " + a.titleSlideHeight + "px; bottom: -" + (a.titleSlideHeight + a.titleSlidePaddingTop + a.titleSlidePaddingBottom) + "px;") + '" class="ff_left">' + b.find("img").attr("title") + '</span><span class="ff_close"></span><span class="ff_right" style="' + d + " height: " + a.titleSlideHeight + 'px;"><a href="' + b.find("a").attr("href") + '" target="' + a.linkTarget + '">' + b.find("a").attr("title") + "</a></span>");
                b.prepend("");
                b.find("span.ff_close").click(function (a) {
                    m(a, this)
                });
                b.find("span.ff_right").click(function (c) {
                    c.stopPropagation();
                    a.autoCloseOnLinkOpen && m(c, b.find("span.ff_close"))
                });
                if (b.index() + 1 == k) {
                    var d = b.parent().parent(),
                        e = b.outerHeight(!0);
                    c.browser.msie && 7 == parseInt(c.browser.version, 10) && d.css("margin-bottom", e + "px");
                    parentOffset = d.offset();
                    d.css("height", d.outerHeight());
                    c(d.find("li").get().reverse()).each(function () {
                        var a = c(this).position(),
                            b = c(this).offset(),
                            d = [];
                        c.browser.msie && 7 == parseInt(c.browser.version, 10) ? (d.top = b.top - parentOffset.top + e, d.left = b.left - parentOffset.left) : (d.top = a.top, d.left = a.left);
                        c(this).css({
                            position: "absolute",
                            top: d.top + "px",
                            left: d.left + "px"
                        })
                    })
                }
            })(b);
            b.bind({
                mouseenter: function () {
                    l("u")
                },
                mouseleave: function () {
                    l("d")
                },
                click: function (a) {
                    a.preventDefault();
                    h || o()
                }
            })
        };
    c.fn.fancyfolio = function (i) {
        var j = c(this).find("ul li").length;
        c(this).find("ul li").each(function () {
            new k(this, i, j)
        })
    };
    c.fn.fancyfolio.defaults = {
        titleSlideTransitionUp: 250,
        titleSlideTransitionDown: 250,
        titleSlideHeight: 25,
        titleSlidePaddingTop: 5,
        titleSlidePaddingRight: 0,
        titleSlidePaddingBottom: 0,
        titleSlidePaddingLeft: 10,
        titleSlideLinkPaddingTop: 5,
        titleSlideLinkPaddingRight: 10,
        titleSlideLinkPaddingBottom: 0,
        titleSlideLinkPaddingLeft: 0,
        maximizeTransitionOpen: 500,
        maximizeTransitionClose: 500,
        maximizePaddingTop: 20,
        maximizeUIFadeTransition: 250,
        position: "top",
        linkTarget: "_blank",
        autoCloseOnLinkOpen: !1,
        scrollToPosition: !0
    }
})(jQuery);
!(function ($) {
    function fnFormatResult(e, t, s) {
        return s.replace(reEscape, "\\$1"), e;
    }
    function Autocomplete(e, t) {
        (this.el = $(e)),
            this.el.attr("autocomplete", "off"),
            (this.suggestions = []),
            (this.data = []),
            (this.badQueries = []),
            (this.selectedIndex = -1),
            (this.currentValue = this.el.val()),
            (this.intervalId = 0),
            (this.cachedResponse = []),
            (this.onChangeInterval = null),
            (this.ignoreValueChange = !1),
            (this.serviceUrl = t.serviceUrl),
            (this.isLocal = !1),
            (this.customClass = t.customClass),
            (this.options = { autoSubmit: !1, minChars: 1, maxHeight: 300, deferRequestBy: 0, width: 0, highlight: !0, params: {}, fnFormatResult: fnFormatResult, delimiter: null, zIndex: 9999 }),
            this.initialize(),
            this.setOptions(t);
    }
    var reEscape = new RegExp("(\\" + ["/", "`", "'", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g");
    ($.fn.autocomplete = function (e) {
        return new Autocomplete(this.get(0) || $("<input />"), e);
    }),
        (Autocomplete.prototype = {
            killerFn: null,
            initialize: function () {
                var e, t, s;
                (e = this),
                    (s = "Autocomplete_" + (t = Math.floor(1048576 * Math.random()).toString(16))),
                    (this.killerFn = function (t) {
                        0 === $(t.target).parents(".autocomplete").length && (e.killSuggestions(), e.disableKillerFn());
                    }),
                    this.options.width || (this.options.width = this.el.width()),
                    (this.mainContainerId = "AutocompleteContainter_" + t),
                    $(
                        '<div id="' +
                            this.mainContainerId +
                            '" class="' +
                            this.customClass +
                            '" style="position:absolute;z-index:9999;"><div class="autocomplete-w1"><div class="autocomplete" id="' +
                            s +
                            '" style="display:none; width:300px;"></div></div></div>'
                    ).appendTo("body"),
                    (this.container = $("#" + s)),
                    this.fixPosition(),
                    window.opera
                        ? this.el.keypress(function (t) {
                              e.onKeyPress(t);
                          })
                        : this.el.keydown(function (t) {
                              e.onKeyPress(t);
                          }),
                    this.el.keyup(function (t) {
                        e.onKeyUp(t);
                    }),
                    this.el.blur(function () {
                        e.enableKillerFn();
                    }),
                    this.el.click(function () {
                        e.onClick();
                    }),
                    this.el.focus(function () {
                        e.fixPosition();
                    });
            },
            setOptions: function (e) {
                var t = this.options;
                $.extend(t, e),
                    t.lookup && ((this.isLocal = !0), $.isArray(t.lookup) && (t.lookup = { suggestions: t.lookup, data: [] })),
                    $("#" + this.mainContainerId).css({ zIndex: t.zIndex }),
                    this.container.css({ maxHeight: t.maxHeight + "px", width: t.width });
            },
            clearCache: function () {
                (this.cachedResponse = []), (this.badQueries = []);
            },
            disable: function () {
                this.disabled = !0;
            },
            enable: function () {
                this.disabled = !1;
            },
            fixPosition: function () {
                var e = this.el.offset();
                $("#" + this.mainContainerId).css({ top: e.top + this.el.innerHeight() + "px", left: e.left + "px" });
            },
            enableKillerFn: function () {
                $(document).bind("click", this.killerFn);
            },
            disableKillerFn: function () {
                $(document).unbind("click", this.killerFn);
            },
            killSuggestions: function () {
                var e = this;
                this.stopKillSuggestions(),
                    (this.intervalId = window.setInterval(function () {
                        e.hide(), e.stopKillSuggestions();
                    }, 300));
            },
            stopKillSuggestions: function () {
                window.clearInterval(this.intervalId);
            },
            onKeyPress: function (e) {
                if (!this.disabled && this.enabled) {
                    switch (e.keyCode) {
                        case 27:
                            this.el.val(this.currentValue), this.hide();
                            break;
                        case 9:
                        case 13:
                            return -1 === this.selectedIndex ? void this.hide() : void 0;
                        case 38:
                            this.moveUp();
                            break;
                        case 40:
                            this.moveDown();
                            break;
                        default:
                            return;
                    }
                    e.stopImmediatePropagation(), e.preventDefault();
                }
            },
            onKeyUp: function (e) {
                if (!this.disabled) {
                    switch (e.keyCode) {
                        case 38:
                        case 40:
                            return;
                    }
                    if ((clearInterval(this.onChangeInterval), this.currentValue !== this.el.val()))
                        if (this.options.deferRequestBy > 0) {
                            var t = this;
                            this.onChangeInterval = setInterval(function () {
                                t.onValueChange();
                            }, this.options.deferRequestBy);
                        } else this.onValueChange();
                }
            },
            onValueChange: function () {
                clearInterval(this.onChangeInterval), (this.currentValue = this.el.val());
                var e = this.getQuery(this.currentValue);
                return (this.selectedIndex = -1), this.ignoreValueChange ? void (this.ignoreValueChange = !1) : void this.getSuggestions(e);
            },
            onClick: function () {
                this.getQuery(this.currentValue);
                this.onValueChange();
            },
            getQuery: function (e) {
                var t, s;
                return (t = this.options.delimiter) ? ((s = e.split(t)), $.trim(s[s.length - 1])) : $.trim(e);
            },
            getSuggestionsLocal: function (e) {
                var t, s, i, n, o;
                for (i = (s = this.options.lookup).suggestions.length, t = { suggestions: [], data: [] }, e = e.toLowerCase(), o = 0; i > o; o++)
                    0 === (n = s.suggestions[o]).toLowerCase().indexOf(e) && (t.suggestions.push(n), t.data.push(s.data[o]));
                return t;
            },
            getSuggestions: function (e) {
                var t, s;
                (t = this.isLocal ? this.getSuggestionsLocal(e) : this.cachedResponse[e]) && $.isArray(t.suggestions)
                    ? ((this.suggestions = t.suggestions), (this.data = t.data), this.suggest())
                    : this.isBadQuery(e) ||
                      (((s = this).options.params.query = e),
                      $.get(
                          this.serviceUrl,
                          s.options.params,
                          function (e) {
                              s.processResponse(e);
                          },
                          "text"
                      ));
            },
            isBadQuery: function (e) {
                for (var t = this.badQueries.length; t--; ) if (0 === e.indexOf(this.badQueries[t])) return !0;
                return !1;
            },
            hide: function () {
                (this.enabled = !1), (this.selectedIndex = -1), this.container.hide();
            },
            suggest: function () {
                if (0 !== this.suggestions.length) {
                    var e, t, s, i, n, o, a, l, h;
                    for (
                        e = this,
                            t = this.suggestions.length,
                            i = this.options.fnFormatResult,
                            n = this.getQuery(this.currentValue),
                            l = function (t) {
                                return function () {
                                    e.activate(t);
                                };
                            },
                            h = function (t) {
                                return function () {
                                    e.select(t);
                                };
                            },
                            this.container.hide().empty(),
                            o = 0;
                        t > o;
                        o++
                    )
                        (a = this.suggestions[o]),
                            (s = $((e.selectedIndex === o ? '<div class="selected"' : "<div") + ' title="' + $(a).text() + '">' + i(a, this.data[o], n) + "</div>")).mouseover(l(o)),
                            s.click(h(o)),
                            this.container.append(s);
                    (this.enabled = !0), this.container.show();
                } else this.hide();
            },
            processResponse: function (text) {
                var response;
                try {
                    response = eval("(" + text + ")");
                } catch (e) {
                    return;
                }
                $.isArray(response.data) || (response.data = []),
                    this.options.noCache || ((this.cachedResponse[response.query] = response), 0 === response.suggestions.length && this.badQueries.push(response.query)),
                    response.query === this.getQuery(this.currentValue) && ((this.suggestions = response.suggestions), (this.data = response.data), this.suggest());
            },
            activate: function (e) {
                var t, s;
                return (
                    (t = this.container.children()),
                    -1 !== this.selectedIndex && t.length > this.selectedIndex && $(t.get(this.selectedIndex)).removeClass(),
                    (this.selectedIndex = e),
                    -1 !== this.selectedIndex && t.length > this.selectedIndex && ((s = t.get(this.selectedIndex)), $(s).addClass("selected")),
                    s
                );
            },
            deactivate: function (e, t) {
                (e.className = ""), this.selectedIndex === t && (this.selectedIndex = -1);
            },
            select: function (e) {
                var t;
                this.suggestions[e] && (this.options.autoSubmit && (t = this.el.parents("form")).length > 0 && t.get(0).submit(), (this.ignoreValueChange = !0), this.hide(), this.onSelect(e));
            },
            moveUp: function () {
                return -1 !== this.selectedIndex
                    ? 0 === this.selectedIndex
                        ? ((this.container.children().get(0).className = ""), (this.selectedIndex = -1), void this.el.val(this.currentValue))
                        : void this.adjustScroll(this.selectedIndex - 1)
                    : void 0;
            },
            moveDown: function () {
                this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1);
            },
            adjustScroll: function (e) {
                var t, s, i;
                (t = this.activate(e).offsetTop),
                    (i = (s = this.container.scrollTop()) + this.options.maxHeight - 25),
                    s > t ? this.container.scrollTop(t) : t > i && this.container.scrollTop(t - this.options.maxHeight + 25),
                    this.el.val($(this.getValue(this.suggestions[e])).attr("rel"));
            },
            onSelect: function (e) {
                var t, s, i, n;
                (s = (t = this).options.onSelect), (i = t.suggestions[e]), (n = t.data[e]), $.isFunction(s) && s(i, n, t.data, t.el);
            },
            getValue: function (e) {
                var t, s, i;
                return this, (t = this.options.delimiter) ? (1 === (i = (s = this.currentValue).split(t)).length ? e : s.substr(0, s.length - i[i.length - 1].length) + e) : e;
            },
        });
})(jQuery);

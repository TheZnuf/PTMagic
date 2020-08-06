define("ace/theme/ptmagic", ["require", "exports", "module", "ace/lib/dom"],
    function (e, t, n) {
        t.isDark = !0,
        t.cssClass = "ace-ptmagic",
        t.cssText = "\
        .ace-ptmagic .ace_gutter {background: #566776;color: #dddddd}\
        .ace-ptmagic .ace_constant.ace_language.ace_boolean {color: #CCCCCC}\
        .ace-ptmagic .ace_print-margin {width: 1px;background: #414d59}\
        .ace-ptmagic {background-color: #414d59;color: #8F938F}\
        .ace-ptmagic .ace_cursor {color: #A7A7A7}\
        .ace-ptmagic .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}\
        .ace-ptmagic.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #414d59;}\
        .ace-ptmagic .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}\
        .ace-ptmagic .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}\
        .ace-ptmagic .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}\
        .ace-ptmagic .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}\
        .ace-ptmagic .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}\
        .ace-ptmagic .ace_invisible {color: rgba(255, 255, 255, 0.25)}\
        .ace-ptmagic .ace_keyword,.ace-ptmagic .ace_meta {color: #757aD8}\
        .ace-ptmagic .ace_constant,.ace-ptmagic .ace_constant.ace_character,.ace-ptmagic .ace_constant.ace_character.ace_escape,.ace-ptmagic .ace_constant.ace_other {color: #4FB7C5}\
        .ace-ptmagic .ace_keyword.ace_operator {color: #797878}\.ace-ptmagic .ace_constant.ace_character {color: #AFA472}\
        .ace-ptmagic .ace_constant.ace_language {color: #DE8E30}\.ace-ptmagic .ace_constant.ace_numeric {color: #CCCCCC}\
        .ace-ptmagic .ace_invalid,.ace-ptmagic .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}\
        .ace-ptmagic .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}\
        .ace-ptmagic .ace_fold {background-color: #757aD8;border-color: #8F938F}\
        .ace-ptmagic .ace_support.ace_function {color: #AEB2F8}\
        .ace-ptmagic .ace_string {color: #66A968}\
        .ace-ptmagic .ace_string.ace_regexp {color: #E9C062}\
        .ace-ptmagic .ace_comment {color: #33b5e5}\
        .ace-ptmagic .ace_variable {color: #BEBF55}\
        .ace-ptmagic .ace_variable.ace_language {color: #C1C144}\
        .ace-ptmagic .ace_xml-pe {color: #494949}\
        .ace-ptmagic .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y}";

        var r = e("../lib/dom"); r.importCssString(t.cssText, t.cssClass)
    });
(function () {
    window.require(["ace/theme/ptmagic"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();

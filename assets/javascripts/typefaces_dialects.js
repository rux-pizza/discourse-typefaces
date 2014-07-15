(function () {
    Discourse.Markdown.whiteListTag('span', 'class', '*');

    var david_u_mad = function(tag) {
        Discourse.Dialect.inlineBetween({
            start: "[" + tag + "]",
            stop:  "[/" + tag + "]",
            rawContents: true,
            emitter: function(contents) {
                return ['span', {class: "typefaces-tag " + tag}].concat(
                    this.processInline(contents));
            }
        });
    };

    david_u_mad('smartass');
    david_u_mad('corporate');
    david_u_mad('humanism');
    david_u_mad('alpha');
    david_u_mad('rainbow');

}).call(this);

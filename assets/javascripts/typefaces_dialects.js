(function () {
    /**
     Create a simple BBCode tag handler

     @method replaceBBCode
     @param {tag} tag the tag we want to match
     @param {function} emitter the function that creates JsonML for the tag
     **/
    function replaceBBCode(tag, emitter) {
        Discourse.Dialect.inlineBetween({
            start: "[" + tag + "]",
            stop: "[/" + tag + "]",
            emitter: emitter
        });
    }

    replaceBBCode('smartass', function(contents) { return ['span', {'class': 'typefaces-tag smartass'}].concat(contents); });
    replaceBBCode('humanism', function(contents) { return ['span', {'class': 'typefaces-tag humanism'}].concat(contents); });
    replaceBBCode('corporate', function(contents) { return ['span', {'class': 'typefaces-tag corporate'}].concat(contents); });
    replaceBBCode('alpha', function(contents) { return ['span', {'class': 'typefaces-tag alpha'}].concat(contents); });

}).call(this);
/*!
 * jQuery RGB Password Plugin v1.0.0
 * http://github.com/keriati/jqrgbpw
 *
 * Copyright 2012, Attila Kerekes
 * Licensed under the MIT license.
 *
 * Includes Javascript RGB Password
 * Copyright 2012, Adam Howard
 * http://skatty.me
 * Released under the MIT License.
 */
if ( typeof Object.create !== 'function' ) {
    Object.create = function( obj ) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}

(function ($, window, document, undefined) {

    var RGBPassword = {
        init: function ( options, elem ) {
            var self = this;
            self.elem = elem;
            self.$elem = $( elem );

            self.options = $.extend( {}, $.fn.rgbpassword.options, options );

            self.colorBoxes = [
                $('<div class="color1"></div>').appendTo(this.options.colorBoxContainer),
                $('<div class="color2"></div>').appendTo(this.options.colorBoxContainer),
                $('<div class="color3"></div>').appendTo(this.options.colorBoxContainer)
            ];

            self.bindEvent();
        },

        bindEvent: function() {
            var self = this;

            self.$elem.on('keyup', function() {
                self.adjustColor(self.elem.value);
            });
        },

        adjustColor: function(value) {
            for(var i in this.colorBoxes) {

                var box  = this.colorBoxes[i],
                    salt = this.options.salts[i],
                    hue  = this.jenkins_hash(value, salt)/salt,
                    color;

                color = (value.length <= this.options.minLength)
                    ? color = this.hslToRgb(0, 0, hue)
                    : color = this.hslToRgb(hue, this.options.saturation, this.options.lightness);

                box.css({
                    backgroundColor: "rgb(" + color.r + ", " + color.g + ", " + color.b + ")"
                });
            }
        },

        jenkins_hash: function(key, interval_size) {
            var hash = 0;
            for (var i=0; i<key.length; ++i) {
                hash += key.charCodeAt(i);
                hash += (hash << 10);
                hash ^= (hash >> 6);
            }
            hash += (hash << 3);
            hash ^= (hash >> 11);
            hash += (hash << 15);
            // make unsigned and modulo interval_size
            return (hash >>> 0) % interval_size;
        },

        hslToRgb: function hslToRgb(h, s, l){
            var r, g, b;

            if (s == 0){
                r = g = b = l; // achromatic
            } else {
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;

                r = this.hue2rgb(p, q, h + 1/3);
                g = this.hue2rgb(p, q, h);
                b = this.hue2rgb(p, q, h - 1/3);
            }

            return {
                r : this.finalise(r),
                g : this.finalise(g),
                b : this.finalise(b)
            };
        },

        hue2rgb: function(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        },

        finalise: function(color) {
            return Math.round(color * 255)
        }
    };

    $.fn.rgbpassword = function ( options ) {
        return this.each(function () {

            var rgbpw = Object.create( RGBPassword );
            rgbpw.init( options, this );

            // Make the instance available
            $.data( this, 'RGBPassword', rgbpw );
        });
    };

    $.fn.rgbpassword.options = {
        salts: [ 2462, 3637, 7432],
        colorBoxContainer: '.colorbox',
        saturation: 0.5,
        lightness: 0.5,
        minLength: 4
    };

})(jQuery, window, document);
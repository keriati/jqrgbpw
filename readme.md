# jQuery RGB Password Plugin
Generates a simple RGB pattern based on the password input. The idea is that the input is recognisable by the user so
that they understand their password to be entered correctly before submitting.

## Demo
http://keriati.github.com/jqrgbpw/

## Usage
### HTML
Place this where you want the colors to apear:

    <div class="colorbox"></div>

When you run the script, three boxes will be appended to it, the result will be:

    <div class="colorbox">
        <div class="color1"></div>
        <div class="color1"></div>
        <div class="color1"></div>
    </div>

### CSS
Add some basic styles:

    .colorbox > div {
        width: 10px;
        height: 10px;
        display: inline-block;
        margin: 0 5px;
    }

### Javascript
Use it like any other jQuery plugin:

    $('input#password').rgbpassword({
        salts: [ 2462, 3637, 7432],         // Salt for color
        colorBoxContainer: '.colorbox',     // The container of the colors
        saturation: 0.65,                   // Set the saturaion
        lightness: 0.5,                     // Set the lightness
        minLength: 4,                       // Minimum password length
        colorTimeout: 1000                  // Timeout for color update
                                            // Set to 0 for instant
    });

## License
Copyright 2012, Attila Kerekes  
https://github.com/keriati/jqrgbpw  
Licensed under the MIT license.

### Includes JavaScript RGB Password
Copyright 2012, Adam Howard  
http://skatty.me

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
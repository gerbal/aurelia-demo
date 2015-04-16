'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
    value: true
});

var PageObject_App = (function () {
    function PageObject_App() {
        _classCallCheck(this, PageObject_App);
    }

    _createClass(PageObject_App, [{
        key: 'setSongString',
        value: function setSongString(value) {
            return element(by.valueBind('titleStr')).clear().sendKeys(value);
        }
    }, {
        key: 'getATitle',
        value: function getATitle() {
            console.log(element(by.css('.sTitle')).getText());
            return element(by.css('.sTitle')).getText();
        }
    }, {
        key: 'getArtist',
        value: function getArtist() {
            return element(by.css('.sArtist')).getText();
        }
    }, {
        key: 'getFeat',
        value: function getFeat() {
            return element(by.css('.sFeat')).getText();
        }
    }, {
        key: 'getRemix',
        value: function getRemix() {
            return element(by.css('.sRemix')).getText();
        }
    }]);

    return PageObject_App;
})();

exports.PageObject_App = PageObject_App;
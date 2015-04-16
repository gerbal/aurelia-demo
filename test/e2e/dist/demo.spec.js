'use strict';

var _PageObject_App = require('./app.po.js');

var _PageObject_Skeleton = require('./skeleton.po.js');

describe('Song Parser app', function () {
    var po_skeleton, po_app;

    beforeEach(function () {
        po_skeleton = new _PageObject_Skeleton.PageObject_Skeleton();
        po_app = new _PageObject_App.PageObject_App();

        browser.loadAndWaitForAureliaPage('http://localhost:9000');
    });

    it('should load the page and display the initial page title', function () {
        expect(po_skeleton.getCurrentPageTitle()).toBe('Song String Parser');
    });

    it('should display an Artist', function () {
        expect(po_app.getArtist()).toBeDefined();
    });

    it('should display an Artist', function () {
        expect(po_app.getATitle()).toBeDefined();
    });

    it('should display an Artist', function () {
        expect(po_app.getFeat()).toBeDefined();
    });

    it('should display an Artist', function () {
        expect(po_app.getRemix()).toBeDefined();
    });

    var song_strings = [{
        string: 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)',
        Artist: 'Mark Ronson',
        Title: 'Uptown Funk',
        Feat: 'Bruno Mars',
        Remix: 'Radio Edit'
    }, {
        string: 'Red Mystery - Jetlands (Ron Flatter & Nick D-Lite Edit)',
        Artist: 'Red Mystery',
        Title: 'Jetlands',
        Feat: '',
        Remix: 'Ron Flatter & Nick D-Lite Edit'
    }, {
        string: 'Bill Withers & Grover Washington - Just the Two of Us',
        Artist: 'Bill Withers & Grover Washington',
        Title: 'Just the Two of Us',
        Feat: '',
        Remix: ''
    }, {
        string: 'M. Ward - Me and My Shadow (feat. Zooey Deschanel)',
        Artist: 'M. Ward',
        Title: 'Me and My Shadow',
        Feat: 'Zooey Deschanel',
        Remix: ''
    }, {
        string: 'Clean Bandit - Rather Be (feat. Jess Glynne) [The Magician Remix]',
        Artist: 'Clean Bandit',
        Title: 'Rather Be',
        Feat: 'Jess Glynne',
        Remix: 'The Magician Remix'
    }];

    var _loop = function (x) {
        it('should parse song strings properly', function () {
            console.log(x);
            po_app.setSongString(x.string);
            browser.sleep(200);
            var dict = song_strings[x];
            expect(po_app.getATitle()).toEqual(dict.Title);
            expect(po_app.getArtist()).toEqual(dict.Artist);
            expect(po_app.getFeat()).toEqual(dict.Feat);
            expect(po_app.getRemix()).toEqual(dict.Remix);
        });
    };

    for (var x = 0; x < song_strings.length; x++) {
        _loop(x);
    }
});
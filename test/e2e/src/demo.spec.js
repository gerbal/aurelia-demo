import {
    PageObject_App
}
from './app.po.js';
import {
    PageObject_Skeleton
}
from './skeleton.po.js';

describe('Song Parser app', function () {
    var po_skeleton,
        po_app;

    beforeEach(() => {
        po_skeleton = new PageObject_Skeleton();
        po_app = new PageObject_App();

        browser.loadAndWaitForAureliaPage("http://localhost:9000");
    });

    it('should load the page and display the initial page title', () => {
        expect(po_skeleton.getCurrentPageTitle()).toBe('Song String Parser');
    });

    it('should display an Artist', () => {
        expect(po_app.getArtist()).toBeDefined();
    });

    it('should display an Artist', () => {
        expect(po_app.getATitle()).toBeDefined();
    });

    it('should display an Artist', () => {
        expect(po_app.getFeat()).toBeDefined();
    });

    it('should display an Artist', () => {
        expect(po_app.getRemix()).toBeDefined();
    });


    
    var song_strings = [
        {
            string: "Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)",
            Artist: "Mark Ronson",
            Title: "Uptown Funk",
            Feat: "Bruno Mars",
            Remix: "Radio Edit"
  },
        {
            string: "Red Mystery - Jetlands (Ron Flatter & Nick D-Lite Edit)",
            Artist: "Red Mystery",
            Title: "Jetlands",
            Feat: '',
            Remix: "Ron Flatter & Nick D-Lite Edit"
  },
        {
            string: "Bill Withers & Grover Washington - Just the Two of Us",
            Artist: "Bill Withers & Grover Washington",
            Title: "Just the Two of Us",
            Feat: '',
            Remix: ''
  },
        {
            string: "M. Ward - Me and My Shadow (feat. Zooey Deschanel)",
            Artist: "M. Ward",
            Title: "Me and My Shadow",
            Feat: "Zooey Deschanel",
            Remix: ''
  },
        {
            string: "Clean Bandit - Rather Be (feat. Jess Glynne) [The Magician Remix]",
            Artist: "Clean Bandit",
            Title: "Rather Be",
            Feat: "Jess Glynne",
            Remix: "The Magician Remix"
  }];

    for (let x =0; x < song_strings.length; x++) {
        it('should parse song strings properly', () => {
//            console.log(x);
            let dict = song_strings[x];
            po_app.setSongString(dict.string);
            browser.sleep(200);
            
            expect(po_app.getATitle()).toEqual(dict.Title);
            expect(po_app.getArtist()).toEqual(dict.Artist);
            expect(po_app.getFeat()).toEqual(dict.Feat);
            expect(po_app.getRemix()).toEqual(dict.Remix);
        });
    }

});
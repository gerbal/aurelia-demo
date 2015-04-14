import {computedFrom} from 'aurelia-framework';


export class App {

    //This implemenation of ES6 doesn't use Contructor (why?)

    // constructor(){
    //   sliceParens();
    // }
    // heading = 'Welcome to the Aurelia Navigation App!';

    titleStr = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';

    brackeMatch = /\[([edit|remix|feat]?[^\]]+[edit|remix|feat]?)\]|\(([edit|remix|feat]?[^)]+[edit|remix|feat]?)\)/gi;
    editMatch = /\[([edit|remix]?[^\]]+[edit|remix]?)\]|\(([edit|remix]?[^)]+[edit|remix]?)\)/gi;

    // firstName = 'John';
    // lastName = 'Doe';
    // left = this.titleStr.split('-')[0];
    // right = this.titleStr.split('-')[1];
    // artist = this.left.replace(this.brackeMatch, "")
    // title = this.right.replace(this.brackeMatch, "")
    // feat = this.titleStr.match(/feat.+[-$]/gi)
    // remix = this.right.match(this.editMatch);


    // @computedFrom('artist')
    get Artist() {
        let artist = this.left().replace(this.brackeMatch, "");
        return artist.replace(/feat.*/gi, "");
    }

    // @computedFrom('title')
    get Title() {
        return this.right().replace(this.brackeMatch, "");
    }

    // @computedFrom('feat')
    get Feat() {
        let feat = this.titleStr.match(/feat.+[-$]/gi);
        console.log(feat)
        return feat.map(d => d.replace(/feat.+?\s/i, '').replace('-', ""));
    }

    // @computedFrom('remix')
    get Remix() {
        // console.log(this.remix)
        let remix = this.titleStr.match(this.editMatch);
        return remix.map(d => d.replace(/[\[\]\(\)]/g, ""));
    }

    left(){
      return this.titleStr.split('-')[0];
    }

    right(){
      return this.titleStr.split('-')[1];
    }


}
export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}

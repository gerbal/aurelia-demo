import {
    computedFrom
}
from 'aurelia-framework';



export class App {

    //This implementation of ES6 doesn't use Constructors (why?)

    titleStr = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';

    brackeMatch = /\[((edit|remix|feat)?[^\]]+(edit|remix|feat)?)\]|\(((edit|remix|feat)?[^)]+(edit|remix|feat)?)\)/gi;
    editMatch = /\[((edit|remix)?[^\]]+(edit|remix)?)\]|\(((edit|remix)?[^)]+(edit|remix)?)\)/gi;
    featMatch = /\[((feat)?[^\]]+(feat)?)\]|\(((feat)?[^)]+(feat)?)\)|(feat.+[-$])/gi;


    get Artist() {

        let left = this.left();
        let artist = left.replace(this.brackeMatch, ""); //remove parens & braces, may be overzealous
        return artist.replace(/feat.*/gi, "").trim(); //remove feat. in artist

    }

    get Title() {
        let right = this.right();
        return right.replace(this.brackeMatch, "").trim();
    }

    get Feat() {
        let feat = this.titleStr.match(this.featMatch);
        if (feat != null) {
            let ret_feat = " "
            feat.map(d => d.match(/feat.+?\s/i) ? ret_feat = d.replace(/[\[\]\(\)]/g, "") : " ")
            return ret_feat.replace(/feat.+?\s/i, '').replace('-', "").trim();
        }
    }

    get Remix() {
        let remix = this.titleStr.match(this.editMatch);
        if (remix != null) {
            let ret_remix = " "
            remix.map(d => d.match(/^.*(edit|remix).*$/gi) ? ret_remix = d.replace(/[\[\]\(\)]/g, "") : ' ');
            return ret_remix.trim();
        }
    }

    left() {
        if (this.titleStr.indexOf('-') >= 0) {
            return this.titleStr.split('-')[0];
        } else {
            return " " // Passing a string to avoid exceptions
        }

    }

    right() {
        if (this.titleStr.indexOf('-') >= 0) {
            return this.titleStr.split('-')[1];
        } else {
            return " "
        }

    }


}
// export class UpperValueConverter {
//     toView(value) {
//         return value && value.toUpperCase();
//     }
// }

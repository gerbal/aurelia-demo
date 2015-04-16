import {
    computedFrom
}
from 'aurelia-framework';



export class App {

    //This implementation of ES6 doesn't use Constructors (why?)

    titleStr = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';

    brackeMatch = /\[(?:[^\]]+)\]|\((?:[^)]+)\)/gi;
    editMatch = /\[((edit|remix)?[^\]]+(edit|remix)?)\]|\(((edit|remix)?[^)]+(edit|remix)?)\)/gi;
    featMatch = /\[((feat)?[^\]]+(feat)?)\]|\(((feat)?[^)]+(feat)?)\)|(feat.+[-$])/gi;


    get Artist() {

        let left = this.left();
        let artist = left.replace(this.brackeMatch, ""); //remove parens & braces, may be overzealous
        artist = artist.replace(/feat.*/gi, "").trim(); //remove feat. in artist
        if(artist != undefined){
            return artist;
        }
    }

    get Title() {
        let right = this.right();
        right = right.replace(this.brackeMatch, "");
        return right.trim();
    }

    get Feat() {
        let feat = this.titleStr.match(this.featMatch);
        if (feat != null) {
            let ret_feat = " "
            feat.map(d => d.match(/feat.+?\s/i) ? ret_feat = d.replace(/[\[\]\(\)]/g, "") : " ")
            ret_feat =  ret_feat.replace(/feat.+?\s/i, '').replace('-', "").trim();
            if (ret_feat != undefined){
                return ret_feat
            }
            
        }
        return "";
    }

    get Remix() {
        let remix = this.titleStr.match(this.editMatch);
        if (remix != null) {
            let ret_remix = " "
            remix.map(d => d.match(/^.*(edit|remix).*$/gi) ? ret_remix = d.replace(/[\[\]\(\)]/g, "") : ' ');         
            if(ret_remix != undefined){
            return ret_remix.trim();
            }
        }
        return "";
    }

    left() {
        if (this.titleStr.indexOf(' - ') >= 0) {
            return this.titleStr.split(' - ')[0];
        } else {
            return " "; // Passing a string to avoid exceptions
        }

    }

    right() {
        if (this.titleStr.indexOf(' - ') >= 0) {
            return this.titleStr.split(' - ')[1];
        } else {
            return " ";
        }

    }


}
// export class UpperValueConverter {
//     toView(value) {
//         return value && value.toUpperCase();
//     }
// }

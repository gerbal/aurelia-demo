import {computedFrom} from 'aurelia-framework';


export class App{
// constructor(){

  heading = 'Welcome to the Aurelia Navigation App!';

  titleStr = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';
  //left = this.titleStr.split('-')[0];
  firstName = 'John';
  lastName = 'Doe';
  artist = ""
  title = ""
  feat = ""
  remix = ""
// }

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')


  // @computedFrom('titleStr')

  get Artist(){
    return this.artist
  }

  get Title(){
    return this.title
  }

  get Feat(){
    return this.feat
  }

  get Remix(){
    return this.remix
  }


  Right(){
    let right = this.titleStr.split('-')[1];
    return right;
  }

  // @computedFrom('titleStr')
  Left(){
    let left = this.titleStr.split('-')[0];
    return left;
  }

  get featBit(){

  }

  welcome(){
    alert(`Welcome, ${this.heading}!`);
  }



  get sliceParens(){
    let splits = this.titleStr.split(/[()\[\]]+/);
    //let parensMatch = /\(([edit|remix|feat]?[^)]+)\)/gi;
    let brackeMatch = /[\[([edit|remix|feat]?[^\]]+)\]|\(([edit|remix|feat]?[^)]+)\)]/gi;
    let segments = this.titleStr.match(brackeMatch)
    let right = this.Right();
    let left = this.Left();
    // segments = segments.concat(this.titleStr.match(brackeMatch));
    segments = segments.concat(right.replace(brackeMatch,""), left.replace(brackeMatch,""));
    console.log(segments, left, right);
    return segments
  }

}
export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

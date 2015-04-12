import {computedFrom} from 'aurelia-framework';


export class App{


  heading = 'Welcome to the Aurelia Navigation App!';

  titleStr = 'Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)';
  //left = this.titleStr.split('-')[0];
  firstName = 'John';
  lastName = 'Doe';

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')

  @computedFrom('titleStr')
  get Title(){
    let right = this.titleStr.split('-')[1];
    return right;
  }

  @computedFrom('titleStr')
  get Artist(){
    let left = this.titleStr.split('-')[0];
    return left;
  }

  get featBit(){
    
  }

  welcome(){
    alert(`Welcome, ${this.heading}!`);
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}

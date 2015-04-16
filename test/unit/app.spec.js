import {App} from '../../src/app';

// class RouterStub {
//   configure(handler) {
//     handler(this);
//   }
//   map(routes) {
//     this.routes = routes;
//   }
// }

// Mark Ronson feat. Bruno Mars - Uptown Funk (Radio Edit)
// Red Mystery - Jetlands (Ron Flatter & Nick D-Lite Edit)
// Bill Withers & Grover Washington - Just the Two of Us
// M. Ward - Me and My Shadow (feat. Zooey Deschanel)
// Clean Bandit - Rather Be (feat. Jess Glynne) [The Magician Remix]

let song_strings = [
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
    Feat: "",
    Remix: "Ron Flatter & Nick D-Lite Edit"
  },
  {
    string: "Bill Withers & Grover Washington - Just the Two of Us",
    Artist: "Bill Withers & Grover Washington",
    Title: "Just the Two of Us",
    Feat: "",
    Remix: ""
  },
   {
    string: "M. Ward - Me and My Shadow (feat. Zooey Deschanel)",
    Artist: "M. Ward",
    Title: "Me and My Shadow",
    Feat: "Zooey Deschanel",
    Remix: ""
  },
  {
    string: "Clean Bandit - Rather Be (feat. Jess Glynne) [The Magician Remix]",
    Artist: "Clean Bandit",
    Title: "Rather Be",
    Feat: "Jess Glynne",
    Remix: "The Magician Remix"
  }];

describe('the default song parser', () => {
  var sut;
  beforeEach(() => { sut = new App(); });

  it('contains a titelStr', () => {
    expect(sut.titleStr).toBeDefined();
  });

  it('produces a Title', () =>{
     expect(sut.Title).toEqual("Uptown Funk")
   });

  it('produces an Artist', () =>{
     expect(sut.Artist).toEqual("Mark Ronson")
   });

  it('detects a Featured Artist', () =>{
     expect(sut.Feat).toEqual("Bruno Mars")
   });

  it('detects an edit/remix', () =>{
     expect(sut.Remix).toEqual("Radio Edit")
   });


// });


// descripe('On other songs the song parser', ()=>{
  function test(obj){
    var sut;
    beforeEach(()=> {sut = new App();
      sut.titleStr = obj.string})

    it('contains a titelStr', () => {
    expect(sut.titleStr).toBeDefined();
    });

    it('produces a Title', () =>{
       expect(sut.Title).toEqual(obj.Title)
     });

    it('produces an Artist', () =>{
       expect(sut.Artist).toEqual(obj.Artist)
     });

    it('detects a Featured Artist', () =>{
       expect(sut.Feat).toEqual(obj.Feat)
     });

    it('detects an edit/remix', () =>{
       expect(sut.Remix).toEqual(obj.Remix)
     });
  }
  for(let x of song_strings){
    //console.log(x);
    test(x);
  }

})

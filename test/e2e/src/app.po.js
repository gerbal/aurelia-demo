export class PageObject_App {

    constructor() {

    }

    setSongString(value) {
        return element(by.valueBind('titleStr')).clear().sendKeys(value);
    }

    getATitle() {
//        console.log(element(by.css('.sTitle')).getText());
        return element(by.css('.sTitle')).getText();
    };
    getArtist() {
        return element(by.css('.sArtist')).getText();
    };
    getFeat() {
        return element(by.css('.sFeat')).getText();
    };
    getRemix() {
        return element(by.css('.sRemix')).getText();
    };
}

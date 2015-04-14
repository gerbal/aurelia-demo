import {PageObject_App} from './app.po.js';
import {PageObject_Skeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  var po_skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_app = new PageObject_App();

    browser.loadAndWaitForAureliaPage("http://localhost:9000");
  });

  it('should load the page and display the initial page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', () => {
    expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });
});

import { Component, Input} from '@angular/core';

@Component({
selector: 'app-othercontacts',
template: `
  
 <div>
    Other Contacts:
    <div>
      <a class="btn btn-social-icon btn-facebook" href="https://it-it.facebook.com/">
        <span class="fa fa-facebook"></span></a>
      <a class="btn btn-social-icon btn-instagram" href="https://www.instagram.com/">
        <span class="fa fa-instagram"></span></a>
      <a class="btn btn-social-icon btn-twitter" href="https://www.twitter.com/">
        <span class="fa fa-twitter"></span></a>
    </div>
  </div>

`,
styles: [
]
})
export class OthercontactsComponent {

}

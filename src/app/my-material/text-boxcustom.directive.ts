import { Directive } from '@angular/core';

@Directive({
  selector: '[appTextBoxcustom]'
})
export class TextBoxcustomDirective {

  constructor() {
    console.log('Arnav');
   }

}

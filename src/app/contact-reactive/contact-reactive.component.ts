import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: `contact-reactive.component.html`,
  styles: [
  ]
})
export class ContactReactiveComponent {

  public form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    if (this.form.valid){
      console.log(this.form.value.password);
      console.log(this.form.get('password')?.value);
      
    }else{
      console.log("nonononononono");
    }
  }
}

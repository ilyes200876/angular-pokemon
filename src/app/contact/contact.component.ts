import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: `contact.component.html`,
  styles: [
  ]
})
export class ContactComponent {
  
  username:string;
  password: string;
  messageUser: string;
  messagePwd: string;

  onSubmit(form: NgForm){
    console.log(form.value);
    if(form.value.username.length < 2 || form.value.username == ''){
      // alert("Votre username doit contenir au moins 2 carractères");
      this.messageUser = "😵";
    }
    if(form.value.username.length >= 2){
      this.messageUser = "👌";
    }
    
    if(form.value.password.length > 6 || form.value.username == ''){
      // alert("Votre pass<ord doit contenir au max 6 carractères");
      this.messagePwd = "😵";
    }
    if(form.value.password.length <= 6){
      this.messagePwd = "👌";
    }
    
    form.resetForm();
    
  }

}

import { Component } from '@angular/core';
import { User } from '../shared/models/user';
import { Address } from '../shared/models/address';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public topicHasError: boolean = true;
  public topics: string[] = ['Angular', 'React', 'Vue'];
  public address: Address = new Address(null, null);
  public userModel: User = new User(null, null, null, this.address, "default", null, false);

  public validateTopic(value: string): void {

    if (value === "default")
      this.topicHasError = true;

    else
      this.topicHasError = false;

  }

  public onSubmit(): void {

    console.log(this.userModel);

  }

}

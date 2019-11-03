import { Component } from '@angular/core';
import { User } from '../shared/models/user';
import { Address } from '../shared/models/address';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public topics: string[] = ['Angular', 'React', 'Vue'];
  public address: Address = new Address("", "");
  public userModel: User = new User("", "", null, this.address, "", "", false);

}

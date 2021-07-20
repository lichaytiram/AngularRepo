import { IUserProfile } from "./IUserProfile.model";

export class UserProfile implements IUserProfile {
  constructor(
    public name: string,
    public organization: string
  ) { }
}

import { AbstractControl, FormControl } from "@angular/forms";
import { ETypeOfContact } from "../enums/ETypeOfContact.enum";

export class FormContactValidators {

    static emailOrPhoneSelected(control: AbstractControl) {

        const typeOfContact: FormControl = control.get('typeOfContact') as FormControl;
        const value: FormControl = control.get('value') as FormControl;

        const emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        const phoneRegex = /^[0-9]+(\.?[0-9]+)?$/;

        const typeOfContactValue: string = typeOfContact.value;
        const currentValue: string = value.value;
        switch (typeOfContactValue) {
            case ETypeOfContact.EMAIL:
                console.log('email ' + currentValue);
                if (!emailRegex.test(currentValue)) {
                    console.log('email test');
                    return { invalidType: ETypeOfContact.EMAIL };
                }
                    break;
            case ETypeOfContact.PHONE:
                console.log('phone ' + currentValue);
                if (!phoneRegex.test(currentValue))
                    return { invalidType: ETypeOfContact.PHONE };
                    break;
        }
        
        return null;
    }

}
import { AbstractControl, FormControl } from "@angular/forms";
import { ETypeOfContact } from "../enums/ETypeOfContact.enum";

export class FormContactValidators {

    static emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    static phoneRegex = /^[0-9]+(\.?[0-9]+)?$/;

    static emailOrPhoneSelected(control: AbstractControl) {

        const typeOfContact: FormControl = control.get('typeOfContact') as FormControl;
        const emailOrPhoneControl: FormControl = control.get('value') as FormControl;

        const typeOfContactValue: string = typeOfContact?.value;
        const currentValue: string = emailOrPhoneControl?.value;

        if (!currentValue) return null;

        switch (typeOfContactValue) {
            case ETypeOfContact.EMAIL:
                if (!FormContactValidators.emailRegex.test(currentValue))
                    return { invalidType: ETypeOfContact.EMAIL };
                break;
            case ETypeOfContact.PHONE:
                if (!FormContactValidators.phoneRegex.test(currentValue))
                    return { invalidType: ETypeOfContact.PHONE };
                break;
        }

        return null;
    }

}
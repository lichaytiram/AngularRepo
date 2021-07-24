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
                if (emailRegex.test(currentValue))
                    return { typeOfContact: ETypeOfContact.EMAIL };
                else
                    return { invalidType: true, typeOfContact: ETypeOfContact.EMAIL };
            case ETypeOfContact.PHONE:
                if (phoneRegex.test(currentValue))
                    return { typeOfContact: ETypeOfContact.PHONE };
                else
                    return { invalidType: true, typeOfContact: ETypeOfContact.PHONE };
        }

        return null;
    }

}
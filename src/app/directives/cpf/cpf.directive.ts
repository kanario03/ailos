import { Directive } from '@angular/core';

import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

import { CpfCnpjValidator } from './cpf.validator';

@Directive({
  selector: '[appCpf][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpfDirective,
    multi: true
}]
})
export class CpfDirective extends CpfCnpjValidator implements Validator {}

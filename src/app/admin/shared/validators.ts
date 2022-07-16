import { FormArray, ValidatorFn } from '@angular/forms';

export const isbnFormat: ValidatorFn = function(control) {
  if (!control.value) {
    return null;
  }

  const isbnWithoutDashes = control.value.replaceAll('-', '');
  const length = isbnWithoutDashes.length;

  if (length === 10 || length === 13) {
    return null;
  } else {
    return { isbnformat: true };
  }
}

export const atLeastOneValue: ValidatorFn = function(control) {
  if (!(control instanceof FormArray)) {
    return null;
  }

  if (control.controls.some(el => !!el.value)) {
    return null;
  } else {
    return { atleastonevalue: true };
  }
}

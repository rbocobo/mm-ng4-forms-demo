import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class SignupValidators {
  static mustNotHaveSpaces(c:AbstractControl) : ValidationErrors{
    if(c.value.indexOf(' ') > -1){
      return {
        mustNotHaveSpaces: true
      }
    }
    return null;
  }

  static forbiddenName(name: string): ValidatorFn {
    return (c: AbstractControl): ValidationErrors => {
      if(c.value.indexOf(name) > -1){
        return {
          forbiddenName: {
            name: name
           }
        }
      }
      return null;
    }
  }

  static shouldBeUnique(c: AbstractControl) : Observable<ValidationErrors> {
    return new Observable(observer => {
      setTimeout(()=>{
        if(c.value && c.value == 'magenic'){
          observer.next({
            shouldBeUnique: true
          });
        }else{
          observer.next(null);
        }
        observer.complete();
      }, 2000);
    });

  }
}

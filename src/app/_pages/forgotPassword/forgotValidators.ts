import { FormBuilder, Validators } from '@angular/forms';

export class ForgotValidator {

  public constructor(protected formBuilder: FormBuilder) {}

  public ForgotErrorMessages = {
    email: [
      { lang:'fr', type: 'required', message:'L\'adresse E-mail est obligatoire' },
      { lang:'fr', type: 'pattern', message:'Entrez une adresse E-mail valide' },
      { lang:'en', type: 'required', message:'The E-mail address is required' },
      { lang:'en', type: 'pattern', message:'Enter a valid E-mail address' }
    ]
  };

  get forgotEmail() {
    return this.forgotForm.get('forgotEmail');
  }

  public forgotForm = this.formBuilder.group({ 
    forgotEmail: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z]{2,4}$')
      ]
    ]
  });
}

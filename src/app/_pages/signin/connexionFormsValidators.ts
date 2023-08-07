import { FormBuilder, Validators } from '@angular/forms';

export class FormValidator {

  public constructor(protected formBuilder: FormBuilder) {}

  public errorMessages = {
    email: [
      { lang:'fr', type: 'required', message:'L\'adresse E-mail est obligatoire' },
      { lang:'fr', type: 'pattern', message:'Entrez une adresse E-mail valide' },
      { lang:'en', type: 'required', message:'The E-mail address is required' },
      { lang:'en', type: 'pattern', message:'Enter a valid E-mail address' }
    ],
    password: [
      { lang:'fr', type: 'required', message:'Le mot de passe est obligatoire' },
      { lang:'fr', type: 'minlength', message:'Le mot de passe doit avoir au minimum 6 caractères' },
      { lang:'en', type: 'required', message:'The password is required' },
      { lang:'en', type: 'minlength', message:'The password must have at least 6 characters' }
    ],
    confirmPassword: [
      { lang:'fr', type: 'required', message:'Le mot de passe est obligatoire' },
      { lang:'fr', type: 'minlength', message:'Le mot de passe doit avoir au minimum 6 caractères' },
      { lang:'en', type: 'required', message:'The password is required' },
      { lang:'en', type: 'minlength', message:'The password must have at least 6 characters' }
    ]
  };

  get connexionEmail() {
    return this.connexionForm.get('connexionEmail');
  }
  get connexionPassword() {
    return this.connexionForm.get('connexionPassword');
  }

  get connexionConfirmPassword() {
    return this.connexionForm.get('connexionConfirmPassword');
  }

  public connexionForm = this.formBuilder.group({ 
    connexionEmail: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+[.]{1}[a-zA-Z]{2,4}$')
      ]
    ],
    connexionPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
    connexionConfirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ]

  });
}

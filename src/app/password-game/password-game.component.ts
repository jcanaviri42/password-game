import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CONDITIONS } from '../conditions/conditions-list';

import {
  animate,
  style,
  transition,
  trigger
} from '@angular/animations';

@Component({
  selector: 'app-password-game',
  templateUrl: './password-game.component.html',
  styleUrls: ['./password-game.component.scss'],
  animations: [
    trigger('conditionList', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(10px)' })
        ),
      ]),
    ]),
  ],
})
export class PasswordGameComponent {
  password = new FormControl('', [Validators.required]);
  eyeIcon = 'fa-solid fa-eye';
  showPassword = false;

  conditions = CONDITIONS;

  updateConditions() {
    const pw = this.password.value || '';
    this.conditions.forEach((cond) => (cond.valid = cond.check(pw)));
  }

  updateIconAndMode() {
    this.showPassword = !this.showPassword;
    this.eyeIcon = 'fa-solid fa-eye';

    if (this.showPassword) {
      this.eyeIcon += '-slash';
    }
  }

  get currentInvalidCondition() {
    return this.conditions.find((cond) => !cond.valid) || null;
  }

  get remainingErrorsCount() {
    return this.conditions.filter((cond) => !cond.valid).length;
  }

  get passedConditions() {
    return this.conditions.filter((cond) => cond.valid);
  }
}

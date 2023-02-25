import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthApiClient } from '../shared/data-access/auth.api';

@Component({
    standalone: true,
    template: `
        <div class="auth-page">
            <div class="container page">
                <div class="row">
                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Sign up</h1>
                        <p class="text-xs-center">
                            <a routerLink="/login">Have an account?</a>
                        </p>

                        <ul class="error-messages" *ngIf="registerErrors().length">
                            <li *ngFor="let error of registerErrors()">{{ error }}</li>
                        </ul>

                        <form [formGroup]="form" (submit)="register()">
                            <fieldset class="form-group">
                                <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    placeholder="Your Name"
                                    formControlName="username"
                                />
                            </fieldset>
                            <fieldset class="form-group">
                                <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    placeholder="Email"
                                    formControlName="email"
                                />
                            </fieldset>
                            <fieldset class="form-group">
                                <input
                                    class="form-control form-control-lg"
                                    type="password"
                                    placeholder="Password"
                                    formControlName="password"
                                />
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    imports: [ReactiveFormsModule, NgIf, NgFor, RouterLink],
    providers: [AuthApiClient],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Register {
    private readonly authApiClient = inject(AuthApiClient);

    readonly registerErrors = this.authApiClient.processedErrors;

    readonly form = inject(FormBuilder).nonNullable.group({
        username: [''],
        email: ['', [Validators.email]],
        password: ['', [Validators.required]],
    });

    register() {
        this.authApiClient.register(this.form.getRawValue());
    }
}

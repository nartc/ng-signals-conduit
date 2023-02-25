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
                        <h1 class="text-xs-center">Sign in</h1>
                        <p class="text-xs-center">
                            <a routerLink="/register">Need an account?</a>
                        </p>

                        <ul class="error-messages" *ngIf="loginErrors().length">
                            <li *ngFor="let error of loginErrors()">{{ error }}</li>
                        </ul>

                        <form [formGroup]="form" (submit)="login()">
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
                            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `,
    imports: [RouterLink, ReactiveFormsModule, NgIf, NgFor],
    providers: [AuthApiClient],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Login {
    private readonly authApiClient = inject(AuthApiClient);

    readonly loginErrors = this.authApiClient.processedErrors;

    readonly form = inject(FormBuilder).nonNullable.group({
        email: ['', [Validators.email]],
        password: ['', [Validators.required]],
    });

    login() {
        this.authApiClient.login(this.form.getRawValue());
    }
}

import { ChangeDetectorRef, computed, inject, Injectable, signal } from '@angular/core';
import { ApiClient, ApiException, LoginUser, NewUser } from './api';

@Injectable()
export class AuthApiClient {
    private readonly apiClient = inject(ApiClient);
    private readonly cdr = inject(ChangeDetectorRef);

    private readonly errors = signal<Record<string, string[]>>({});

    readonly processedErrors = computed(() => {
        const processedErrors: string[] = [];
        for (const [key, errors] of Object.entries(this.errors())) {
            for (const error of errors) {
                processedErrors.push(`${key}: ${error}`);
            }
        }
        return processedErrors;
    });

    login(loginUser: LoginUser) {
        this.apiClient.login({ user: loginUser }).subscribe({
            next: (userResponse) => {
                console.log(userResponse);
            },
            error: (error: ApiException) => {
                if (error.response) {
                    const errors = JSON.parse(error.response);
                    if (errors.errors) {
                        this.errors.set(errors.errors);
                        this.cdr.markForCheck();
                    }
                }
            },
        });
    }

    register(newUser: NewUser) {
        this.apiClient.createUser({ user: newUser }).subscribe({
            next: (response) => {
                console.log({ response });
            },
            error: (error: ApiException) => {
                if (error.response) {
                    const errors = JSON.parse(error.response);
                    if (errors.errors) {
                        this.errors.set(errors.errors);
                        this.cdr.markForCheck();
                    }
                }
            },
        });
    }
}

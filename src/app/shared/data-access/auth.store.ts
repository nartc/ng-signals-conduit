import { computed, InjectionToken, signal } from '@angular/core';
import { Profile, User } from './api';

export type AuthStatus = 'idle' | 'authenticated' | 'unauthenticated';

function authStoreFactory() {
    const user = signal<User>(null!);
    const profile = signal<Profile>(null!);
    const status = signal<AuthStatus>('idle');

    const isAuthenticated = computed(() => status() === 'authenticated');

    return {
        isAuthenticated,
    };
}

export const AUTH_STORE = new InjectionToken<ReturnType<typeof authStoreFactory>>('AuthStore Signals', {
    factory: authStoreFactory,
});

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AUTH_STORE } from '../shared/data-access/auth.store';
import { Footer } from './ui/footer/footer.component';
import { Header } from './ui/header/header.component';

@Component({
    standalone: true,
    template: `
        <app-layout-header [isAuthenticated]="authStore.isAuthenticated()" />
        <router-outlet />
        <app-layout-footer />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Header, Footer, RouterOutlet],
})
export default class Layout {
    readonly authStore = inject(AUTH_STORE);
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './ui/footer/footer.component';
import { Header } from './ui/header/header.component';

@Component({
    standalone: true,
    template: `
        <app-layout-header />
        <router-outlet />
        <app-layout-footer />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [Header, Footer, RouterOutlet],
})
export default class Layout {}

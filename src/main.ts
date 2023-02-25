import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';
import { API_BASE_URL } from './app/shared/data-access/api';

bootstrapApplication(AppComponent, {
    providers: [
        { provide: API_BASE_URL, useValue: 'https://api.realworld.io/api' },
        provideRouter(
            [
                {
                    path: '',
                    loadComponent: () => import('./app/layout/layout.component'),
                    loadChildren: () => import('./app/layout/layout.routes'),
                },
            ],
            withHashLocation()
        ),
        provideHttpClient(),
    ],
}).catch((err) => console.error(err));

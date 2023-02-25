import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
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
    ],
}).catch((err) => console.error(err));

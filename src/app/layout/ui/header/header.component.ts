import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-layout-header',
    standalone: true,
    template: `
        <nav class="navbar navbar-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">conduit</a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- Add "active" class when you're on that page" -->
                        <a
                            class="nav-link"
                            routerLink="/"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{ exact: true }"
                        >
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="ion-compose"></i>
                            &nbsp;New Article
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="">
                            <i class="ion-gear-a"></i>
                            &nbsp;Settings
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            routerLink="/login"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{ exact: true }"
                        >
                            Sign in
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            routerLink="/register"
                            routerLinkActive="active"
                            [routerLinkActiveOptions]="{ exact: true }"
                        >
                            Sign up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    imports: [RouterLink, RouterLinkActive],
})
export class Header {}

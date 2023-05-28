import { Component } from '@angular/core';
import { Location } from '@angular/common';
import {
  TestBed,
  fakeAsync,
  ComponentFixture,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

@Component({
  selector: 'login',
  template: 'Login Component',
})
class LoginComponent {}

@Component({
  selector: 'Home',
  template: 'Home Component',
})
class HomeComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', redirectTo: '/login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'home', component: HomeComponent },
          { path: '**', component: LoginComponent },
        ]),
      ],
      declarations: [AppComponent, LoginComponent, HomeComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-testing app is running!'
    );
  });
  it('routes are navigated', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeDefined();
    const router = TestBed.inject(Router);
    const location = TestBed.inject(Location);
    router.initialNavigation();
    tick();
    expect(location.path()).toBe('/login');
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('/home');
  }));
});

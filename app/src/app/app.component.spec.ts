import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {of} from 'rxjs';
import {HttpService} from './http.service';

const httpServiceMock = {
  getStudentInformation: jest.fn(() => of({
    nom: 'Wayne',
    prenom: 'Bruce',
    promo: 'Gotham City High School 1939',
    secret: 'Je suis batman',
    hobbies: ['Casser des gueules', 'Me déguiser en Chauve-Sourie humaine', 'entrainer des enfants à combattre le crime']
  }))
};

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], providers: [
        {provide: HttpService, useValue: httpServiceMock}
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'monApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('monApp');
  });
});

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginService } from './login.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    httpClient = TestBed.inject(HttpClient);
  });
  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  it('call login', () => {
    const testData = true;
    const inputData = {
      username: 'admin',
      password: 'admin',
    };
    service.login(inputData).then((data) => expect(data).toEqual(testData));
    const req = httpController.expectOne('login');
    expect(req.request.method).toEqual('POST');
    req.flush(testData);
  });
});

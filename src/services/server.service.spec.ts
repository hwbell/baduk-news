import { TestBed } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";


import { ServerService } from './server.service';

describe('ServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      HttpClient
    ]
  }));

  it('should be created', () => {
    const service: ServerService = TestBed.get(ServerService);
    expect(service).toBeTruthy();
  });

  it('should get user data', () => {
    const service: ServerService = TestBed.get(ServerService);
    expect(service.getUser()).toBeTruthy();
  });
});

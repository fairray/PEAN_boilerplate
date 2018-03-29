import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private API_PATH = '/api';
  constructor(private http: HttpClient) {}
}

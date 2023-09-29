import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartoneService {

  baseURL: string = "/assets/data.json";

  constructor(private http: HttpClient) {
  }
 
  getShopnow(): Observable<any> {
    return this.http.get(this.baseURL)
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  // private apiUrl = 'https://modelo-backend-production.up.railway.app/caso'; 
  private apiUrl = 'http://localhost:4000/caso/'; 
  private _http = inject(HttpClient);
 
  getList(){
    return this._http.get<any>(`${this.apiUrl}/list`)
  }
}

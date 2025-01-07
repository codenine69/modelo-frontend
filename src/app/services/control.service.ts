import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  private apiUrl = 'http://localhost:4001/caso/'; 
  private _http = inject(HttpClient);
 
  getList(){
    return this._http.get<any>(`${this.apiUrl}/list`)
  }
}

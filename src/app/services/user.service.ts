import { Injectable } from '@angular/core';
//
import { HttpClient, HttpHeaders } from '@angular/common/http';//import do hhtp client
import { User } from '../models/user';//import do model user
import { Observable } from 'rxjs';//requisições  assíncronas

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    //injeção de dependencia do modulo HttpClient//
    private httpClient: HttpClient
  ) { }


  urlLogin = "http://localhost:3000/signin";


  //post de login - Insomnia
  logarUsuario(usuario: User): Observable<any> {

    return this.httpClient.put(this.
      urlLogin, JSON.stringify(usuario), {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      observe: 'response'
    })
  }
}

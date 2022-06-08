import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const BASIC_KEY = 'auth-basic';
const TOKEN_KEY = 'auth-token';
const TITLE_KEY = 'auth-title';
const EXPLORA_KEY = 'auth-id';
const ESTPRD_KEY = 'auth-stpr';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService { 

  constructor() { }

  signOut(): void {
    window.localStorage.clear();
  }

  //USER

  public saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  //BASIC INFO
  public saveProfile(user: any): void {
    window.localStorage.removeItem(BASIC_KEY);
    window.localStorage.setItem(BASIC_KEY, JSON.stringify(user));
  }

  public getProfile(): any {
    const user = window.localStorage.getItem(BASIC_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  //TOKEN
  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  //TITLE

  public saveTitle(title: any): void {
    window.localStorage.removeItem(TITLE_KEY);
    window.localStorage.setItem(TITLE_KEY, title);
  }

  public getTitle(): any | null {
    return window.localStorage.getItem(TITLE_KEY);
  }

  //ZONA DE EXPLORACION
  public saveExplora(explora: any): void {
    window.localStorage.removeItem(EXPLORA_KEY);
    window.localStorage.setItem(EXPLORA_KEY, JSON.stringify(explora));
  }

  public getExplora(): any | null {
    const explora = window.localStorage.getItem(EXPLORA_KEY);
    
    if (explora) {
      return JSON.parse(explora);
    }

    return {};
  }

  //ZONA DE EXPLORACION
  public saveEstadoProd(estpr: any): void {
    window.localStorage.removeItem(ESTPRD_KEY);
    window.localStorage.setItem(ESTPRD_KEY, JSON.stringify(estpr));
  }

  public getEstadoProd(): any | null {
    const estprd = window.localStorage.getItem(ESTPRD_KEY);
    
    if (estprd) {
      return JSON.parse(estprd);
    }

    return {};
  }

}

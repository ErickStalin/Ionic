import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public async addNewToMessage() {
    window.alert("Bienvenido a nuestro sitio web");
  }
}

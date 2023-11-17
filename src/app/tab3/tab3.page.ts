import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public MessageService:MessageService) {}
  addNewToMessage() {
    this.MessageService.addNewToMessage();
  }
}

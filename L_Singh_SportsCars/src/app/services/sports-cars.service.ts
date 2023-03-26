import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { cards } from '../helper-files/ContentDb';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class SportsCarsService {

  constructor(private MessageService: MessageService) { }
  getContent(): Observable<Content[]>{
    this.MessageService.addMessage("Content array loaded!");
    return of(cards);
  }

  getContentById(id: number): Observable<any> {
    const content = cards.find(c => c.id === id);
    this.MessageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}

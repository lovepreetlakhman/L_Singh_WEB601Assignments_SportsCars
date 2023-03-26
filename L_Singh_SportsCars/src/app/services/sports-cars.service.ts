import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { cards } from '../helper-files/ContentDb';
import { MessageService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsCarsService {
  private httpOptions = {
    headers: new HttpHeaders ({ "content-Type": "application/json"}) 
  }

  constructor(private http: HttpClient, private MessageService: MessageService) { }
  getContent(): Observable<Content[]>{
    this.MessageService.addMessage("Content array loaded!");
    return this.http.get<Content[]>("/api/cars");
  }
  addCars(newCars: Content): Observable<Content>{
    this.MessageService.addMessage('New Car Added');
    return this.http.post<Content>("/api/cars", newCars, this.httpOptions);
  }

  getContentById(id: number): Observable<any> {
    const content = cards.find(c => c.id === id);
    this.MessageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}

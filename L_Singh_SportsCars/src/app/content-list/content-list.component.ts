import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SportsCarsService } from '../services/sports-cars.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  cards: Content[] = [];
  title: string = '';
  isTitleThere: boolean = false;
  defaultcar: string = "https://images.unsplash.com/photo-1587494933712-aaafb50f63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

  logID(card: any){
    console.log(`${card.id}, ${card.title}`);
  }

  searchTitle(){
    this.isTitleThere = this.cards.some(card => card.title === this.title);
  }

  constructor(private SportsCarsService: SportsCarsService){}

  ngOnInit(){
    this.SportsCarsService.getContent().subscribe(cards => this.cards = cards);
  }
  addonCreation(newCar: Content){
    this.SportsCarsService.addCars(newCar).subscribe(newCarFromServer => {
      this.cards.push(newCarFromServer);
      this.cards = [...this.cards];
    });
  }
}
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsCarsService } from '../services/sports-cars.service';

@Component({
  selector: 'app-conten-detail',
  templateUrl: './conten-detail.component.html',
  styleUrls: ['./conten-detail.component.scss']
})
export class ContenDetailComponent {
  contentId: number = 4;
  topContent: any = {};
  defaultcar: string = "https://images.unsplash.com/photo-1587494933712-aaafb50f63d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

  
  constructor(private route:ActivatedRoute, private SportsCarsService: SportsCarsService){}

  logID(card: any){
    console.log(`${card.id}, ${card.title}`);
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.contentId = Number(params.get('id') ?? 0);
    
      this.SportsCarsService.getContentById(this.contentId).subscribe(content => this.topContent = content);
    });
  }
}

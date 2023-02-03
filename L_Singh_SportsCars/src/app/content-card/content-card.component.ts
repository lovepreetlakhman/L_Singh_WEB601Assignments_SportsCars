import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor(){
    this.contentList = new ContentList();

    this.contentList.add({id: 0,
      title: "Dodge Challenger RT",
      description: "The interior of the SRT Demon is the same as all other Challenger trims, but with changes that differentiate it to the other trims. The Demon only includes a front driver's seat as standard, and no other seats front or rear in the vehicle. However, the front passenger's seat, as well as a rear bench seat, can both be added back as options for one dollar each. To replace the rear seats, Dodge included rear roll bars, and has a 4-point harness installed on it for the driver seat.",
      creator: "General Motors",
      imgURL: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      type: "American Muscle"
    });
    this.contentList.add({id: 1,
      title: "Chevrolet Camaro ZL1",
      description: "According to the book The Complete Book of Camaro: Every Model Since 1967, the name Camaro was conceived by Chevrolet merchandising manager Bob Lund and General Motors vice president Ed Rollett, while they were reading the book Heath's French and English Dictionary by James Boïelle and by de V. Payen-Payne printed in 1936.",
      creator: "General Motors",
      imgURL: "https://images.unsplash.com/photo-1615769516664-ca7302760b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type: "Super Sport"
    });
    this.contentList.add({id: 2,
      title: "Ford Mustang GT",
      description: "Engines and drivetrains carried over from the Mustang II including the 2.3 L I4, 2.8 L V6, and 4.9 L V8 engines. A troublesome 2.3 L turbocharged I4 was available during initial production startup and then reappeared after undergoing improvements for the mid-year introduction of the 1983 turbo GT. The 2.8 L V6, in short supply, was replaced with a 3.3 L I6 engine during the 1979-model year.",
      creator: "Ford Motors",
      imgURL: "https://images.unsplash.com/photo-1547744152-14d985cb937f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      type: "supercharged supersport"
    });
  }
}
import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentType'
})
export class ContentTypePipe implements PipeTransform {

  transform(cards: Content[], type?: string): Content[] {
    if(!type){
      return cards.filter(card => !card.type)
    }

    return cards.filter(card => card.type === type);
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {

  transform(items : Array<Todo>, filteredStatus : string): Array<Todo> {
    console.log("[TRANSFORMED]", items);
    if(filteredStatus === ''){
      return items;
    }

    let resultArray = [];
    for(let item of items){
      if(item.status === filteredStatus){
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}

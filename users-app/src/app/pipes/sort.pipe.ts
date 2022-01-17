import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: Array<Todo>, orderType : string): Array<Todo> {
    if(orderType === "ASC"){
      return items.sort((a,b)=>{
        let labelA = a.label;
        let labelB = b.label;
        if(labelA > labelB){
          return 1
        }else if(labelA < labelB){
          return -1
        }else{
          return 0
        }
      })
    }else{
      return items.sort((b,a)=>{
        let labelA = a.label;
        let labelB = b.label;
        if(labelA > labelB){
          return 1
        }else if(labelA < labelB){
          return -1
        }else{
          return 0
        }
      })
    }
  }

}

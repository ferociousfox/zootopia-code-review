import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal-model';

@Pipe({
  name: 'filter',
  pure: true
})

export class FilterPipe implements PipeTransform {
  transform(input:Animal[], currentAnimalAge) {
    let output: Animal[] = [];
    if(currentAnimalAge === "all-animals"){
      for (var i = 0; i < input.length; i++){
        output.push(input[i]);
      }
      return output;
    } else if (currentAnimalAge === "cute-babies"){
      for (var i = 0; i < input.length; i++){
        if (input[i].age <= 2){
          output.push(input[i]);
        }
      }
      return output;
    } else if (currentAnimalAge === "adult-animals"){
      for (var i = 0; i < input.length; i++){
      if (input[i].age >= 3){
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}

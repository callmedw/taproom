import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: "kegLevel",
  pure: false

})

export class KegLevelPipe implements PipeTransform {
  transform(input: Keg[], lessThanTenPints) {
    var output: Keg[] = [];
    if(lessThanTenPints === "lowKegs") {
      for (var i =0; i < input.length; i++) {
        if(input[i].volume <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

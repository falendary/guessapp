import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name: "byprice"
})

export class ByPricePipe implements PipeTransform {

  transform(array:Array<any>, min, max, property) {

    if (array) {

      // get the first element

      console.log('array', array);
      console.log('property', property);


      return array.filter((item) => {

        console.log(item[property])

        if (item[property] > min && item[property] < max) {
          return item;
        }

      });

    }
  }
}

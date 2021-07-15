import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  transform(value: string): string {
    value = value.replace(/\s+/g, '');
    const length = value.length;
    let orderval: string = '';

    for (let index = 0; index <= length; index++) {
      if (index % 4 === 0 && index !== 0) orderval += ' ';

      orderval += value.charAt(index);
    }

    return orderval;

    // let num:string[] = [];
    // for (let index = 0; index < val.length; index += 4) {
    //   num.push(val.substr(index, 4))
    // }
    // console.log(num);
    // return num.join(' ');
  }
}

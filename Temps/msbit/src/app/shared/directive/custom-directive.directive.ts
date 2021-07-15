import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input: HTMLInputElement = event.target as HTMLInputElement;

    let value = input.value.replace(/\s+/g, '');
    let num: string[] = [];
    for (let index = 0; index < value.length; index += 4) {
      num.push(value.substr(index, 4))
    }
    input.value = num.join(' ');

  }

}

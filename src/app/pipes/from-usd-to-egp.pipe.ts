import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromUsdToEgp'
})
export class FromUsdToEgpPipe implements PipeTransform {

  transform(value:number,currencyRate:number=50): number {
    return value * 50;
  }

}

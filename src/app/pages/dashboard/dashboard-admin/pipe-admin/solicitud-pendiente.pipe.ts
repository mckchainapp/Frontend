import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solicitudPendiente'
})
export class SolicitudPendientePipe implements PipeTransform {

  transform(value: any, FilterPostPendiente: any): any {

    if (!value || !FilterPostPendiente) {
      return value;  
    }

    let filteredItems = value.filter((sol: any) => {

      if(sol.rucMinera !== null){
        return sol.rucMinera.toLowerCase().includes(FilterPostPendiente.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }


}

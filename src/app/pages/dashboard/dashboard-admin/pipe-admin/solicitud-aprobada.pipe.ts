import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'solicitudAprobada'
})
export class SolicitudAprobadaPipe implements PipeTransform {

  transform(value: any, FilterPostAprobada: any): any {

    if (!value || !FilterPostAprobada) {
      return value;  
    }

    let filteredItems = value.filter((solap: any) => {

      if(solap.rucMinera !== null){
        return solap.rucMinera.toLowerCase().includes(FilterPostAprobada.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }

}

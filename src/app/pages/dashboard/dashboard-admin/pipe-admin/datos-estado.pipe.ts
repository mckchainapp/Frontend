import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosEstado'
})
export class DatosEstadoPipe implements PipeTransform {

  transform(value: any, FilterPostEstado: any): any {

    if (!value || !FilterPostEstado) {
      return value;  
    }

    let filteredItems = value.filter((list: any) => {

      if(list.estadoactividadMinera !== null){
        return list.estadoactividadMinera.toLowerCase().includes(FilterPostEstado.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosNombre'
})
export class DatosNombrePipe implements PipeTransform {

  transform(value: any, FilterPostNombre: any): any {

    if (!value || !FilterPostNombre) {
      return value;  
    }

    let filteredItems = value.filter((list: any) => {

      if(list.nombreMinera !== null){
        return list.nombreMinera.toLowerCase().includes(FilterPostNombre.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datosCodigo'
})
export class DatosCodigoPipe implements PipeTransform {

  transform(value: any, FilterPostCodigo: any): any {

    if (!value || !FilterPostCodigo) {
      return value;  
    }

    let filteredItems = value.filter((list: any) => {

      if(list.codigounicoMinera !== null){
        return list.codigounicoMinera.toLowerCase().includes(FilterPostCodigo.toLowerCase())
      }
      
    })

    return filteredItems;
     
  }
}

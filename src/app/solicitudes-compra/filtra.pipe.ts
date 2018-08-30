import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterByArea'})
export class FilterByStatusPipe implements PipeTransform {

    transform(areaList : any, areaname: string): any[] {
        if (areaList) {
            return areaList.filter((listing: any) => listing.nombre === areaname);
        }
    }
}

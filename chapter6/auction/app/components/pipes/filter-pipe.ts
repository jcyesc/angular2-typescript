import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

    transform(list: any[], filterByField: string, filterValue: string): any {

        /**
         * If either the field name or the filter's value isn't provided, don't filter.
         */
        if (!filterByField || !filterValue) {
            return list;
        }

        /**
         * Filters the array of Product objects by the property passed in the filterByField
         * parameter. It returns true only for those array elements that have characters
         * provided as a filterValue.
         */
        return list.filter(item => {
            const fieldValue = item[filterByField].toLowerCase();
            const filter = filterValue.toLocaleLowerCase();
            return fieldValue.indexOf(filter) >= 0;
        });
    }
}
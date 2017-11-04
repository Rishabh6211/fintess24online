import {Pipe, PipeTransform} from "@angular/core";

/**
 * A simple string filter, since ng2 does not yet have a filter pipe built in.
 */
@Pipe({
    name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {

    /*transform(value: string[], q: string) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(item => -1 < item.toLowerCase().indexOf(q.toLowerCase()));
    }*/
    transform(arr, searchKey) {
  		return arr.filter(function(obj) {
   		return Object.keys(obj).some(function(key) {
      		return obj[key].includes(searchKey);
    		})
  		});
	}
}
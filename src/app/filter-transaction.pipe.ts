import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTransaction'
})
export class FilterTransactionPipe implements PipeTransform {
  transform(transactions: any[], type: string): any[] {
    if (!type) return transactions;
    return transactions.filter(t => t.type === type);
  }
}

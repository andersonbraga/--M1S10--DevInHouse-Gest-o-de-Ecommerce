import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UserEmailPipeComponent',
})
export class UserEmailPipeComponent implements PipeTransform {
  transform(value: string): string {
    const resp = value.split('@');
    return resp[0];
  }
}

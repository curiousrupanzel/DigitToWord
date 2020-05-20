import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-digit-to-word',
  template: ``,
  styles: []
})
export class DigitToWordComponent implements OnInit {

  public static digitToWord(InputDigits: any): string {
    // tslint:disable-next-line: prefer-const
    let words = [];
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    const digits = InputDigits.toString();
    const atemp = digits.split('.');
    const formattedNumber = atemp[0].split(',').join('');
    const numberLength = formattedNumber.length;
    // tslint:disable-next-line: variable-name
    let words_string = '';
    if (numberLength <= 19) {
      // tslint:disable-next-line: variable-name
      const n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      // tslint:disable-next-line: variable-name, prefer-const
      let receivedNarray = new Array();
      for (let i = 0; i < numberLength; i++) {
        receivedNarray[i] = formattedNumber.substr(i, 1);
      }
      for (let i = 19 - numberLength, j = 0; i < 19; i++, j++) {
        n_array[i] = receivedNarray[j];
      }
      for (let i = 0, j = 1; i < 19; i++, j++) {
        if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8 || i === 10 || i === 12 || i === 14 || i === 17) {
          if (n_array[i].toString() === '1') {
            // tslint:disable-next-line: radix
            n_array[j] = 10 + parseInt(n_array[j].toString());
            n_array[i] = 0;
          }
        }
      }
      let value: any;
      for (let i = 0; i < 19; i++) {
        if (i === 0 || i === 2 || i === 4 || i === 6 || i === 8 || i === 10 || i === 12 || i === 14 || i === 17) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value.toString() !== '0') {
          words_string += words[value] + ' ';
        }
        if ((i === 1 && value.toString() !== '0') || (i === 0 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Sankh ';
        }
        if ((i === 3 && value.toString() !== '0') || (i === 2 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Padma ';
        }
        if ((i === 5 && value.toString() !== '0') || (i === 4 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Nil ';
        }
        if ((i === 7 && value.toString() !== '0') || (i === 6 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Kharab ';
        }
        if ((i === 9 && value.toString() !== '0') || (i === 8 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Arab ';
        }
        if ((i === 11 && value.toString() !== '0') || (i === 10 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Crores ';
        }
        if ((i === 13 && value.toString() !== '0') || (i === 12 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Lakhs ';
        }
        if ((i === 15 && value.toString() !== '0') || (i === 14 && value.toString() !== '0' && n_array[i + 1].toString() === '0')) {
          words_string += 'Thousands ';
        }
        if (i === 16 && value.toString() !== '0' &&  n_array[i + 2].toString() !== '0') {
          words_string += 'Hundred and ';
        } else if (i === 16 && value.toString() !== '0') {
          words_string += 'Hundred ';
        }
      }
      words_string = words_string.split('  ').join(' ');
    }
    return words_string;
  }

  constructor() { }

  ngOnInit() {
  }
}

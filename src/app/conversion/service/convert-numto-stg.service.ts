import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertNumtoStgService {

  coreInfo: Array<any> = [{}];
  constructor() { }

  /** Generate and  Hold the mapping  between Num and  String  */
  public gettheCoreInfo() {
    interface objNumStr {
      charval: string;
      Numberval: Number;
    }
    let char = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
    let data = char.split('');
    for (let index = 0; index < 2; index++) {
      for (let chindex = 0; chindex < data.length; chindex++) {
        let element = data[chindex].toString();
        let converObj = {} as objNumStr;
        if (index === 1) {
          converObj.charval = element;
          converObj.Numberval = chindex + data.length;
        }
        else if (index >= 2) {
          converObj.charval = element;
          converObj.Numberval = this.coreInfo.length - 1;
        }
        else {
          converObj.charval = element;
          converObj.Numberval = index + chindex;
        }
        this.coreInfo.push(converObj);
      }
    }
    return this.coreInfo;
  }

  /** Emplty  arrary remove */
  arrayRemove(arr: any[], value: string) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }
}
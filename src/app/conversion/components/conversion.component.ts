import { Component, OnInit } from '@angular/core';
import { ConvertNumtoStgService } from '../service/convert-numto-stg.service';
import { select, State, Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import * as conversionActions from '../store/conversion.actions';
import * as fromConversion from '../store/conversion.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Conversion } from '../store/conversion.model';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

public conversions: Conversion = { currentNumber: '1', transformedValue: '2' };
  currentValue: string = '';
  Previous: string = '';
  coreInfo: Array<any> = [{}];
  transformedValue: string = '';
  PrevioustransformedValue: string = '';

  constructor(private store: Store<AppState>, private convertNumtoStgService: ConvertNumtoStgService) {
  }
  ngOnInit() {
    this.coreInfo = this.convertNumtoStgService.gettheCoreInfo();
    this.getStoreVal();
  }

  /** Take input  from keyPad  */
  getTheInput(num: any)  {
    if (num !== '#') {alert("You typed " + num); }
    this.currentValue = num;
    this.currentValue = this.Previous += this.currentValue;
    this.Previous = this.currentValue;
    this.PrevioustransformedValue = '';
    this.transformedValue = '';
    this.convertNumtostring(this.currentValue);
    this.getStoreVal();
  }
  /**Get  state  from  conversion store */
  getStoreVal()  {
    this.store.dispatch(conversionActions.getConversions());
    this.store.select('conversionStore').subscribe((state => this.conversions = state));
    this.currentValue =this.conversions.currentNumber;
  }
  /**Add  state  in  conversion store */
  addToStore(cnum: string, tval: string) {
    const conversion: Conversion = { currentNumber: cnum, transformedValue: tval };
    this.store.dispatch(conversionActions.addConversions({ payload: conversion }))
  }
  /** converter from number to string value */
  convertNumtostring(data: any) {
    let values = data.split('#');
    let val = this.convertNumtoStgService.arrayRemove(values, '');
    if (val.length == 0) {
      this.currentValue = '';
      this.PrevioustransformedValue = '';
      this.addToStore(this.currentValue, this.PrevioustransformedValue);
    }
    else {
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        this.coreInfo.forEach(info => {
          for (const [key, value] of Object.entries(info)) {
            if (value == element) {
              this.transformedValue = info.charval;
              this.transformedValue = this.PrevioustransformedValue.concat(this.transformedValue);
              this.PrevioustransformedValue = this.transformedValue;
              this.addToStore(this.currentValue, this.PrevioustransformedValue);
            }
          }
        });
      }
    }
  }
  /** Remove the last typed value  */
  removeLastTypedValue() {
    let res = this.currentValue.toString().slice(0, this.currentValue.toString.length - 1);
    this.currentValue = res;
    this.Previous = this.currentValue;
    this.PrevioustransformedValue = '';
    this.transformedValue = '';
    this.convertNumtostring(this.currentValue);
    this.getStoreVal();
  }
}

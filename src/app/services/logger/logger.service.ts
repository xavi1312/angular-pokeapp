import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}
  log(msg: any) {
    console.log('%c' + msg, 'color: green');
  }
  warn(msg: any) {
    console.warn(msg);
  }
  error(msg: any) {
    console.error(msg);
  }
}

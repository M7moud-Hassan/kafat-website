import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthSharedService {

  constructor() { }

  private forgetEmailSubject = new BehaviorSubject<string>('');

  setForgerEmail(data: string) {
    this.forgetEmailSubject.next(data);
  }

  getForgerEmail() {
    return this.forgetEmailSubject.asObservable();
  }
}

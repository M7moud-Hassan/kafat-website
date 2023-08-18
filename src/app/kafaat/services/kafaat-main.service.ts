import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KafaatSharedService } from './kafaat-shared.service';
// import { MatDialog } from '@angular/material/dialog';
@Injectable({
  providedIn: 'root'
})
export class KafaatMainService {

  constructor(
    private _router:Router,
    private _sharedService:KafaatSharedService,
    // private _dialog: MatDialog

    ) { }

  get routerService():Router{
    return this._router;
  }
  get sharedService():KafaatSharedService{
    return this._sharedService;
  }
  // get dialog():MatDialog{
  //   return this._dialog;
  // }
}

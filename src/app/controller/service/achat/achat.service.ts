import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Achat} from "../../model/achat/achat";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  private _achat !: Achat;
  private _achats !: Array<Achat>;
  private _url= "http://localhost:8033/GestionCommertiale/Achat/";
  constructor(private _http:HttpClient) {}
  public findAll(): Observable<Array<Achat>>{
    return this._http.get<Array<Achat>>(this._url);
  }

  get achat(): Achat {
    if(this._achat == null){
      return this._achat = new Achat();
    }
    return this._achat;
  }

  set achat(value: Achat) {
    this._achat = value;
  }

  get achats(): Array<Achat> {
    if(this._achats == null){
      return this._achats= new Array<Achat>();
    }
    return this._achats;
  }

  set achats(value: Array<Achat>) {
    this._achats = value;
  }
  public  save ():Observable<Achat>{
    return this._http.post<Achat>(this._url, this.achat);
  }

  public deleteByCode(code:string):Observable<number>{
    console.log('urrrllll ==>'+ this._url +'code/'+ code);
    return this._http.delete<number>(this._url+ 'code/' + code);
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}

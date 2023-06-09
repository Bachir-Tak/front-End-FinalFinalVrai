import {Component, OnInit} from '@angular/core';
import {RecapitulatifService} from "../../../controller/service/recapitulatifAchat/recapitulatifAchat.service";
import {RecapitulatifAchat} from "../../../controller/model/recapitulatifAchat/recapitulatifAchat.model";

@Component({
  selector: 'app-recapitulatif-achat-list',
  templateUrl: './recapitulatif-achat-list.component.html',
  styleUrls: ['./recapitulatif-achat-list.component.css']
})
export class RecapitulatifAchatListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private recapitulatifAchatService:RecapitulatifService) {
  }
  public findAll():void{
    this.recapitulatifAchatService.findAll().subscribe(
      data => this.recapitulatifAchats = data
    );
  }

  get recapitulatifAchat(): RecapitulatifAchat {
    return this.recapitulatifAchatService.recapitulatifAchat;
  }

  set recapitulatifAchat(value: RecapitulatifAchat) {
    this.recapitulatifAchatService.recapitulatifAchat = value;
  }

  get recapitulatifAchats(): Array<RecapitulatifAchat> {
    return this.recapitulatifAchatService.recapitulatifAchats;
  }

  set recapitulatifAchats(value: Array<RecapitulatifAchat>) {
    this.recapitulatifAchatService.recapitulatifAchats = value;
  }
  public deleteByCode(r : RecapitulatifAchat, index:number):void {
    console.log('voila le code' + r.code);
    this.recapitulatifAchatService.deleteByCode(r.code.toString()).subscribe(data => {
      if (data > 0) {
        this.recapitulatifAchats.splice(index, 1);
      } else {
        alert('Del Error');
      }

    });
  }
}

import {Component, OnInit} from '@angular/core';

import {Paiement} from "src/app/controller/model/paiement/paiement.model";
import {PaiementService} from "src/app/controller/service/paiement/paiement.service";

@Component({
  selector: 'app-paiement-create',
  templateUrl: './paiement-create.component.html',
  styleUrls: ['./paiement-create.component.css']
})
export class PaiementCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save(): void{
    this.paiementService.save(this.paiement).subscribe(
      data => {
        if (data == null) {
          alert('failure : code exist')
        }else{
          alert('success : paiement sav')
        }
      }
    );
  }

  constructor(private paiementService: PaiementService) {
  }



  get paiement(): Paiement {
    return this.paiementService.paiement;
  }

  set paiement(value: Paiement) {
    this.paiementService.paiement = value;
  }

  get paiements(): Array<Paiement> {
    return this.paiementService.paiements;
  }

  set paiements(value: Array<Paiement>) {
    this.paiementService.paiements = value;
  }

  protected readonly Paiement = Paiement;
}

import {Livraison} from "../livraison/livraison.model";
import {Commande} from "../commande/commande";



export class LivraisonCommande {
  public id !: number;
  public livraison !: Livraison;
  public commande !: Commande;
}

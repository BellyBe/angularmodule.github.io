import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { trigger, style, animate, transition, stagger, keyframes, query } from '@angular/animations';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations : [ trigger('animobjectifs' ,[
    transition ( '*=>*' ,[
    query(':enter', style({opacity: 0}), {optional: true}),
    query(':enter', stagger('300ms',[ animate ( '.6s ease-in' , keyframes ([
      style({opacity: 0, transform: 'translateY(-75%)', offset: 0, backgroundColor: '#ffdddd'}), 
      style({opacity: .5, transform: 'translateY(35px)', offset: .3, backgroundColor: '#ffe4b2'}),
      style({opacity: 1, transform: 'translateY(0)', offset: 1, backgroundColor: '#d4edda'

      }), ]))]),
      {optional: true}
    )
    ]) ])]
})

export class HomeComponent implements OnInit {

  nbItems: number = 0;
  btnText: string = ""; // La variable pour stocker le texte de l'utilisateur
  objectifText: string = '';

  objectifs: string[] = [];

  constructor(private toto: Router, private activiteService: TestServiceService) {

  }

  ngOnInit(): void {
      this.nbItems = this.activiteService.getNbObjectifs(); 
      this.objectifs = this.activiteService.getObjectifs();

  }

  // Méthode ajoutItem pour ajouter un nouvel objectif dans le tableau
  ajoutItem(): void {
    // Vérifiez si le texte entré par l'utilisateur n'est pas vide
    if (this.btnText.trim() !== '') {
      // Ajoutez le nouvel objectif au tableau
      //this.objectifs.push(this.btnText.trim());

      // Mettez à jour nbItems avec le nouveau nombre d'objectifs
      //this.nbItems = this.objectifs.length;

      this.activiteService.ajouterObjectif(this.btnText.trim()); // Ajouter via le service
      this.nbItems = this.activiteService.getNbObjectifs(); // Mettre à jour nbItems
      
      // Réinitialisez le champ de texte de l'utilisateur après l'ajout
      this.btnText = '';  // Réinitialisation de btnText

      //setTimeout(()=> {this.toto.navigate(['about'])}, 33000);
    }
  }

  getExplicitClass() {
    if (this.btnText == "..." || this.btnText == "") {
      return 'btn';
    } else {
      return 'btnok';
    }

  }

   // Méthode pour récupérer les objectifs pour le template
   /*get objectifs(): string[] {
    return this.activiteService.getObjectifs();
  }*/

  // Méthode pour naviguer vers la page consultAct
  goToConsultAct(index: number): void {
    console.log('Index envoyé :', index);
    this.toto.navigate(['/consultAct/', index]); // Syntaxe correcte pour passer un paramètre

    //this.toto.navigate([`/consultAct/${index}`]);
  }
}

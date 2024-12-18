import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestServiceService } from '../test-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consult-activite',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consult-activite.component.html',
  styleUrl: './consult-activite.component.scss'
})
export class ConsultActiviteComponent implements OnInit {
  param1  = "monTest2";
  param2  = "monTest2";
  objectif: string | undefined;
  index: number | undefined;
  isEditing: boolean = false; // Pour gérer le mode édition
  editedTitle: string = ''; // Titre modifié

  /*constructor(private monActRoute: ActivatedRoute){
    if (monActRoute.snapshot.params['test2'] ){
      this.param = monActRoute.snapshot.params['test2']
      this.param = monActRoute.snapshot.params['test2']

    }
  }*/
    constructor(private monActRoute: ActivatedRoute, private activiteService: TestServiceService,  private router: Router) {
      // Récupération des paramètres transmis dans l'URL
      this.param1 = this.monActRoute.snapshot.params['param1'] || null;
      this.param2 = this.monActRoute.snapshot.params['param2'] || null;
    }

    /*ngOnInit(): void {
      const index = +this.monActRoute.snapshot.params['index']; // Convertir l'index en nombre
      const objectifs = this.activiteService.getObjectifs();
    
      console.log('Index récupéré depuis l\'URL :', index);
      console.log('Objectifs disponibles :', objectifs);
    
      /*if (index >= 0 && index < objectifs.length) {
        console.log('Objectif trouvé :', objectifs[index]);
        this.objectif = objectifs[index];
      } else {
        console.warn('Index invalide ou aucun objectif trouvé.');
        this.objectif = undefined;
      }*/

      /*if (!isNaN(index) && index >= 0 && index < objectifs.length) {
        console.log('Objectif trouvé :', objectifs[index]);
        this.objectif = objectifs[index];
      } else {
        console.warn('Index invalide ou aucun objectif trouvé.');
        this.objectif = undefined;
      }
      
    }*/

    ngOnInit(): void {
      const indexParam = this.monActRoute.snapshot.paramMap.get('index');
      this.index = Number(indexParam); // Convertir en nombre
  
      const objectifs = this.activiteService.getObjectifs();
      if (!isNaN(this.index) && this.index >= 0 && this.index < objectifs.length) {
        this.objectif = objectifs[this.index];
      } else {
        this.objectif = undefined;
      }
    }
    
    supprimeElem(): void {
      if (this.index !== undefined) {
        this.activiteService.removeItem(this.index); // Supprime l'élément via le service
        this.router.navigate(['/']); // Redirige vers la page principale
      }
    }

    // Nouvelle méthode pour sauvegarder les modifications
  sauvegardeModifications(): void {
    if (this.index !== undefined && this.editedTitle.trim() !== '') {
      this.activiteService.updateObjectif(this.index, this.editedTitle.trim());
      this.objectif = this.editedTitle; // Mettre à jour l'affichage
      this.isEditing = false; // Désactiver le mode édition
    }
  }

  // Méthode pour activer le mode édition
  activerEdition(): void {
    this.isEditing = true;
  }

  // Méthode pour annuler les modifications
  annulerEdition(): void {
    this.isEditing = false;
    this.editedTitle = this.objectif || ''; // Réinitialiser le champ texte
  }

  // Méthode pour rediriger vers la page principale
  retourAccueil(): void {
    this.router.navigate(['/']); // Redirige vers la page d'accueil
  }
    

}
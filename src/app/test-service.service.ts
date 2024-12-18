import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

 // Déplacez ici le tableau objectifs
 private objectifs: string[] = [];

 constructor() {
  
 }

 // Méthode pour récupérer le tableau d'objectifs
 getObjectifs(): string[] {
   return this.objectifs;
 }

 // Méthode pour ajouter un objectif
 ajouterObjectif(objectif: string): void {
   this.objectifs.push(objectif.trim());
 }

 // Méthode pour obtenir la longueur actuelle des objectifs
 getNbObjectifs(): number {
   return this.objectifs.length;
 }

 // Nouvelle méthode pour supprimer un objectif par index
 removeItem(index: number): void {
    if (index >= 0 && index < this.objectifs.length) {
      this.objectifs.splice(index, 1);
    }
  }

  updateObjectif(index: number, newTitle: string): void {
    if (index >= 0 && index < this.objectifs.length) {
      this.objectifs[index] = newTitle;
    }
  }
}

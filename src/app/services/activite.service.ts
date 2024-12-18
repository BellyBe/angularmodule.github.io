import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Service accessible dans toute l'application
})
export class ActiviteService {
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
    this.objectifs.push(objectif);
  }

  // Méthode pour obtenir la longueur actuelle des objectifs
  getNbObjectifs(): number {
    return this.objectifs.length;
  }
}

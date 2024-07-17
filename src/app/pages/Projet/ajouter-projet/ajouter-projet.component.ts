import { Component, OnInit } from '@angular/core';
import { Projet } from '../../../Models/Projet';
import { ProjetService } from '../../../Services/ProjetService';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ajouter-projet',
  templateUrl: './ajouter-projet.component.html',
  styleUrls: ['./ajouter-projet.component.scss']
})
export class AjouterProjetComponent implements OnInit{
  projets: Projet[] = [];
  constructor(    private router: Router  // Inject Router
  ,private projetService: ProjetService) { }
  ngOnInit(): void {
    
  }
  saveProjet(projet: Projet): void {
    this.projetService.createProjet(projet).subscribe(
      (data: Projet) => {
        console.log(data); // Log the returned data object
        // Redirect to another route upon successful save
      },
      (error: any) => {
        console.error('Error saving projet', error);
      }
    );
  }
  navigateToAfficher(): void {
    this.router.navigate(['/AfficherProjet']); // Navigate to '/afficher' route
    // Replace '/afficher' with your actual route path
  }
  
}

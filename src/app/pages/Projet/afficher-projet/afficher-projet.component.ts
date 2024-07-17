import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../Services/ProjetService';
import { Projet } from '../../../Models/Projet';

@Component({
  selector: 'ngx-afficher-projet',
  templateUrl: './afficher-projet.component.html',
  styleUrls: ['./afficher-projet.component.scss']
})
export class AfficherProjetComponent implements OnInit{

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.getProjets();
  }
  projets: Projet[] = [];
  getProjets(): void {
    this.projetService.getAllProjets().subscribe(
      (data: Projet[]) => {
        this.projets = data;
        console.log(data)  
          },
      (error: any) => {
        console.error('Error fetching projets', error);
      }
    );
  }
  getTypeClass(type: string): string {
    switch (type) {
      case 'NOT_STARTED':
        return 'bg-warning text-dark';
      case 'IN_PROGRESS':
        return 'bg-info text-white';
      case 'COMPLETED':
        return 'bg-success text-white';
      default:
        return '';
    }
  }


  deleteProjet(id: number): void {
    console.log(`Attempting to delete project with id: ${id}`);
    this.projetService.deleteProjet(id).subscribe(
      () => {
        console.log(`Project with id: ${id} deleted successfully`);
        this.getProjets();
      },
      (error: any) => {
        console.error('Error deleting projet', error);
      }
    );
  }
  


}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  objectifs: string[] = [];

  param  = "truc"
  constructor(private monActRoute: ActivatedRoute, private activiteService: TestServiceService){
    if (monActRoute.snapshot.params['toto'] ){
      this.param = monActRoute.snapshot.params['toto']
    }

  }

  ngOnInit(): void {
    // Récupération de la liste des objectifs via le service
    this.objectifs = this.activiteService.getObjectifs();
  }
}

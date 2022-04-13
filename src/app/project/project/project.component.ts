import { Component, OnInit } from '@angular/core';
import { Project } from "@app/models/Project";
import { NgForm } from "@angular/forms";
@Component({
  selector: 'ngprj-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  projects: Project[] = [
    {
      id: 1, 
      code: 'adhsdxc',
      name: 'Progetto Alpha',
      description: 'devo fare la spesa',
      start: new Date(2021,1,30),
      end: new Date(2022,1,10),
      priority: 'medium',
      done: true,
      tasks: []
    },
    {
      id: 2, 
      code: 'gdjgdj',
      name: 'Progetto Beta',
      description: 'fare la torta per zio Paolo',
      start: new Date(2021,1,30),
      end: new Date(2025,1,10),
      priority: 'low',
      done: false,
      tasks: [],
    },
    {
      id: 3, 
      code: 'gdjgdj',
      name: 'Progetto coma',
      description: 'Portare la medicina a Nonna',
      start: new Date(2020,4,12),
      priority: 'high',
      done: false,
      tasks: [],
    },
    {
      id: 4, 
      code: 'ahsdh',
      name: 'Progetto gugu',
      description: 'Compra Gatto',
      start: new Date(2024,2,9),
      priority: 'low',
      done: false,
      tasks: [],
    },
    {
      id: 5, 
      code: 'ahsdh',
      name: 'Progetto Mario',
      description: 'Salutare Mario',
      start: new Date(2008,1,2),
      priority: 'medium',
      done: true,
      tasks: [],
    }
  ];
  
  constructor() {
   
  }

  ngOnInit(): void {
  }
  submitProjectForm(f: NgForm){
    console.log('submitFatto', f.value);
    
  }
}

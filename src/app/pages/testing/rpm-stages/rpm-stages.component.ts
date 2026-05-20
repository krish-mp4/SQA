import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpm-stages',
  templateUrl: './rpm-stages.component.html',
  styleUrls: ['./rpm-stages.component.scss']
})
export class RpmStagesComponent implements OnInit {

  constructor() { }

  totalSize = 100;
currentPage = 0;
pageSize = 10;

fnHandlePage(event: any) {
  console.log(event);
}

  ngOnInit(): void {
  }


  tdata = [
  {
    "phase": "Feasibility",
    "description": "Evaluate project viability, business value, technical feasibility, budget, risks, and stakeholder alignment before execution approval.",
    "tasks": 2,
  },
  {
    "phase": "Design",
    "description": "Create functional, technical, and UI/UX designs for the solution architecture and workflows.",
    "tasks": 3,
  },
  {
    "phase": "Prototyping",
    "description": "Develop an initial working prototype to validate concepts, workflows, usability, and stakeholder expectations.",
    "tasks": 1,
  },
  {
    "phase": "Testing",
    "description": "Validate functionality, quality, performance, security, and usability before production release.",
    "tasks": 4,
  },
  {
    "phase": "Launch",
    "description": "Prepare and release the product/application into the production environment for end users.",
    "tasks": 5,
  },
  {
    "phase": "Implementation",
    "description": "Execute full-scale adoption, user onboarding, operational transition, and support activities after launch.",
    "tasks": 2,
  }
]

}

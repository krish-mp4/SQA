import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-casting',
  templateUrl: './parts-casting.component.html',
  styleUrls: ['./parts-casting.component.scss']
})
export class PartsCastingComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; 

  // Table Data 1: Casting Specific Parts
  castingList = [
    { name: 'Engine Block', rating5: 15, rating4: 5, rating3: 2, rating2: 1, rating1: 0, ratingNA: 0 },
    { name: 'Cylinder Head', rating5: 10, rating4: 8, rating3: 3, rating2: 1, rating1: 1, ratingNA: 0 },
    { name: 'Brake Caliper', rating5: 12, rating4: 4, rating3: 2, rating2: 2, rating1: 0, ratingNA: 0 },
    { name: 'Transmission Case', rating5: 8, rating4: 3, rating3: 3, rating2: 1, rating1: 1, ratingNA: 0 }
  ];

  // Table Data 2: Casting Defect Severity
  severityList = [
    { rating: 'Conforming', percent: '70.0%' }, 
    { rating: 'Minor Defect', percent: '18.0%' },      
    { rating: 'Major Defect', percent: '8.0%' }, 
    { rating: 'Critical Defect', percent: '4.0%' }        
  ];

  // Chart Options (Total Audits per Casting Part)
  castingPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        size: '75%', 
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Engine Block', y: 23 },      
        { name: 'Cylinder Head', y: 23 },      
        { name: 'Brake Caliper', y: 20 },    
        { name: 'Transmission Case', y: 16 }  
      ]
    }]
  };

  // Status Chart Options (Severity Colors)
  severityPieOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        size: '75%', 
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.percentage:.1f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Conforming', y: 70, color: '#00e272' },       
        { name: 'Minor Defect', y: 18, color: '#fcae04' },     
        { name: 'Major Defect', y: 8, color: '#fa4b42' },      
        { name: 'Critical Defect', y: 4, color: '#8b0000' }    
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
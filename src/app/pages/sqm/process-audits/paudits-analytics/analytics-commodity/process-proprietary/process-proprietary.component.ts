import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-process-proprietary',
  templateUrl: './process-proprietary.component.html',
  styleUrls: ['./process-proprietary.component.scss']
})
export class ProcessProprietaryComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; 

  // Table Data 1 (Proprietary Sub-Categories)
  proprietaryList = [
    { name: 'Bearings', rating5: 3, rating4: 2, rating3: 1, rating2: 1, rating1: 0, ratingNA: 0 },
    { name: 'Seals & Gaskets', rating5: 2, rating4: 2, rating3: 2, rating2: 0, rating1: 0, ratingNA: 1 },
    { name: 'Custom Assemblies', rating5: 2, rating4: 1, rating3: 1, rating2: 1, rating1: 1, ratingNA: 0 },
    { name: 'Actuators', rating5: 1, rating4: 1, rating3: 1, rating2: 1, rating1: 0, ratingNA: 1 }
  ];

  // Table Data 2 (Calculated percentages based on the 25 total proprietary audits)
  statusList = [
    { rating: 'Excellent', percent: '32.0%' }, // 8 out of 25
    { rating: 'Good', percent: '24.0%' },      // 6 out of 25
    { rating: 'Satisfied', percent: '20.0%' }, // 5 out of 25
    { rating: 'Major', percent: '12.0%' },     // 3 out of 25
    { rating: 'Critical', percent: '4.0%' },   // 1 out of 25
    { rating: 'NA', percent: '8.0%' },         // 2 out of 25
  ];

  // Proprietary Sub-Category Chart Options
  proprietaryPieOptions: Highcharts.Options = {
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
        { name: 'Bearings', y: 7 },           // 3+2+1+1+0+0
        { name: 'Seals & Gaskets', y: 7 },    // 2+2+2+0+0+1
        { name: 'Custom Assemblies', y: 6 },  // 2+1+1+1+1+0
        { name: 'Actuators', y: 5 }           // 1+1+1+1+0+1
      ]
    }]
  };

  // Severity Chart Options for Proprietary
  statusPieOptions: Highcharts.Options = {
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
        { name: 'Excellent', y: 8, color: '#008000' },  // Rating 5
        { name: 'Good', y: 6, color: '#000d80' },       // Rating 4
        { name: 'Satisfied', y: 5, color: '#dbdb21' },  // Rating 3
        { name: 'Major', y: 3, color: '#fcae04' },      // Rating 2
        { name: 'Critical', y: 1, color: '#ff0000' },   // Rating 1
        { name: 'NA', y: 2, color: '#7e7e7e' },         // NA
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
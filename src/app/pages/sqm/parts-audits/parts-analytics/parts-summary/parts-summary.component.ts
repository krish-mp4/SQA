import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-parts-summary',
  templateUrl: './parts-summary.component.html',
  styleUrls: ['./parts-summary.component.scss']
})
export class PartsSummaryComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  // ✅ Filter model for ngModel bindings
  filters = {
    vertical: '',
    engineer: '',
    year: '',
    month: ''
  };

  onSearch(): void {
    console.log('Filters applied:', this.filters);
    // call your API / filter logic here
  }

  tableData = {
    checked: 250,
    nc: 80,
    parameters: 7702,
    safety: 19,
    critical: 1,
    important: 5,
    fitment: 146,
    awaitingReports: 175
  };

  private piePlotOptions: Highcharts.Options['plotOptions'] = {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f}%'
      }
    }
  };

  partCriticalityOptions: Highcharts.Options = {
    chart: { type: 'pie', backgroundColor: 'transparent' },
    title: { text: '' },
    credits: { enabled: false },
    plotOptions: {
      pie: {
        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}%' },
        showInLegend: false
      }
    },
    series: [{
      type: 'pie',
      data: [
        { name: 'Safety', y: 16, color: '#87ceeb' },
        { name: 'Important', y: 50, color: '#008000' },
        { name: 'Others', y: 33, color: '#ff0000' },
      ]
    }]
  };

  issuesCorrectedOptions: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: 'Issues Corrected' },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: this.piePlotOptions,
    series: [{
      type: 'pie',
      name: 'Count',
      data: [
        { name: 'Corrected', y: 11, color: '#87CEEB' },
        { name: 'Pending', y: 77, color: '#27ae60' },
        { name: 'Overdue', y: 11, color: '#e74c3c' },
      ]
    }]
  };

  issuesDistributionOptions: Highcharts.Options = {
    chart: { type: 'pie' },
    title: { text: 'Issues Distribution' },
    tooltip: { pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>' },
    plotOptions: this.piePlotOptions,
    series: [{
      type: 'pie',
      name: 'Count',
      data: [
        { name: 'Safety', y: 30, color: '#87CEEB' },
        { name: 'Important', y: 40, color: '#27ae60' },
        { name: 'Critical', y: 10, color: '#e74c3c' },
        { name: 'Others', y: 20, color: '#f1c40f' },
      ]
    }]
  };

  constructor() { }
  ngOnInit(): void { }
}
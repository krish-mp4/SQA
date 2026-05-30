import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import * as Highcharts from "highcharts";

// Import the xrange module for Gantt charts
import HC_xrange from "highcharts/modules/xrange";
HC_xrange(Highcharts);

@Component({
  selector: "app-testdashboard",
  templateUrl: "./testdashboard.component.html",
  styleUrls: ["./testdashboard.component.scss"],
})
export class TestdashboardComponent implements OnInit, AfterViewInit {
  activeDashboard: "resp" | "category" | "ageing" | "rpn" = "resp";
  currentView: "graph" | "grid" = "graph";

  dashboards = [
    { key: "resp", title: "Portfolio", color: "#ffeadb" },
    { key: "category", title: "Timeline", color: "#e2f6d3" },
    { key: "ageing", title: "Budget", color: "#d7f3ff" },
    { key: "rpn", title: "Buffer", color: "#fddff1" },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  // --- RESP Data ---
  headers: string[] = ["Area", "O", "R1", "R2", "C", "Total"];
  data = [
    { area: "VEHICLE", O: 11, R1: 9, R2: 3, C: 16 },
    { area: "ELECTRICAL", O: 0, R1: 3, R2: 2, C: 3 },
    { area: "TRANSMISSION", O: 0, R1: 0, R2: 1, C: 1 },
    { area: "HYDRAULICS", O: 2, R1: 1, R2: 5, C: 5 },
    { area: "ENGINE", O: 4, R1: 1, R2: 3, C: 1 },
    { area: "IQC", O: 0, R1: 0, R2: 0, C: 0 },
    { area: "VQC", O: 3, R1: 0, R2: 2, C: 0 },
    { area: "CABIN", O: 3, R1: 1, R2: 0, C: 3 },
    { area: "LOADER", O: 0, R1: 0, R2: 0, C: 1 },
  ];
  totals = { O: 33, R1: 14, R2: 15, C: 20, Total: 82 };
  selectedCategory: string = "Distribution";

  // --- Category Data ---
  headers2: string[] = ["Category", "O", "R1", "R2", "C", "Total"];
  phoneData = [
    { category: "ASSEMBLY", O: 0, R1: 5, R2: 0, C: 2, Total: 2 },
    { category: "FUNCTION", O: 3, R1: 8, R2: 5, C: 13, Total: 26 },
    { category: "PERCEIVED QUALITY", O: 0, R1: 7, R2: 1, C: 16, Total: 32 },
    { category: "PERFORMANCE", O: 0, R1: 5, R2: 4, C: 2, Total: 11 },
    { category: "REGULATION/GOVERNMENT", O: 3, R1: 0, R2: 0, C: 0, Total: 3 },
    { category: "SAFETY", O: 2, R1: 1, R2: 3, C: 0, Total: 6 },
    { category: "SERVICE", O: 0, R1: 1, R2: 1, C: 0, Total: 2 },
  ];
  phoneTotals = { O: 20, R1: 15, R2: 14, C: 33, Total: 82 };
  selectedPhoneCategory: string = "Distribution";

 ganttData = [
  {
    task: "Phase 1: Initiation",
    start: Date.UTC(2024, 0, 1),
    end: Date.UTC(2024, 0, 10),
    completion: 100,
    color: "#28a745"
  },
  {
    task: "Phase 2: Planning",
    start: Date.UTC(2024, 0, 11),
    end: Date.UTC(2024, 0, 25),
    completion: 100,
    color: "#28a745"
  },
  {
    task: "Phase 3: Design",
    start: Date.UTC(2024, 0, 26),
    end: Date.UTC(2024, 1, 10),
    completion: 80,
    color: "#28a745"
  },
  {
    task: "Phase 4: Development",
    start: Date.UTC(2024, 1, 11),
    end: Date.UTC(2024, 2, 20),
    completion: 45,
    color: "#f4a300"
  },
  {
    task: "Phase 5: Testing",
    start: Date.UTC(2024, 2, 21),
    end: Date.UTC(2024, 3, 5),
    completion: 20,
    color: "#dc3545"
  },
  {
    task: "Phase 6: Deployment",
    start: Date.UTC(2024, 3, 6),
    end: Date.UTC(2024, 3, 12),
    completion: 0,
    color: "#adb5bd"
  },
  {
    task: "Phase 7: Support",
    start: Date.UTC(2024, 3, 13),
    end: Date.UTC(2024, 3, 30),
    completion: 0,
    color: "#adb5bd"
  }
];

  // --- Ageing Data ---
  ageingHeaders: string[] = ["Period", "Issues"];
  ageingData = [
    { PERIOD: "0-10", ISSUES: 15 },
    { PERIOD: "10-20", ISSUES: 12 },
    { PERIOD: "20-30", ISSUES: 7 },
    { PERIOD: "30-40", ISSUES: 5 },
    { PERIOD: "40-50", ISSUES: 15 },
    { PERIOD: "50-100", ISSUES: 10 },
    { PERIOD: "100+", ISSUES: 30 },
  ];
  ageingTotal = 94;

  // --- RPN Data ---
  rpnHeaders: string[] = ["RPN Range", "O", "R1", "R2", "C", "Total"];
  rpnData = [
    { range: "<200", O: 11, R1: 9, R2: 3, C: 16, Total: 39 },
    { range: "201-400", O: 0, R1: 3, R2: 2, C: 3, Total: 8 },
    { range: "401-600", O: 0, R1: 0, R2: 1, C: 1, Total: 2 },
    { range: "601-800", O: 2, R1: 1, R2: 5, C: 5, Total: 16 },
    { range: "801-1000", O: 4, R1: 1, R2: 3, C: 1, Total: 9 },
    { range: "1000+", O: 0, R1: 0, R2: 0, C: 0, Total: 0 },
  ];
  rpnTotals = { O: 33, R1: 14, R2: 15, C: 20, Total: 82 };
  selectedRpnCategory: string = "Distribution";

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.renderChartWithDelay();
  }

  setActiveDashboard(key: "resp" | "category" | "ageing" | "rpn") {
    this.activeDashboard = key;
    this.renderChartWithDelay();
  }

  setView(view: "graph" | "grid") {
    this.currentView = view;
    this.renderChartWithDelay();
  }

  renderChartWithDelay() {
    setTimeout(() => this.renderActiveChart(), 0);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
    this.renderChartWithDelay();
  }
  isPieChartMode() {
    return this.selectedCategory !== "Distribution";
  }

  setPhoneCategory(category: string) {
    this.selectedPhoneCategory = category;
    this.renderChartWithDelay();
  }
  isPhonePieChartMode() {
    return this.selectedPhoneCategory !== "Distribution";
  }

  setRpnCategory(category: string) {
    this.selectedRpnCategory = category;
    this.renderChartWithDelay();
  }
  isRpnPieChartMode() {
    return this.selectedRpnCategory !== "Distribution";
  }

  renderActiveChart() {
    switch (this.activeDashboard) {
      case "resp":
        this.renderRespChart();
        break;
      case "category":
        this.renderGanttChart();
        break;
      case "ageing":
        this.renderAgeingChart();
        break;
      case "rpn":
        this.renderRpnChart();
        break;
    }
  }

  renderRespChart() {
    if (this.isPieChartMode()) {
      let data;
      if (this.selectedCategory === "Total") {
        data = this.data.map((d) => ({
          name: d.area,
          y: (d.O || 0) + (d.R1 || 0) + (d.R2 || 0) + (d.C || 0),
        }));
      } else {
        // @ts-ignore
        data = this.data.map((d) => ({
          name: d.area,
          y: d[this.selectedCategory] || 0,
        }));
      }
      this.renderPieChart(
        "pieChartContainer",
        data,
        "RESP Area - " + this.selectedCategory,
      );
    } else {
      const series = ["O", "R1", "R2", "C"].map((key) => ({
        name: key,
        // @ts-ignore
        data: this.data.map((d) => d[key]),
      }));
      const categories = this.data.map((d) => d.area);
      this.renderBarChart(
        "barChartContainer",
        series,
        categories,
        "RESP Area Distribution",
      );
    }
  }

  // --- Updated Gantt Chart Renderer ---
renderGanttChart() {
  const containerId = 'ganttChartContainer';
  const container = document.getElementById(containerId);

  if (!container) {
    return;
  }

  Highcharts.chart(containerId, {
    chart: {
      type: 'xrange',
      height: 450
    },

    title: {
      text: 'Project Timeline'
    },

    credits: {
      enabled: false
    },

    xAxis: {
      type: 'datetime'
    },

    yAxis: {
      title: {
        text: 'Project Stages'
      },
      categories: this.ganttData.map(x => x.task),
      reversed: true
    },

    tooltip: {
      pointFormat:
        '<b>{point.task}</b><br>' +
        'Start: {point.x:%e %b %Y}<br>' +
        'End: {point.x2:%e %b %Y}<br>' +
        'Progress: {point.completion}%'
    },

    plotOptions: {
      xrange: {
        borderRadius: 3
      }
    },

    series: [
      {
        type: 'xrange',
        name: 'Phases',
        pointWidth: 24,
        data: this.ganttData.map((item, index) => ({
  x: item.start,
  x2: item.end,
  y: index,
  color:
    item.completion >= 75
      ? '#28a745'
      : item.completion > 0
      ? '#f4a300'
      : '#adb5bd',
  partialFill: {
    amount: item.completion / 100,
    fill:
      item.completion >= 75
        ? '#28a745'
        : item.completion > 0
        ? '#f4a300'
        : '#adb5bd'
  },
  task: item.task,
  completion: item.completion
}))
      } as any
    ]
  });
}

  renderAgeingChart() {
    const ageingData = this.ageingData.map((d) => ({
      name: d.PERIOD,
      y: d.ISSUES,
    }));
    this.renderPieChart(
      "ageingPieChartContainer",
      ageingData,
      "Ageing Analysis",
    );
  }

  renderRpnChart() {
    if (this.isRpnPieChartMode()) {
      // @ts-ignore
      const data = this.rpnData.map((d) => ({
        name: d.range,
        y: d[this.selectedRpnCategory] || 0,
      }));
      this.renderPieChart(
        "rpnPieChartContainer",
        data,
        "RPN - " + this.selectedRpnCategory,
      );
    } else {
      const series = ["O", "R1", "R2", "C"].map((key) => ({
        name: key,
        // @ts-ignore
        data: this.rpnData.map((d) => d[key]),
      }));
      const categories = this.rpnData.map((d) => d.range);
      this.renderBarChart(
        "rpnBarChartContainer",
        series,
        categories,
        "RPN Distribution",
      );
    }
  }

  renderPieChart(containerId: string, data: any[], title: string) {
    const container = document.getElementById(containerId);
    if (!container) return;
    Highcharts.chart(containerId, {
      chart: { type: "pie" },
      title: { text: title },
      tooltip: { pointFormat: "{series.name}: <b>{point.y}</b>" },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [{ type: "pie", name: "Issues", colorByPoint: true, data: data }],
    });
  }

  renderBarChart(
    containerId: string,
    series: any[],
    categories: string[],
    title: string,
  ) {
    const container = document.getElementById(containerId);
    if (!container) return;
    Highcharts.chart(containerId, {
      chart: { type: "column" },
      title: { text: title },
      xAxis: { categories: categories, crosshair: true },
      yAxis: { min: 0, title: { text: "Total Count" } },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
      },
      plotOptions: {
        column: { stacking: "normal", dataLabels: { enabled: false } },
      },
      series: series,
    });
  }
}

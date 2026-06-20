import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DefectsPopComponent } from '../defects-pop/defects-pop.component';

@Component({
  selector: 'app-defects-pop-master',
  templateUrl: './defects-pop-master.component.html',
  styleUrls: ['./defects-pop-master.component.scss']
})
export class DefectsPopMasterComponent implements OnInit {

  gridCells: any[] = [];

  defectsConfig = {
    palette: [
      { name: 'red',         bgColor: '#dc2626', textColor: '#ffffff' },
      { name: 'orange',      bgColor: '#f97316', textColor: '#ffffff' },
      { name: 'light-red',   bgColor: '#fca5a5', textColor: '#7f1d1d' },
      { name: 'light-pink',  bgColor: '#fecaca', textColor: '#991b1b' },
      { name: 'light-green', bgColor: '#bbf7d0', textColor: '#14532d' },
      { name: 'gray',        bgColor: '#6b7280', textColor: '#ffffff' }
    ],
    rows: [
      {
        rowIndex: 0,
        cells: [
          { colIndex: 0, label: 'Sink Mark',   colorIndex: 0 },
          { colIndex: 1, label: 'Thick Paint', colorIndex: 0 },
          { colIndex: 2, label: 'Dent',        colorIndex: 0 },
          { colIndex: 3, label: 'Short Fill',    colorIndex: 0 },
          { colIndex: 4, label: 'Start up',                  colorIndex: 0 }
        ]
      },
      {
        rowIndex: 1,
        cells: [
          { colIndex: 0, label: 'OCR Status', colorIndex: 0 },
          { colIndex: 1, label: 'Burn Mark', colorIndex: 0 },
          { colIndex: 2, label: 'Damage', colorIndex: 0 },
          { colIndex: 3, label: 'Flash', colorIndex: 0 },
          { colIndex: 4, label: 'Flow Mark', colorIndex: 0 }
        ]
      },
      {
        rowIndex: 2,
        cells: [
          { colIndex: 0, label: 'Gate Cut', colorIndex: 0 },
          { colIndex: 1, label: 'Oil Mark', colorIndex: 0 },
          { colIndex: 2, label: 'Patch Mark', colorIndex: 0 },
          { colIndex: 3, label: 'Pin Mark', colorIndex: 0 },
          { colIndex: 4, label: 'Scratches', colorIndex: 0 }
        ]
      },
      {
        rowIndex: 3,
        cells: [
          { colIndex: 0, label: 'Shining Mark', colorIndex: 0 },
          { colIndex: 1, label: 'Silver Streaks', colorIndex: 0 },
          { colIndex: 2, label: 'Others', colorIndex: 0 },
          { colIndex: 3, label: 'Warpage/Bend', colorIndex: 0 },
          { colIndex: 4, label: '', colorIndex: 4 }
        ]
      },
      {
        rowIndex: 4,
        cells: [
          { colIndex: 0, label: '',          colorIndex: 4 },
          { colIndex: 1, label: '',          colorIndex: 4 },
          { colIndex: 2, label: '', colorIndex: 4 },
          { colIndex: 3, label: '',          colorIndex: 4 },
          { colIndex: 4, label: '',          colorIndex: 4 }
        ]
      },
      {
        rowIndex: 5,
        cells: [
          { colIndex: 0, label: '', colorIndex: 4 },
          { colIndex: 1, label: '', colorIndex: 4 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 6,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 7,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 8,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      },
      {
        rowIndex: 8,
        cells: [
          { colIndex: 0, label: '', colorIndex: 5 },
          { colIndex: 1, label: '', colorIndex: 5 },
          { colIndex: 2, label: '', colorIndex: 5 },
          { colIndex: 3, label: '', colorIndex: 5 },
          { colIndex: 4, label: '', colorIndex: 5 }
        ]
      }
    ]
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DefectsPopComponent>
  ) { }

  ngOnInit(): void {
  this.gridCells = this.defectsConfig.rows.reduce((acc: any[], row) => {
    const cells = row.cells.map(cell => {
      const color = this.defectsConfig.palette[cell.colorIndex];
      return {
        label: cell.label,
        colorIndex: cell.colorIndex,
        bgColor: color.bgColor,
        textColor: color.textColor
      };
    });
    return acc.concat(cells);
  }, []);
}

  toggleColor(cell: any) {
    cell.colorIndex = (cell.colorIndex + 1) % this.defectsConfig.palette.length;
    const color = this.defectsConfig.palette[cell.colorIndex];
    cell.bgColor = color.bgColor;
    cell.textColor = color.textColor;
  }

  close() {
    this.dialogRef.close();
  }

}
import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public dataSourceSettings: IDataOptions;
  public gridSettings: GridSettings;
  getPivotData(): IDataSet[] {
    let pivotData: IDataSet[] = [
      { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 75, 'Amount': 127800, 'Country': 'France', 'Products': 'Road Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
      { 'Sold': 16, 'Amount': 23989, 'Country': 'Germany', 'Products': 'Road Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 31, 'Amount': 49460.5, 'Country': 'Germany', 'Products': 'Touring Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 76, 'Amount': 129504, 'Country': 'Germany', 'Products': 'Mountain Bikes', 'Year': 'FY 2018', 'Quarter': 'Q1' },
      { 'Sold': 77, 'Amount': 131208, 'Country': 'United Kingdom', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
      { 'Sold': 30, 'Amount': 44975, 'Country': 'United Kingdom', 'Products': 'Road Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' },
      { 'Sold': 45, 'Amount': 71797.5, 'Country': 'United Kingdom', 'Products': 'Touring Bikes', 'Year': 'FY 2017', 'Quarter': 'Q1' },
    ];
    return pivotData;
  }
  ngOnInit(): void {
    this.gridSettings = {
      columnWidth: 140
    } as GridSettings;
    this.dataSourceSettings = {
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        dataSource: this.getPivotData(),
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        expandAll: false,
        filters: [],
        conditionalFormatSettings: [
          {
            value1: 729,
            value2: 50,
            conditions: 'Between',
            style: {
              backgroundColor: '#80cbc4',
              color: 'black',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            }
          },
          {
            value1: 600,
            value2: 25,
            conditions: 'Between',
            style: {
            backgroundColor: '#f48fb1',
            color: 'black',
            fontFamily: 'Tahoma',
            fontSize: '12px'
            }
          }
        ] 
      };
    }
   
 };
  
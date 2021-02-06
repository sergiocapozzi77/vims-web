import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-viewer',
  templateUrl: './alarm-viewer.component.html',
  styleUrls: ['./alarm-viewer.component.scss']
})
export class AlarmViewerComponent {
  private gridApi;
  private gridColumnApi;

  public rowData;
  public columnDefs;
  public defaultColDef;
  public autoGroupColumnDef;
  public groupDefaultExpanded;
  public getDataPath;
  public getRowNodeId;

  constructor() {
    this.rowData = [
      {
        id: 'aa',
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        id: 'bb',
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        id: 'cc',
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
      {
        id: 'dd',
        make: 'BMW',
        model: '5 Series',
        price: 59000,
      },
      {
        id: 'ee',
        make: 'Dodge',
        model: 'Challanger',
        price: 35000,
      },
      {
        id: 'ff',
        make: 'Mazda',
        model: 'MX5',
        price: 28000,
      },
      {
        id: 'gg',
        make: 'Horse',
        model: 'Outside',
        price: 99000,
      },
      {
        id: 'aa1',
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        id: 'bb1',
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        id: 'cc1',
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
      {
        id: 'dd1',
        make: 'BMW',
        model: '5 Series',
        price: 59000,
      },
      {
        id: 'ee1',
        make: 'Dodge',
        model: 'Challanger',
        price: 35000,
      },
      {
        id: 'ff1',
        make: 'Mazda',
        model: 'MX5',
        price: 28000,
      },
      {
        id: 'gg1',
        make: 'Horse',
        model: 'Outside',
        price: 99000,
      },
    ];
    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      {
        field: 'price',
        filter: 'agNumberColumnFilter',
      },
    ];
    this.defaultColDef = { flex: 1 };

    this.groupDefaultExpanded = -1;
    this.getRowNodeId = function (data) {
      return data.id;
    };
  }

  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      document.getElementById('filter-text-box').nodeValue
    );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}

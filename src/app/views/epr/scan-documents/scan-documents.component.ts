import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-documents',
  templateUrl: './scan-documents.component.html',
  styleUrls: ['./scan-documents.component.scss']
})
export class ScanDocumentsComponent implements OnInit {

  dataLocalUrl = 'http://10.90.10.18/BwcOpdRecordApi/api/OpdRecord/GetDocument/81-17-000017/373';

  constructor() { }

  ngOnInit() {
  }

}

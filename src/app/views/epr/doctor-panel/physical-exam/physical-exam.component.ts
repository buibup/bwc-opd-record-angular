import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-physical-exam',
  templateUrl: './physical-exam.component.html',
  styleUrls: ['./physical-exam.component.scss']
})
export class PhysicalExamComponent implements OnInit {

    // PhysicalExams AntiAgings
    @Input() openedPhysicalExamAntiAging = false;
    @Input() openedPEAntiAgingsHistory = false;
    @Input() openedPEAntiAgingsGenetic = false;
    @Input() openedPEAntiAgingsFamilyHistory = false;
    @Input() openedPEAntiAgingsPhysicalExamination = false;

  constructor() { }

  ngOnInit() {
  }

}

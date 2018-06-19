import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() opened = false;
  @Input() title: string;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  // Vital Signs OPD
  @Input() openedVitalSignsOPD = false;

  // PhysicalExams AntiAgings
  @Input() openedPhysicalExamAntiAging = false;
  @Input() openedPEAntiAgingsHistory = false;
  @Input() openedPEAntiAgingsGenetic = false;
  @Input() openedPEAntiAgingsFamilyHistory = false;
  @Input() openedPEAntiAgingsPhysicalExamination = false;

  // Diet
  @Input() openedDiet = false;
  @Input() openedDietaryPatterns = false;
  @Input() openedBehavioralConsumption = false;

  // Exercise
  @Input() openedExercise = false;
  @Input() openedBwcExercise = false;

  // Plan and Treatment
  @Input() openedBwcTreatment = false;
  @Input() openedPlanAndTreatment = false;
  @Input() openedPlan = false;
  @Input() openedTreatment = false;

  constructor() { }

  ngOnInit() {
  }

}

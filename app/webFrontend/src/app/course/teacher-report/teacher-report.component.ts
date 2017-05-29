import { Component, OnInit } from '@angular/core';
import {CourseService, UnitService} from '../../shared/services/data.service';

@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.scss']
})
export class TeacherReportComponent implements OnInit {

  constructor(private courseService: CourseService,
              private unitService: UnitService) { }

  ngOnInit() {
  }

}

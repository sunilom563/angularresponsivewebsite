import { Component, OnDestroy, OnInit } from '@angular/core';
import { SujithService } from '../sujith.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy{
  suni="saas"
  constructor(private service: SujithService) { 
  this.suni=this.service.abdc
  }

  ngOnInit(): void {
  }
ngOnDestroy(): void {
  this.service.abdc=this.suni
    
}
}

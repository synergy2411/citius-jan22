import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    console.log("[SNAPSHOT] ", this.route.snapshot.queryParams)
    this.route.queryParams.subscribe(params => console.log(params))
  }

}

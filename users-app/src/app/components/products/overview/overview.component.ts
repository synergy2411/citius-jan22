import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  prodId : string;
  prodName : string;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.prodId = this.route.snapshot.params['id']
    // this.prodName = this.route.snapshot.params['prodName']
    this.route.params.subscribe((params) => {
      this.prodName = params['prodName']
    })
  }

}

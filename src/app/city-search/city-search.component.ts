import { FormControl } from '@angular/forms'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  searchControl: FormControl = new FormControl()
  constructor() {}

  ngOnInit() {}
}

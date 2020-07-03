import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.scss'],
})
export class DatalistComponent implements OnInit {
  public datalist = [];
  public rawDataList = [];
  public filterForm = new FormGroup({
    searchValue: new FormControl(''),
    filterType: new FormControl(''),
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data: any) => {
      this.datalist = data.data;
      this.rawDataList = data.data;
    });
  }

  sort(property) {
    this.datalist.sort((a, b) => {
      if (
        a.attributes[property.toString()] < b.attributes[property.toString()]
      ) {
        return -1;
      }
      if (
        a.attributes[property.toString()] > b.attributes[property.toString()]
      ) {
        return 1;
      }
      return 0;
    });
  }

  search(searchValue: string) {
    this.datalist = this.datalist.filter((data) => {
      return data.attributes.content
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
  }

  filter(filterType: string) {
    this.datalist = this.datalist.filter((data) => {
      return data.attributes.display_properties.type.includes(filterType);
    });
  }

  onSubmit() {
    this.datalist = this.rawDataList;
    const filter = this.filterForm.value;
    if (filter.filterType === '') {
      this.search(filter.searchValue);
    } else if (filter.searchValue === '') {
      this.filter(filter.filterType);
    } else {
      this.search(filter.searchValue);
      this.filter(filter.filterType);
    }
  }
}

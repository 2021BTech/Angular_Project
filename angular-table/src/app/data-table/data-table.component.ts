import { Component, OnInit } from '@angular/core';

 export interface Supplier {
  name: string,
  address: string,
  phone: string,
  email: string
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent implements OnInit {

  suppliers: Array<Supplier> = [
    {
      name: 'supplier 1',
      address: 'address 1',
      phone: '0123456789',
      email: 'supplier1@example.com'
    },
    {
      name: 'supplier 2',
      address: 'address 2',
      phone: '0123456789',
      email: 'supplier2@example.com'
    },
    {
      name: 'supplier 3',
      address: 'address 3',
      phone: '0123456789',
      email: 'supplier3@example.com'
    },
    {
      name: 'supplier 4',
      address: 'address 4',
      phone: '0123456789',
      email: 'supplier4@example.com'
    },
    {
      name: 'supplier 5',
      address: 'address 5',
      phone: '0123456789',
      email: 'supplier5@example.com'
    },
    {
      name: 'supplier 6',
      address: 'address 6',
      phone: '0123456789',
      email: 'supplier6@example.com'
    },
    {
      name: 'supplier 7',
      address: 'address 7',
      phone: '0123456789',
      email: 'supplier7@example.com'
    },
    {
      name: 'supplier 8',
      address: 'address 8',
      phone: '0123456789',
      email: 'supplier8@example.com'
    },
    {
      name: 'supplier 9',
      address: 'address 9',
      phone: '0123456789',
      email: 'supplier9@example.com'
    },
    {
      name: 'supplier 10',
      address: 'address 10',
      phone: '0123456789',
      email: 'supplier0@example.com'
    },
    {
      name: 'supplier 11',
      address: 'address 11',
      phone: '0123456789',
      email: 'supplier11@example.com'
    },
  ]

  currentPage: number = 1;
  pageSize: number = 5;
  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<number> = [5, 10, 20];

  
  ngOnInit(): void {
    this.visibleData();
    this.pageNumbers()
}

  visibleData(){
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    return this.filteredSupplier.slice(startIndex, endIndex);
  }

  nextPage(){
    if (this.currentPage * this.pageSize < this.suppliers.length) {
      this.currentPage++;
      this.visibleData();
    }
  }

  prevPage(){
    if (this.currentPage > 1) {
      this.currentPage--;
      this.visibleData();
    }
  }

  pageNumbers(){
    let pages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    let pageArray = new Array(pages)
    return pageArray
  }

  changePage(pageNumber: number){
    this.currentPage = pageNumber;
    this.visibleData();
  }

  filterData( searchTerm: string){
    this.filteredSupplier = this.suppliers.filter((item) =>
      Object.values(item).some((val) =>
        val.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    this.currentPage = 1;
    this.visibleData();
  }

  changePageSize(sort: any){
    this.pageSize = sort;
    this.visibleData();
  }
}

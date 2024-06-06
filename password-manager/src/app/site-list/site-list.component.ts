import { Component } from '@angular/core';
import { PasswordManagerService } from '../../services/password-manager.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrl: './site-list.component.css'
})
export class SiteListComponent {
allSites !: Observable<Array<any>>

  constructor(private passwordManagerService: PasswordManagerService) {
    this.loadSites();
  } 

  onSubmit(values: object): void{
    console.log(values);
    this.passwordManagerService.addSite(values)
    .then(() => {
      console.log('Data Saved Successfully');
    })
    .catch(err => {
      console.log('Error saving Data', err);   
    })
  }

  loadSites(){
   this.allSites =  this.passwordManagerService.loadSites()
  }
} 

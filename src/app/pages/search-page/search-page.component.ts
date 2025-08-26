import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { ProfileService } from '../../data/services/profile.service'; 
import { Profile } from '../../data/interface/profile.interface';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService:ProfileService = inject(ProfileService); //сохраняем инстанс класса ProfileService
  profiles:Profile[] = []
  constructor(){ //описываем как мы будем общаться с бекендом
    this.profileService.getTestAccounts()
    .subscribe((val) => {
      this.profiles = val
    })


  }
}

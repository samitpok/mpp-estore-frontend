import { Component } from '@angular/core';
import { TokenStorageService } from './service/token-storage.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Mpp project starting';
  private roles: string[] = [];
  isLoggedIn = false;
  showUploadProduct = false;
  username?: string;

  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private tokenStorageService: TokenStorageService, private cartService : CartService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showUploadProduct = this.roles.includes('ROLE_SELLER');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })

  }


  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}

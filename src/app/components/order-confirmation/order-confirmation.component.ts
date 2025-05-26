import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-order-confirmation',
  imports: [],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  @Input() fullName: string = '';
  @Input() total: number = 0;

  constructor(private router: Router, private route: ActivatedRoute ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { fullName: string; total: number } ;
    if (state) {
      this.fullName = state.fullName || '';
      this.total = state.total || 0;


    } else {
      // If no state is provided, redirect to products page
      this.router.navigate(['/products']);
    }


  }

  ngOnInit() {
    console.log('OrderConfirmationComponent initialized');

   /*  const navigation = this.router.getCurrentNavigation();
    console.log('navigation:', navigation);

    if (navigation && navigation.extras && navigation.extras.state) {
      const state = naving serve
      gation.extras.state as { fullName: string; total: number };
      this.fullName = state.fullName || '';
      this.total = state.total || 0;
    }
    else {
      this.router.navigate(['/products']);
      return;
    } */
  }



  goBackToProducts() {
    this.router.navigate(['/products']);
  }

}

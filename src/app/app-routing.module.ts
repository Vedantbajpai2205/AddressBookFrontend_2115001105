import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './components/address-book/address-book.component';

const routes: Routes = [
  { path: 'address-book', component: AddressBookComponent },
  { path: '', redirectTo: '/address-book', pathMatch: 'full' },
  { path: '**', redirectTo: 'address-book' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

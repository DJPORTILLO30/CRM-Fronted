import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calls',
    loadChildren: () => import('@modules/calls/calls.module').then(m => m.CallsModule)
  },
  {
    path: 'contacs',
    loadChildren: () => import('@modules/contacs/contacs.module').then(m => m.ContacsModule)
  },
  {
    path: 'campaign',
    loadChildren: () => import('@modules/campaign/campaign.module').then(m => m.CampaignModule)
  },
  {
    path: 'products',
    loadChildren: () => import('@modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'bussnies',
    loadChildren: () => import('@modules/bussnies/bussnies.module').then(m => m.BussniesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

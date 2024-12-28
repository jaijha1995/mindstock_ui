import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlgoComponent } from './components/algo-page/algo/algo.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { ConnectMetaFourComponent } from './components/algo-page/connect-meta-four/connect-meta-four.component';
import { ConnectMetaFiveComponent } from './components/algo-page/connect-meta-five/connect-meta-five.component';

const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent,
    children: [
      {
        path : '', pathMatch: "full", redirectTo: "algo"
      },
      {
        path: 'algo', component: AlgoComponent, 
        children:[
          {
            path:'meta-four',component:ConnectMetaFourComponent
          },
          {
            path:'meta-five',component:ConnectMetaFiveComponent
          }
        ]
      },
      {
        path: 'investment', component: InvestmentComponent
      },
      {
        path: 'indicator', component: IndicatorComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardManageRoutingModule { }

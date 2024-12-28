import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardManageRoutingModule } from './dashboard-manage-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AlgoComponent } from './components/algo-page/algo/algo.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { AlgoHeaderComponent } from './components/algo-page/algo-header/algo-header.component';
import { AlgoSidenavComponent } from './components/algo-page/algo-sidenav/algo-sidenav.component';
import { ConnectMetaFourComponent } from './components/algo-page/connect-meta-four/connect-meta-four.component';
import { ConnectMetaFiveComponent } from './components/algo-page/connect-meta-five/connect-meta-five.component';
import { SharedModule } from '../../../shared/shared.module';
import { LoginMetaDetailComponent } from './components/algo-page/login-meta-detail/login-meta-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AlgoComponent,
    InvestmentComponent,
    IndicatorComponent,
    AlgoHeaderComponent,
    AlgoSidenavComponent,
    ConnectMetaFourComponent,
    ConnectMetaFiveComponent,
    LoginMetaDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardManageRoutingModule,
    SharedModule
  ]
})
export class DashboardManageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        NgCircleProgressModule.forRoot({
            backgroundStrokeWidth: 3,
            outerStrokeWidth: 16,
            outerStrokeColor: '#8000FF',
            outerStrokeGradient: true,
            outerStrokeGradientStopColor: '#FF00CB',
            backgroundStroke: '#33003F',
            animationDuration: 300,
            animation: false,
            responsive: true,
            renderOnClick: false,
            maxPercent: 100,
            showTitle: true,
            showSubtitle: false,
            showUnits: false,
            showZeroOuterStroke: false,
            showInnerStroke: false,
            titleColor: '#FFF'
        })
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}

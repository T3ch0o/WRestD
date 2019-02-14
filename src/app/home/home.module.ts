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
            backgroundGradient: true,
            backgroundGradientStopColor: '#650071',
            backgroundOpacity: 0.05,
            outerStrokeWidth: 16,
            outerStrokeColor: '#8000FF',
            outerStrokeGradient: true,
            outerStrokeGradientStopColor: '#FF00CB',
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DatalistComponent } from './datalist/datalist.component';
import { CustomtextComponent } from './customtext/customtext.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  {
    path: 'content',
    component: ContentComponent,
    children: [
      { path: 'datalist', component: DatalistComponent },
      { path: 'customtext', component: CustomtextComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  ContentComponent,
  LandingpageComponent,
  DatalistComponent,
  CustomtextComponent,
];

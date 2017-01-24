import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent} from './first/first.component';
import { AComponent} from './a/a.component';
import { ZComponent} from './z/z.component';
import { LightComponent} from './light/light.component';
import { DarkComponent} from './dark/dark.component';
import { WaterComponent } from './water/water.component';
import { SolidComponent } from './solid/solid.component';






const appRoutes: Routes = [
  {
  path: 'home',
  component: HomeComponent
},
{
  path: 'first',
  component: FirstComponent
},
{
  path: 'a',
  component: AComponent
},
{
  path: 'z',
  component: ZComponent
},
{
  path: 'light',
  component: LightComponent
},
{
  path: 'dark',
  component: DarkComponent
},
{
  path: 'water',
  component: WaterComponent
},
{
  path: 'solid',
  component: SolidComponent
}

];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

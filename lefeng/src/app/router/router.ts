import {RouterModule,Routes} from '@angular/router';
import {CarComponent} from '../components/car/car.component';
import {MyComponent} from '../components/my/my.component';
import {GoodslistComponent} from '../components/goodslist/goodslist.component';
import {ClassifyComponent} from '../components/classify/classify.component';
import {ShoppingComponent} from '../components/shopping/shopping.component';
import {HomeComponent} from '../components/home/home.component';
import {SuperSellComponent} from '../components/super-sell/super-sell.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';

const appRoutes: Routes = [
	{
		path:'',
		component:HomeComponent,
		children:[
			{path:'shopping',component:ShoppingComponent},
			{path:'car',component:CarComponent},
			{path:'classify',component:ClassifyComponent},
			{path:'my',component:MyComponent},
			{path:'super',component:SuperSellComponent},
			
		]
	},
	{path:'login',component:LoginComponent},
	{path:'goodslist',component:GoodslistComponent},
	{path:'regster',component:RegisterComponent},
	
]

export const RootRouter = RouterModule.forRoot(
	appRoutes,
	{ enableTracing: false}
)
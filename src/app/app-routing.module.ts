import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'}, // wehave to add pathMatch when we're always redirecting
    {path: 'recipes', component: RecipeBookComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', component: ErrorPageComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
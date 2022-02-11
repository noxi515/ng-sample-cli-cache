import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'hoge', loadChildren: () => import('./hoge/hoge.module').then(m => m.HogeModule) }, { path: 'fuga', loadChildren: () => import('./fuga/fuga.module').then(m => m.FugaModule) }, { path: 'piyo', loadChildren: () => import('./piyo/piyo.module').then(m => m.PiyoModule) }, { path: 'bar', loadChildren: () => import('./bar/bar.module').then(m => m.BarModule) }, { path: 'foo', loadChildren: () => import('./foo/foo.module').then(m => m.FooModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

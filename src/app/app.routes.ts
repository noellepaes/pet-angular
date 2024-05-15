import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'tabela' },
  {
    path: 'tabela',
    loadChildren: () =>
      import('./tabela/tabela/tabela.module').then((m) => m.TabelaModule),
  },
];

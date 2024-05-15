import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Tabela } from '../model/course';
@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
})
export class TabelaComponent implements OnInit{

  tabela: Tabela[] = [
    {
      _id: '1', nome: 'branca', apelido: 'suricato' }
  ];
  dispayedColumns = ['nome', 'apelido']

  constructor() {}

  ngOnInit(): void {

  }
}

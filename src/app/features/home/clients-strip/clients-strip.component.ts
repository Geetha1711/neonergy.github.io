import { Component } from '@angular/core';
import { Client } from '../../../core/models/team.model';
import { CLIENTS } from '../../../core/data/team.data';

@Component({
  selector: 'app-clients-strip',
  standalone: true,
  imports: [],
  templateUrl: './clients-strip.component.html',
  styleUrls: ['./clients-strip.component.scss'],
})
export class ClientsStripComponent {
  clients: Client[] = CLIENTS;
}

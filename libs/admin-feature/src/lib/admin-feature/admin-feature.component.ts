import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fortune-cookie-admin-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-feature.component.html',
  styleUrls: ['./admin-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureComponent {}

//material.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule}from '@angular/material/toolbar';
import { MatButtonModule} 	from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatDialogModule}from '@angular/material/dialog';
import { MatDividerModule}from '@angular/material/divider';
import { MatIconModule}from '@angular/material/icon';

import { MatInputModule}from '@angular/material/input';
import { MatListModule}from '@angular/material/list';

import { MatProgressBarModule}from '@angular/material/progress-bar';
import { MatRadioModule}from '@angular/material/radio';

import { MatSelectModule}from '@angular/material/select';


const MaterialComponents = [
		MatFormFieldModule, 
		MatButtonModule,
		MatCardModule,
		MatDialogModule,
		MatDividerModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressBarModule,
		MatRadioModule,
		MatSelectModule,
		MatToolbarModule,
];

@NgModule({
    imports: [MaterialComponents, FormsModule],
    exports: [MaterialComponents, FormsModule]
})
export class MaterialModule {}
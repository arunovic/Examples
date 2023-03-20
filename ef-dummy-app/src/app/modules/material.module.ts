//material.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatAutocompleteModule } 	from '@angular/material/autocomplete';

import { MatBadgeModule } 			from  '@angular/material/badge';
import { MatBottomSheetModule } 	from '@angular/material/bottom-sheet';
import { MatButtonModule} 	from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatCardModule} from '@angular/material/card';

import { MatCheckboxModule}from '@angular/material/checkbox';
import { MatChipsModule}from '@angular/material/chips';
import { MatDatepickerModule}from '@angular/material/datepicker';
import { MatDialogModule}from '@angular/material/dialog';
import { MatDividerModule}from '@angular/material/divider';
import { MatExpansionModule}from '@angular/material/expansion';
import { MatGridListModule}from '@angular/material/grid-list';
import { MatIconModule}from '@angular/material/icon';

import { MatInputModule}from '@angular/material/input';
import { MatListModule}from '@angular/material/list';
import { MatMenuModule}from '@angular/material/menu';

import { MatPaginatorModule}from '@angular/material/paginator';
import { MatProgressBarModule}from '@angular/material/progress-bar';
import { MatProgressSpinnerModule}from '@angular/material/progress-spinner';
import { MatRadioModule}from '@angular/material/radio';

import { MatSelectModule}from '@angular/material/select';
import { MatSidenavModule}from '@angular/material/sidenav';
import { MatSliderModule}from '@angular/material/slider';
import { MatSlideToggleModule}from '@angular/material/slide-toggle';
import { MatSnackBarModule}from '@angular/material/snack-bar';
import { MatSortModule}from '@angular/material/sort';
import { MatStepperModule}from '@angular/material/stepper';
import { MatTableModule}from '@angular/material/table';
import { MatTabsModule}from '@angular/material/tabs';
import { MatToolbarModule}from '@angular/material/toolbar';
import { MatTooltipModule}from '@angular/material/tooltip';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { DragDropModule } from '@angular/cdk/drag-drop';



const MaterialComponents = [
		MatFormFieldModule, 
		MatAutocompleteModule,
		MatBadgeModule,
		MatBottomSheetModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule, MatNativeDateModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,

		DragDropModule,
		MatRippleModule
];

@NgModule({
    imports: [MaterialComponents, FormsModule, MatExpansionModule, MatToolbarModule],
    exports: [MaterialComponents, FormsModule, MatExpansionModule, MatToolbarModule]
})
export class MaterialModule {}
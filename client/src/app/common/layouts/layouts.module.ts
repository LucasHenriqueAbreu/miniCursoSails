import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { blankComponent } from "./blank.component";
import { BasicComponent } from "./basic.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
} from '@angular/material';


@NgModule({
    declarations: [
        blankComponent,
        BasicComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
    ],

    exports: [blankComponent, BasicComponent]
})

export class LayoutsModule { }
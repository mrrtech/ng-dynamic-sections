import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ActionStepsComponent } from './components/action-steps/action-steps.component';
import { AccordionModule} from 'primeng/accordion';
import { ConfirmDialogModule} from 'primeng/confirmdialog';
import { DialogModule} from 'primeng/dialog';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],

  declarations: [
    AppComponent,
    ActionStepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AccordionModule,
    ConfirmDialogModule,
    DialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

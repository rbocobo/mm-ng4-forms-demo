import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewContactFormComponent } from './new-contact-form/new-contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    NewContactFormComponent,
    SignupFormComponent,
    TopicsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

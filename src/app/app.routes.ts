import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SmartphoneComponent } from './components/smartphone/smartphone.component';
import { NotebookComponent } from './components/notebook/notebook.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'smartphone', component: SmartphoneComponent },
    { path: 'notebook', component: NotebookComponent },
];

import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PublicationDetailComponent } from './pages/publication-detail/publication-detail.component';
import { PublicationsComponent } from './pages/publications/publications.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, title: 'Ghibli613 | Portfolio' },
	{ path: 'projects', component: ProjectsComponent, title: 'Projects | Ghibli613' },
	{ path: 'projects/:slug', component: ProjectDetailComponent, title: 'Project Story | Ghibli613' },
	{
		path: 'publications',
		component: PublicationsComponent,
		title: 'Scientific Publishing | Ghibli613'
	},
	{
		path: 'publications/:slug',
		component: PublicationDetailComponent,
		title: 'Publication Story | Ghibli613'
	},
	{ path: 'experience', component: ExperienceComponent, title: 'Experience | Ghibli613' },
	{ path: 'experience/:slug', component: ExperienceDetailComponent, title: 'Experience Story | Ghibli613' },
	{ path: 'about', component: AboutComponent, title: 'About | Ghibli613' },
	{ path: '**', component: NotFoundComponent, title: 'Not Found | Ghibli613' }
];

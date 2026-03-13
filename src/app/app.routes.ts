import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
		title: 'Ghibli613 | Portfolio',
		data: {
			description: 'Welcome to the portfolio of Bui Truong Giang, featuring selected projects and technical highlights.'
		}
	},
	{
		path: 'projects',
		loadComponent: () => import('./features/projects/projects.component').then((m) => m.ProjectsComponent),
		title: 'Projects | Ghibli613',
		data: {
			description: 'Explore software and machine learning projects with implementation details and source links.'
		}
	},
	{
		path: 'projects/:slug',
		loadComponent: () =>
			import('./features/project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
		title: 'Project Story | Ghibli613',
		data: {
			description: 'Read a detailed project story including context, architecture, and outcomes.'
		}
	},
	{
		path: 'publications',
		loadComponent: () =>
			import('./features/publications/publications.component').then((m) => m.PublicationsComponent),
		title: 'Scientific Publishing | Ghibli613',
		data: {
			description: 'Browse research publications, summaries, and supporting repositories.'
		}
	},
	{
		path: 'publications/:slug',
		loadComponent: () =>
			import('./features/publication-detail/publication-detail.component').then(
				(m) => m.PublicationDetailComponent
			),
		title: 'Publication Story | Ghibli613',
		data: {
			description: 'View publication details, venues, and links to paper resources.'
		}
	},
	{
		path: 'experience',
		loadComponent: () => import('./features/experience/experience.component').then((m) => m.ExperienceComponent),
		title: 'Experience | Ghibli613',
		data: {
			description: 'Review professional experience, responsibilities, and impact highlights.'
		}
	},
	{
		path: 'experience/:slug',
		loadComponent: () =>
			import('./features/experience-detail/experience-detail.component').then((m) => m.ExperienceDetailComponent),
		title: 'Experience Story | Ghibli613',
		data: {
			description: 'Read a detailed experience entry covering role context and key achievements.'
		}
	},
	{
		path: 'about',
		loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
		title: 'About | Ghibli613',
		data: {
			description: 'Learn more about Bui Truong Giang, research interests, and contact information.'
		}
	},
	{
		path: '**',
		loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
		title: 'Not Found | Ghibli613',
		data: {
			description: 'The page you requested could not be found.'
		}
	}
];

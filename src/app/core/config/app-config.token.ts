import { InjectionToken, Provider } from '@angular/core';

export interface SocialLinks {
  github: string;
  linkedin: string;
  facebook: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface AppConfig {
  appName: string;
  appDescription: string;
  baseUrl: string;
  socialLinks: SocialLinks;
  contact: ContactInfo;
  enableAnalytics: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const defaultAppConfig: AppConfig = {
  appName: 'The Ghibli613 Chronicle',
  appDescription: 'Research, Engineering, and Product Stories by Bui Truong Giang.',
  baseUrl: 'https://ghibli613.github.io',
  socialLinks: {
    github: 'https://github.com/ghibli613',
    linkedin: 'https://linkedin.com/in/ghibli613',
    facebook: 'https://facebook.com/ghibli613'
  },
  contact: {
    email: 'giang.buitruong.cs@gmail.com',
    phone: '0397357000'
  },
  enableAnalytics: true
};

export function provideAppConfig(config: AppConfig = defaultAppConfig): Provider {
  return {
    provide: APP_CONFIG,
    useValue: config
  };
}

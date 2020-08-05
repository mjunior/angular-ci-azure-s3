import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ConfigsLoaderService {
  private httpClient: HttpClient;
  private configs: Configs;
  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }

  get environment(): Configs {
    console.log('environment', this.configs);
    return this.configs;
  }

  public async loadConfigs(): Promise<any> {
    return this.httpClient
      .get('config/config.json')
      .pipe((settings) => settings)
      .toPromise()
      .then((settings: { environment: string }) => {
        console.log('AllConfigs', settings);
        this.configs = settings[settings.environment];
      });
  }
}

export interface Configs {
  apiUrl: string;
}

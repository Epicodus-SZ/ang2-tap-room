import { Keg } from './keg.model';
import { KEGS } from './mock-kegs';
import { Injectable } from '@angular/core';

@Injectable()
export class KegService {
  getKegs(): Promise<Keg[]> {
    return Promise.resolve(KEGS);
  }

  getKegsSlowly(): Promise<Keg[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getKegs()), 2000);
    });
  }

  getKeg(id: number): Promise<Keg> {
    return this.getKegs()
               .then(kegs => kegs.find(keg => keg.id === id));
  }
}

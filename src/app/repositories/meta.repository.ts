import {Injectable} from '@angular/core';

@Injectable()
export class MetaRepository {

  public contactUs(name: string, phone: string): Promise<any> {

    return fetch('http://httpbin.org/post', {
      method: 'POST',
      body: JSON.stringify({name, phone})
    })

  }

}

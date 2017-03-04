import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyProvider {

  key = "dc6zaTOxFJmzC";
  apiURL = `http://api.giphy.com/v1/gifs`

  constructor(public http: Http) { }

  private get(endpoint: string, params?: any, options?: RequestOptions) {
    if (!options) {
      options = new RequestOptions();
    }

    // Support easy query params for GET requests
    if (params) {
      let p = new URLSearchParams();
      for (let k in params) {
        p.set(k, params[k]);
      }

      p.set('api_key', this.key);
      // Set the search field if we have params and don't already have
      // a search field set in options.
      options.search = !options.search && p || options.search;
    }
    return this.http.get(this.apiURL + '/' + endpoint, options);
  }

  queries = ['yes', 'no'];

  getRandomGif() {
    let query = this.queries[Math.floor(Math.random() * 2)];
    let offset = Math.floor(Math.random() * 4000);

    console.log('searching for: ' + query);

    let params = {
      q: query,
      offset: offset,
      limit: 1
    }

    return this.get('search', params).map(res => {
      let data = res.json().data[0];
      return data.images.original.url;
    });
    // return this.get('random', params).map(res => {
    //   let data = res.json().data;
    //   return data.image_url;
    // });
  }

}

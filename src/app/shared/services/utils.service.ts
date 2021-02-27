import {Injectable} from '@angular/core';
import {parseUrl, stringify} from 'query-string';

@Injectable()
export class UtilsService {
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map(el => el + start);
  }

  addQueryParams(baseUrl: string, queryParams: object): string {
    const parsedUrl = parseUrl(baseUrl);
    const stringified = stringify({
      ...queryParams,
      ...parsedUrl.query
    });

    return `${parsedUrl.url}?${stringified}`;
  }
}

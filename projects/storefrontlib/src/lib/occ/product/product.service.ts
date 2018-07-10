import { throwError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { ConfigService } from '../config.service';

const ENDPOINT_PRODUCT = 'products';

@Injectable()
export class OccProductService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  protected getProductEndpoint() {
    return (
      this.config.server.baseUrl +
      this.config.server.occPrefix +
      this.config.site.baseSite +
      '/' +
      ENDPOINT_PRODUCT
    );
  }

  loadProduct(productCode: string): Observable<any> {
    const params = new HttpParams({
      fromString: 'fields=DEFAULT,averageRating,images(FULL),classifications'
    });

    return this.http
      .get(this.getProductEndpoint() + `/${productCode}`, { params: params })
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  loadProductReviews(productCode: string, maxCount?: number): Observable<any> {
    let url = this.getProductEndpoint() + `/${productCode}/reviews`;
    if (maxCount && maxCount > 0) {
      url += `?maxCount=${maxCount}`;
    }

    return this.http
      .get(url)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  public postProductReview(productCode: String, review: any): Observable<any> {
    const url = this.getProductEndpoint() + `/${productCode}/reviews`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = `headline=${review.title.value}&comment=${
      review.comment.value
    }&rating=${review.rating.value}&alias=${review.reviewerName.value}`;

    return this.http
      .post(url, body, { headers: headers })
      .pipe(catchError((error: any) => throwError(error.json())));
  }
  /*
  loadProductReferences(productCode: string) {
    return this.http
      .get(this.getProductEndpoint() + `/${productCode}/`, {
        params: new HttpParams().set('fields', 'productReferences')
      })
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }*/
}

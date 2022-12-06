import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:3000/api/v1";

var httpLink = {

  test:  "/",

  urlProcess: apiUrl + "/process",
  urlFreezbe: apiUrl + "/freezbe",
  urlIngredients: apiUrl + "/ingredients",

  deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailById: apiUrl + "/api/employee/getEmployeeDetailById",
  saveFreezbe: apiUrl + "/api/employee/saveEmployee"
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

//-------------------------------------------------------------------------------- 
  public getAllProcess(): Observable<any> {
    return this.webApiService.get(httpLink.urlProcess);
  }

  public getAllFreezbe(): Observable<any> {
    return this.webApiService.get(httpLink.urlFreezbe);
  }

  public getAllIngredients(): Observable<any> {
    return this.webApiService.get(httpLink.urlIngredients);
  }

//--------------------------------------------------------------------------------

public getFreezbeById(id: any): Observable<any> {
  return this.webApiService.get(httpLink.urlFreezbe + '/' + id);
}

public getIngredientsById(id: any): Observable<any> {
  return this.webApiService.get(httpLink.urlIngredients + '/' + id);
}

public getProcessById(id: any): Observable<any> {
  return this.webApiService.get(httpLink.urlProcess + '/' + id);
}

 //-------------------------------------------------------------------------------- 

public updateFreezbeId(id: any, model: any): Observable<any> {
  return this.webApiService.put(httpLink.urlFreezbe + '/' + id, model);
}

public updateIngredientsById(id: any, model: any): Observable<any> {
  return this.webApiService.put(httpLink.urlIngredients + '/' + id, model);
}

public updateProcessById(id: any, model: any): Observable<any> {
  return this.webApiService.put(httpLink.urlProcess + '/' + id, model);
}

//-------------------------------------------------------------------------------- 

  public deleteFreezbeById(id: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlFreezbe + '/' + id);
  }

  public deleteIngredientsById(id: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlIngredients + '/' + id);
  }

  public deleteProcessById(id: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlProcess + '/' + id);;
  }
  
 //-------------------------------------------------------------------------------- 
  
  public saveFreezbe(model: any): Observable<any> {
    return this.webApiService.post(httpLink.urlFreezbe, model);
  }

  public saveIngredients(model: any): Observable<any> {
    return this.webApiService.post(httpLink.urlIngredients, model);
  }

  public saveProcess(model: any): Observable<any> {
    return this.webApiService.post(httpLink.urlProcess, model);
  }
}

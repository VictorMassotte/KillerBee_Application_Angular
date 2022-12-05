import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllEmployee: apiUrl + "/api/employee/getAllEmployee",
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
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public getAllFreezbe(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public getAllIngredients(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

//--------------------------------------------------------------------------------

public getFreezbeById(model: any): Observable<any> {
  return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
}

public getIngredientsById(model: any): Observable<any> {
  return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
}

public getProcessById(model: any): Observable<any> {
  return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
}

//-------------------------------------------------------------------------------- 

  public deleteFreezbeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }

  public deleteIngredientsById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }

  public deleteProcessById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }
  
 //-------------------------------------------------------------------------------- 
  
  public saveFreezbe(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveFreezbe, model);
  }

  public saveIngredients(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveFreezbe, model);
  }

  public saveProcess(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveFreezbe, model);
  }
}

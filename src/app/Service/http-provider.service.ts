import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnements/environnement';
import { WebApiService } from './web-api.service';

var apiUrl = environment.domain;

var httpLink = {

  test:  "/",

  urlProcess: apiUrl + "/process",
  urlFreezbe: apiUrl + "/freezbe",
  urlIngredients: apiUrl + "/ingredients",

  urlAuth: apiUrl + "/auth",
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

//-------------------------------------------------------------------------------- 
  public getAllProcess(auth_token: any): Observable<any> {
    return this.webApiService.get(httpLink.urlProcess, auth_token);
  }

  public getAllFreezbe(auth_token: any): Observable<any> {
    return this.webApiService.get(httpLink.urlFreezbe, auth_token);
  }

  public getAllIngredients(auth_token: any): Observable<any> {
    return this.webApiService.get(httpLink.urlIngredients, auth_token);
  }

//--------------------------------------------------------------------------------

public getFreezbeById(id: any, auth_token: any): Observable<any> {
  return this.webApiService.get(httpLink.urlFreezbe + '/' + id , auth_token);
}

public getIngredientsById(id: any, auth_token: any): Observable<any> {
  return this.webApiService.get(httpLink.urlIngredients + '/' + id, auth_token);
}

public getProcessById(id: any, auth_token: any): Observable<any> {
  return this.webApiService.get(httpLink.urlProcess + '/' + id, auth_token);
}

 //-------------------------------------------------------------------------------- 

public updateFreezbeId(id: any, model: any, auth_token: any): Observable<any> {
  return this.webApiService.put(httpLink.urlFreezbe + '/' + id, model, auth_token);
}

public updateIngredientsById(id: any, model: any, auth_token: any): Observable<any> {
  return this.webApiService.put(httpLink.urlIngredients + '/' + id, model, auth_token);
}

public updateProcessById(id: any, model: any, auth_token: any): Observable<any> {
  return this.webApiService.put(httpLink.urlProcess + '/' + id, model, auth_token);
}

//-------------------------------------------------------------------------------- 

  public deleteFreezbeById(id: any, auth_token: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlFreezbe + '/' + id, auth_token);
  }

  public deleteIngredientsById(id: any,auth_token: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlIngredients + '/' + id, auth_token);
  }

  public deleteProcessById(id: any,auth_token: any): Observable<any> {
    return this.webApiService.delete(httpLink.urlProcess + '/' + id, auth_token);
  }
  
 //-------------------------------------------------------------------------------- 
  
  public saveFreezbe(model: any, auth_token: any): Observable<any> {
    return this.webApiService.post(httpLink.urlFreezbe, model, auth_token);
  }

  public saveIngredients(model: any, auth_token: any): Observable<any> {
    return this.webApiService.post(httpLink.urlIngredients, model, auth_token);
  }

  public saveProcess(model: any, auth_token: any): Observable<any> {
    return this.webApiService.post(httpLink.urlProcess, model, auth_token);
  }

   //-------------------------------------------------------------------------------- 

   public login(model: any): Observable<any> {
    return this.webApiService.postAuth(httpLink.urlAuth +'/login', model);
  }

}

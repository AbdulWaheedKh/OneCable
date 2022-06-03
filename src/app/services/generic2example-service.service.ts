import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConstants } from '../app.constants';
import { area } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {

  constructor(private http: HttpClient ) { }
    configUrl = 'http://localhost:8081/waheed';
    //configUrl1 = 'http://localhost:8080/DelEmpById';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

      // 'Content-Type': 'application/json',
      //           'Access-Control-Allow-Origin': '*',
      //           'Access-Control-Allow-Credentials': 'true',
      //           'Access-Control-Allow-Headers': 'Content-Type',
      //           'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      //           'key': 'x-api-key',
      //           'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x'

      // 'Content-Type':  'application/json'

    })

  };

  getAllAreas(): Observable<area[]>{
    return this.http.get<area[]>(appConstants.AREA_RESOURCE+'/getAllAreas')
  }

  // getEmployees(): Observable<EmployeesModel[]>{
  //   return this.http.get<EmployeesModel[]>(AppConstants.URL_BASE+'/getAll')
  // }

  // getEmployeeById(  id : Number ): Observable<EmployeesModel>{
  //   return this.http.get<EmployeesModel>(AppConstants.URL_BASE+'/'+ id)
  // }

  // delEmployeeById(id:number ): Observable<EmployeesModel>{
  //   return this.http.delete<EmployeesModel>(AppConstants.URL_BASE+'/'+ id)
  // }

  // getCurrentEmployeeById(id:any){
  //   return this.http.get(`${AppConstants.URL_BASE+'/getEmpById'}/${id}`)
  // }

  // already comteded
//  ====================================
  // updateCurrentEmployeeById(id:any,data:EmployeesModel){
  //   return this.http.put(`${this.configUrl+'/editEmp'}/${id}`,data,this.httpOptions)
  // }
 // already comteded
  //====================================


 
  // updateCurrentEmployeeById(standardSubject: EmployeesModel): Promise<any> {
  //   return new Promise((resolve, reject) => {

  //     console.log("sevice called");
      
  //     this.http.put(AppConstants.URL_BASE + '/editEmp/'+standardSubject.id, { ...standardSubject })
  //       .subscribe(response => {
  //         console.log("after subscribed");
  //         resolve(response);
          
          
  //       },
  //       err => {
  //        // console.log(err.error.message);
  //         reject(err);       
  //       },
  //       () => console.log(' No Data----')  
        
  //       );
  //   });
  // }

  // getStudents(): Observable<student[]>{
  //   return this.http.get<student[]>(appConstants.STUDENT_RESOURCE+ '/getAllStudents')
  // }


}

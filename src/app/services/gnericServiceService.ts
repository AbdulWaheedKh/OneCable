import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { appConstants } from '../app.constants';
import { area } from '../models/area';


@Injectable({
  providedIn: 'root'
})
export class gnericServiceService {

  onObjectChanged!: BehaviorSubject<any>;
  constructor(private http: HttpClient ) { }

   httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

      'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
                'key': 'x-api-key',
                'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x'

    //  'Content-Type':  'application/json'

    })
  };

  getAllAreas(): Observable<area[]>{
    return this.http.get<area[]>(appConstants.AREA_RESOURCE+'getAllAreas')
  }

  delAreaById(id:number ): Observable<area>{
     return this.http.delete<area>(appConstants.AREA_RESOURCE +'/'+ id)
   }



   deleteareaById(areaid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(appConstants.AREA_RESOURCE  + areaid,  
 httpOptions);  
  }  

   getAllarea(): Observable<area[]> {  
    return this.http.get<area[]>(appConstants.URL_BASE + '/AllareaDetails');  
  }  
  getareaById(areaId: number): Observable<area> {  
    return this.http.get<area>(appConstants.AREA_RESOURCE + 'getAreaById/' + areaId);  
  }  
  createarea(area: area): Observable<area> {  
    const httpOptionss = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };   
    return this.http.post<area>(appConstants.AREA_RESOURCE+ 'createNewArea',  
    area, this.httpOptions);  
  }  
  updatearea(Area:area): Observable<area> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<area>(appConstants.AREA_RESOURCE + 'editArea/' , Area ,this.httpOptions
    );  
  }  
 // updateCurrentareaById(id:any,data:areasModel){
  //   return this.http.put(`${this.configUrl+'/editEmp'}/${id}`,data,this.httpOptions)
  // }










  //configUrl = 'http://localhost:8081/waheed';
 // configUrl1 = 'http://localhost:8080/DelEmpById';

//   getareas(): Observable<areasModel[]>{
//     return this.http.get<areasModel[]>(appConstants.URL_BASE+'/getAll')
//   }

//   getareaById(  id : Number ): Observable<areasModel>{
//     return this.http.get<areasModel>(AppConstants.URL_BASE+'/'+ id)
//   }



//   getCurrentareaById(id:any){
//     return this.http.get(`${AppConstants.URL_BASE+'/getEmpById'}/${id}`)
//   }

  // updateCurrentareaById(id:any,data:areasModel){
  //   return this.http.put(`${this.configUrl+'/editEmp'}/${id}`,data,this.httpOptions)
  // }


//   updateCurrentareaById(standardSubject: areasModel): Promise<any> {
//     return new Promise((resolve, reject) => {

//       console.log("sevice called");
      
//       this.http.put(AppConstants.URL_BASE + '/editEmp/'+standardSubject.id, { ...standardSubject })
//         .subscribe(response => {
//           console.log("after subscribed");
//           resolve(response);
          
          
//         },
//         err => {
//          // console.log(err.error.message);
//           reject(err);       
//         },
//         () => console.log(' No Data----')  
        
//         );
//     });
//   }

//   getStudents(): Observable<student[]>{
//     return this.http.get<student[]>(AppConstants.STUDENT_RESOURCE+ '/getAllStudents')
//   }

}
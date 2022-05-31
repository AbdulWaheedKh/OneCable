

export class area {    
    Id: number;
    Name: String;  
    Description: String;
    IsActive: boolean; 
    Deleted: boolean; 
    Created: Date;
    Modified: Date;

    
    
    /**
     * Constructor
     *
     * @param objs
     */
    constructor(obj=null) {
        
        this.Id = (obj==null)?null:obj.Id; 
        this.Name = (obj==null)? '':obj.Name;
        this.Description =  (obj==null)?'':obj.Description;
        this.IsActive = (obj==null)?0:obj.IsActive;
        this.Created =  (obj==null)?'':obj.Created ;
        this.Modified =  (obj==null)?'':obj.ModifiedDate ;
        this.Deleted = (obj==null)?0:obj.Deleted;
    }
   
    
}

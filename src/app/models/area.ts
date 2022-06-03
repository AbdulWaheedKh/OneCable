

export class area {    
    id: number;
    name: String;  
    description: String;
    isActive: boolean; 
    deleted: boolean; 
    created: Date;
    modified: Date;
    
    /**
     * Constructor
     *
     * @param objs
     */
    constructor(obj=null) {
        
        this.id = (obj==null)?null:obj.id; 
        this.name = (obj==null)? '':obj.name;
        this.description =  (obj==null)?'':obj.description;
        this.isActive = (obj==null)?0:obj.isActive;
        this.created =  (obj==null)?'':obj.created ;
        this.modified =  (obj==null)?'':obj.modifiedDate ;
        this.deleted = (obj==null)?0:obj.deleted;
    }
   
    
}

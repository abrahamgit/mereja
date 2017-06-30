import {observable , autorun } from 'mbox';

const createServicedetail=()=>({
    id:serviceData.id,
    listofRequirements:serviceData.listofRequirements,
    listofProcedures:serviceData.listofProcedures,
});

class Servicedetails{
    @observable loadedDate:null;
    @observable isLoading:false;
    @observable ServicedetailList:[];

    constructor(){
        autorun(()=>{});
    }

    updateServicedetails(servicedetails){
        this.ServicedetailList=servicedetails.map(createServicedetail);
    }
    updateServicedetail(id,servicedetail){
    const index = this.ServicedetailList.findIndex(servicedetail => servicedetail.id === id);
        if (index !== -1) {
        this.ServicedetailList[index]['content'] = servicedetail;
        }
    
    }
}
const servicedetailStore= new Servicedetails();

export default servicedetailStore;
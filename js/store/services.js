import {observable , autorun } from 'mbox';

const createService=(serviceDate)=>({
    id:serviceDate.id,
    title:serviceDate.title,
    serviceDescription:serviceDate.serviceDescription,
});

class Services{
    @observable loadedDate:null;
    @observable isLoading:false;
    @observable ServicesList:[];

    constructor(){
        autorun(()=>{});
    }

    updateServices(services){
        this.ServicesList=services.map(createService);
    }
    updateService(id,service){
    const index = this.ServicesList.findIndex(service => service.id === id);
        if (index !== -1) {
        this.ServicesList[index]['content'] = service;
        }
    
    }
}
const serviceStore= new Services();

export default serviceStore;
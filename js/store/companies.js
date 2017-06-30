import {observable , autorun } from 'mbox';

const createCompany=(companyData)=>({
    id:companyData.id,
    title:companyData.title,
    description:companyData.description,
    numService:companyData.numCompany,
});

class Companies{
    @observable loadedDate:null;
    @observable isLoading:false;
    @observable CompaniesList:[];

    constructor(){
        autorun(()=>{});
    }

    updateCompanies(companies){
        this.CompaniesList=companies.map(createCompany);
    }
    updateCompany(id,company){
    const index = this.CompaniesList.findIndex(company => company.id === id);
        if (index !== -1) {
        this.CompaniesList[index]['content'] = company;
        }
    
    }
}
const companiesStore= new Companies();

export default companiesStore;
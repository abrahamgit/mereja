import {observable , autorun } from 'mbox';

const createCategory=(categoryData)=>({
    id:categoryData.id,
    title:categoryData.title,
    numCompany:categoryData.numCompany,
});

class Categories{
    @observable loadedDate:null;
    @observable isLoading:false;
    @observable categoriesList:[];

    constructor(){
        autorun(()=>{});
    }

    updateCategories(categories){
        this.categoriesList=categories.map(createCategory);
    }
    updateCategory(id,category){
    const index = this.categoriesList.findIndex(category => category.id === id);
        if (index !== -1) {
        this.categoriesList[index]['content'] = category;
        }
    
    }
}
const categoriesStore= new Categories();

export default categoriesStore;
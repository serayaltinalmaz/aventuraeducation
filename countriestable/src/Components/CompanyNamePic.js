import React, { useContext} from 'react'
import { CompaniesContext } from '../Context/CompaniesContext';
const CompanyNamePic = (props) => {
    const {companies}= useContext(CompaniesContext);
    let selectedCompany= companies.find(company => company.id === props.product.companyId);
    
    return (
        <div>
            <img src={selectedCompany.companyPic}/> 
            <p>{selectedCompany.companyName}</p>
        </div>
    )
}

export default CompanyNamePic
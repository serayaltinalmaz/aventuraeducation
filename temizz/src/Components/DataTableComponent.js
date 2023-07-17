import React, { useContext } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SupportFakeDataContext } from '../Context/SupportFakeDataContext';
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
const DataTableComponent = () => {
    const { SupportFakeData } = useContext(SupportFakeDataContext);
    const AccountBodyTemplate = (account) => {
        return <div className="flex items-center">
            <Avatar
                icon="pi pi-user"
                size="large"
                shape="circle"
                className="bg-primary text-secondary mr-2 rounded-full p-1 !w-8 !h-8"
            />
            <p>
                {account.firstName} {account.lastName}
            </p>
        </div>
    };
    const PhoneBodyTemplate = (phones) => {
        return <a className='pi pi-phone text-primary' href={`tel:${phones.phone}`}>
            <i className="mr-3"></i>
            <span className="text-black ">{phones.phone}</span></a>
    };
    const EmailBodyTemplate = (emails) => {
        return <p> {emails.email} </p>
    };
    const SubjectBodyTemplate = (subjects) => {
        return <p> {subjects.subject} </p>
    };
    const MessageBodyTemplate = (messages) => {
        return <p>{messages.message}</p>
            
        
    };
    return (
        <DataTable className="bg-light2 py-4 px-6 rounded shadow !min-w-[1500px]" value={SupportFakeData}>
            <Column className="bg-light2 py-4 px-6 rounded shadow !min-w-[230px] text-center " header={<span className="text-primary -500 font-bold " >Kullanıcı Bilgileri</span>} body={AccountBodyTemplate}></Column>
            <Column className="bg-light2 py-4 px-6 rounded shadow !min-w-[250px] text-center" header={<span className="text-primary -500 font-bold " >Telefon</span>} body={PhoneBodyTemplate}></Column>
            <Column className="bg-light2 py-4 px-6 rounded shadow text-center" header={<span className="text-primary -500 font-bold " >E-Posta</span>} body={EmailBodyTemplate}></Column>
            <Column className="bg-light2 py-4 px-6 rounded shadow text-center" header={<span className="text-primary -500 font-bold " >Konu</span>} body={SubjectBodyTemplate}></Column>
            <Column
                className="bg-light2 py-4 px-6 rounded shadow !min-w-[550px]"
                header={<span className="text-primary -500 font-bold">Mesaj</span>}
                body={MessageBodyTemplate}
            ></Column>
        </DataTable>
    )
}

export default DataTableComponent
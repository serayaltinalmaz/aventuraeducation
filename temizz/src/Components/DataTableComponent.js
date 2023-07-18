import React, { useContext, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { SupportFakeDataContext } from '../Context/SupportFakeDataContext';
import 'primeicons/primeicons.css';
import { Avatar } from 'primereact/avatar';
//import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
//import { tr } from "../Context/tr"
import { InputText } from 'primereact/inputtext';

const DataTableComponent = () => {
    const { SupportFakeData } = useContext(SupportFakeDataContext);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const AccountBodyTemplate = (account) => {
        return <div className="!flex items-center">
            <Avatar
                icon="pi pi-user"
                size="small"
                shape="circle"
                className="!bg-primary !text-secondary !mr-2 !rounded-full !p-1 !w-8 !h-8"
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
        const handleClick = () => {
            window.location.href = `mailto:${emails.email}`;
        };

        return (
            <a href={`mailto:${emails.email}`} onClick={handleClick}>
                <p>{emails.email}</p>
            </a>
        );
    };
    const SubjectBodyTemplate = (subjects) => {
        return <p> {subjects.subject} </p>
    };
    const MessageBodyTemplate = (messages) => {
        return <p>{messages.message}</p>
    };
    //const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    //const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    const onGlobalFilterChange = (e) => {
        setGlobalFilterValue(e.target.value);
    };
    const header = (
        <div className="flex justify-content-end">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Ara" />
            </span>
        </div>
    );
    return (
        <DataTable
            className="bg-light2 py-4 px-6 rounded shadow"
            value={SupportFakeData}
            paginator
            rows={5}
            //rowsPerPageOptions={[5, 10, 25, 50]}
            //paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            //currentPageReportTemplate={tr.dataTable.pageReport} 
            //rowsPerPageLabel={tr.dataTable.rowsPerPageLabel} 
            //rowsPerPageOptionLabel={tr.dataTable.rowsPerPageOptionLabel} 
            //paginatorLeft={paginatorLeft}
            //paginatorRight={paginatorRight}
            globalFilter={globalFilterValue}
            header={header}
        >
            <Column 
                field='firstName'
                className="bg-light2 py-4 px-6 rounded shadow !min-w-[230px] !text-center "
                header={<span className="text-primary -500 font-bold !text-center" >Kullanıcı Bilgileri</span>}
                body={AccountBodyTemplate}>
            </Column>
            <Column
                field='phone'
                className="bg-light2 py-4 px-6 rounded shadow !min-w-[250px] !text-center"
                header={<span className="text-primary -500 font-bold " >Telefon</span>}
                body={PhoneBodyTemplate}></Column>
            <Column
                field='email'
                className="bg-light2 py-4 px-6 rounded shadow !text-center"
                header={<span className="text-primary -500 font-bold " >E-Posta</span>}
                body={EmailBodyTemplate}></Column>
            <Column
                field='subject'
                className="bg-light2 py-4 px-6 rounded shadow !text-center"
                header={<span className="text-primary -500 font-bold " >Konu</span>}
                body={SubjectBodyTemplate}></Column>
            <Column
                field='message'
                className="bg-light2 py-4 px-6 rounded shadow !min-w-[550px]"
                header={<span className="text-primary -500 font-bold">Mesaj</span>}
                body={MessageBodyTemplate}
            ></Column>
        </DataTable>
    )
}

export default DataTableComponent;
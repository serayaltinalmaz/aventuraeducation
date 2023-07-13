import React, { useContext } from 'react'
import { Header, Image, Table } from 'semantic-ui-react';
import { CompaniesContext } from '../Context/CompaniesContext';
const CompaniesComponent = () => {
    const {companies}= useContext(CompaniesContext)
    return (
        <div>
            <Table  celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='headercell' >Picture</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Company Name</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Phone</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Vat Number</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Country</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Website</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Fields</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {companies.map((company) => (
                    
                        <Table.Row key={company.id}>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image className='flag' src={company.companyPic}  rounded size='big' />
                                </Header>
                            </Table.Cell>
                            <Table.Cell className='tablecell'>{company.companyName}</Table.Cell>
                            <Table.Cell className='tablecell'>{company.companyPhone}</Table.Cell>
                            <Table.Cell className='tablecell'>{company.vatNumber}</Table.Cell>
                            <Table.Cell className='tablecell'>{company.country}</Table.Cell>
                            <Table.Cell className='tablecell'>{company.website}</Table.Cell>
                            <Table.Cell className='tablecell'>{company.fields}</Table.Cell>
                        </Table.Row>
                    
                ))}
                </Table.Body>
            </Table>
        </div>
    )
}

export default CompaniesComponent
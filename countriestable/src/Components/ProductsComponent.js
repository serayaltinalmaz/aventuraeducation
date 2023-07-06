import React, { useContext} from 'react'
import { Header, Image, Table } from 'semantic-ui-react';
import { ProductsContext } from '../Context/ProductsContext';
import CompanyNamePic from './CompanyNamePic';
const ProductsComponent = () => {
    const {products}= useContext(ProductsContext);
    
    
    return (
        <div>
            <Table  celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='headercell' >Picture</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Product Name</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Amount</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Price</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Website</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Company</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            {products.map((product) => (
                <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image className='flag' src={product.productPic}  rounded size='big' />
                        </Header>
                    </Table.Cell>
                    <Table.Cell className='tablecell'>{product.productName}</Table.Cell>
                    <Table.Cell className='tablecell'>{product.productAmount}</Table.Cell>
                    <Table.Cell className='tablecell'>{product.productPrice}</Table.Cell>
                    <Table.Cell className='tablecell'>{product.website}</Table.Cell>
                    <Table.Cell className='tablecell'><CompanyNamePic product={product} />  </Table.Cell>
                </Table.Row>
            </Table.Body>
            ))}
            </Table>
        </div>
    )
}

export default ProductsComponent


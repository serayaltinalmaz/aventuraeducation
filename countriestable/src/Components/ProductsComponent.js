import React, { useContext, useState, useEffect } from 'react'
import { Header, Image, Table, Icon, Label, Menu } from 'semantic-ui-react';
import { ProductsContext } from '../Context/ProductsContext';
import CompanyNamePic from './CompanyNamePic';
const ProductsComponent = () => {
    const { products } = useContext(ProductsContext);
    const productsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const maxDisplayedPages = 5; 


    let startPage = 1;
    let endPage = totalPages;


    // Başlangıç ve bitiş sayfa numaralarını belirleme
    if (totalPages > maxDisplayedPages) {
        const middlePage = Math.ceil(maxDisplayedPages / 2);
        if (currentPage <= middlePage) {  //ilk 3 kontrol geçerli sayfa ücteb küçük eşitse son sayfa 5 olsun
            endPage = maxDisplayedPages;
        } else if (currentPage >= (totalPages - middlePage) +1 ) { //son 3 kontrol
            startPage = totalPages - maxDisplayedPages + 1;
        } else {
            startPage = currentPage - Math.floor(maxDisplayedPages / 2);  
            endPage = currentPage + Math.floor(maxDisplayedPages / 2);  
        }
    }

    const pageNumbers = [];
    
    for (let i = startPage; i <= endPage; i++) {
        console.log("elma")
        pageNumbers.push(
            <Menu.Item
                as="div"
                key={i}
                active={i === currentPage}
                onClick={() => handlePageChange(i)}
            >
                {i}
            </Menu.Item>
        );
    }

    return (
        <div className="products-table-container">
            <Table celled collapsing className="products-table" >
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
                <Table.Body>
                {productsToShow.map((product) => (
                        <Table.Row key={product.id} >
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image className='flag' src={product.productPic} rounded size='big' />
                                </Header>
                            </Table.Cell>
                            <Table.Cell className='tablecell'>{product.productName}</Table.Cell>
                            <Table.Cell className='tablecell'>{product.productAmount}</Table.Cell>
                            <Table.Cell className='tablecell'>{product.productPrice}</Table.Cell>
                            <Table.Cell className='tablecell'>{product.website}</Table.Cell>
                            <Table.Cell className='tablecell'><CompanyNamePic product={product} />  </Table.Cell>
                        </Table.Row>
                    
                ))}
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="5">
                            <Menu floated='right' pagination>
                                <Menu.Item
                                    as='div'
                                    icon
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                {pageNumbers}
                                <Menu.Item
                                    as='div'
                                    icon
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>

            </Table>
        </div>
    )
}

export default ProductsComponent

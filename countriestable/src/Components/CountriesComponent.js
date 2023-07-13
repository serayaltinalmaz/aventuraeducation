import React from 'react'
import { useContext } from 'react'
import { CountriesContext } from '../Context/CountriesContext'
import { Header, Image, Table } from 'semantic-ui-react'
const CountriesComponent = () => {
    const { countries } = useContext(CountriesContext)
    return (
        <div>
            <Table celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell className='headercell' >Flag</Table.HeaderCell>
                        <Table.HeaderCell className='headercell' >Country Name</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {countries.map((country, index) => (
                    <Table.Body>
                        <Table.Row key={country.name + index} >
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image className='flag' src={country.flag} rounded size='big' />
                                </Header>
                            </Table.Cell>
                            <Table.Cell className='tablecell'>{country.name}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                ))}
            </Table>
        </div>
    )
}

export default CountriesComponent
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default class MyMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <Link to="countries">
                        <Menu.Item
                            name='Countries'
                            active={activeItem === 'Countries'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="companies">
                        <Menu.Item
                            name='Companies'
                            active={activeItem === 'Companies'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                    <Link to="products">
                        <Menu.Item
                            name='Products'
                            active={activeItem === 'Products'}
                            onClick={this.handleItemClick}
                        />
                    </Link>
                </Menu>
            </Segment>
        )
    }
}
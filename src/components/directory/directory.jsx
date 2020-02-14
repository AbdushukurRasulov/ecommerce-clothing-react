import React, { Component } from 'react'

import './directory.scss';
import { MenuItem } from '../menu-item/menu-item';

export default class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/cvpntL1/jackets.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/cvpntL1/sneakers.png',
                    id: 3
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
                    size: 'large',
                    id: 5
                }

            ]
        }
    }


    render() {
        const { sections } = this.state;
        return (
            <div className="directory-menu">
                {sections.map(({ title, imageUrl, size, id }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))}
            </div>
        )
    }
}

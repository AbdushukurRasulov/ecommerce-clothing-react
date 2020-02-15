import React, { Component } from 'react'

import SHOP_DATA from './shop.data'
import { CollectionPreview } from '../../components/collection-preview/collection-preview';

export default class shop extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherStateProps }) => (
                    <CollectionPreview key={id} {...otherStateProps} />
                ))}
            </div>
        )
    }
}

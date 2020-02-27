const INITIAL_STATE = {
    sections: [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/cvpntL1/jackets.png',
        id: 2,
        linkUrl:'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/cvpntL1/sneakers.png',
        id: 3,
        linkUrl:'shop/sneakers'
    },
    {
        title: 'Women',
        imageUrl: 'https://i.ibb.co/cvpntL1/womens.png',
        size: 'large',
        id: 4,
        linkUrl:'shop/womens'
    },
    {
        title: 'Men',
        imageUrl: 'https://i.ibb.co/cvpntL1/mens.png',
        size: 'large',
        id: 5,
        linkUrl:'shop/mens'
    }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
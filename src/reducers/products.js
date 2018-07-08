import * as types from './../constant/ActionType';

let defaultState = [
    {
      id: '1',
      name: 'a',
      image: 'aplus-media.jpg',
      summary: 'product 1 a',
      price: 12,
      canBuy: true
    },
    {
        id: '2',
        name: 'b',
        image: 'aplus-media.jpg',
        summary: 'product 1 a',
        price: 13,
        canBuy: false
    },
    {
        id: '3',
        name: 'c',
        image: 'aplus-media.jpg',
        summary: 'product 1 a',
        price: 14,
        canBuy: false
    },
    {
        id: '4',
        name: 'd',
        image: 'aplus-media.jpg',
        summary: 'product 1 a',
        price: 15,
        canBuy: true
    },
    {
        id: '5',
        name: 'e',
        image: 'robo_fig_combo.jpg',
        summary: 'product 1 a',
        price: 7,
        canBuy: true
    },
    {
        id: '6',
        name: 'f',
        image: 'aplus-media.jpg',
        summary: 'product 1 a',
        price: 19,
        canBuy: false
    },
    {
        id: '7',
        name: 'h',
        image: 'target-leap-frog.jpg',
        summary: 'product 1 a',
        price: 120,
        canBuy: false
    },
    {
        id: '8',
        name: 'h2',
        image: 'aplus-media.jpg',
        summary: 'product 1 a',
        price: 180,
        canBuy: true
    },
    {
        id: '9',
        name: 'k',
        image: 'aplusautomation.jpg',
        summary: 'product 1 a',
        price: 70,
        canBuy: true
    },
    {
        id: '10',
        name: 'm',
        image: 'target-leap-frog.jpg',
        summary: 'product 1 a',
        price: 121,
        canBuy: false
    },
];

const products = (state = defaultState, action) => {
    switch (action.type) {
        case types.LIST_PRODUCT:
            return state;
        default:
            return state;
    }
}

export default products;
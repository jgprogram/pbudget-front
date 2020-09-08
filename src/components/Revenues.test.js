import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import Revenues from "./Revenues";
import {fireEvent} from "@testing-library/react";

describe('Revenues test', () => {
    let container = null;
    const onChange = jest.fn();

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    beforeEach(() => {
        act(() => {
            render(<Revenues onChange={onChange}/>, container);
        });
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    describe('when component is initiated', () => {
        it('should display 2 revenues', () => {
            expect(revenueRows()).toHaveLength(2);
        });
    });

    describe('when add revenue button is clicked', () => {
        beforeEach(() => {
            act(() => {
                fireEvent(
                    addRevenueButton(),
                    new MouseEvent('click', {bubbles: true})
                )
            });
        });

        it('should add new revenue', () => {
            expect(revenueRows()).toHaveLength(3);
        });
    });

    // SetState with input and add test with enzyme https://levelup.gitconnected.com/the-basics-of-testing-a-react-component-2ff635c99044

    function addRevenueButton() {
        return document.querySelector('.addButton')
    }

    function revenueRows() {
        return container.querySelectorAll('tbody tr');
    }
});

import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import {act} from 'react-dom/test-utils';

import RevenueRow from './RevenueRow';
import Revenue from '../model/Revenue';

const AMOUNT = 1200;
const CURRENCY = 'PLN';
const ACCOUNT = 'Test Bank';
const SOURCE = 'Test Corp';
const DESCRIPTION = 'Test desc 1234';

describe('RevenueRow test', () => {
    let container = null;
    const revenue = new Revenue(AMOUNT, ACCOUNT, SOURCE, DESCRIPTION);
    beforeEach(() => {
        container = document.createElement('tbody');
        document.body.appendChild(container);
    });

    beforeEach(() => {
        act(() => {
            render(<RevenueRow revenue={revenue}/>, container);
        });
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('should display amount with currency', () => {
        expect(container.textContent).toContain(`${AMOUNT} ${CURRENCY}`);
    });

    it('should display account', () => {
        expect(container.textContent).toContain(`${ACCOUNT}`);
    });

    it('should display source', () => {
        expect(container.textContent).toContain(`${SOURCE}`);
    });

    it('should display description', () => {
        expect(container.textContent).toContain(`${DESCRIPTION}`);
    });
});



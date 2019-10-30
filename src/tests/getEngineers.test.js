import Enzyme, { mount } from 'enzyme';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { EngineerTable } from '../components/table';

Enzyme.configure({ adapter: new Adapter() });

const store = configureStore([thunk])({
    "engineers": [],
    'errors': {}
});

let wrapper;
describe('signup Component', () => {
    // const submitHandler = jest.fn();


    // const createSpy = toSpy => jest.spyOn(wrapper.instance(), toSpy);
    Object.defineProperty(window.location, 'reload', {
        configurable: true,
    });

    window.location.reload = jest.fn();
    // const nextProps = { engineers: [] };
    // const props = {
    //     engineers: { engineers: [] },
    //     history: { push: jest.fn() },
    // };
    beforeEach(() => {
        const props = {
            getEngineers: jest.fn(),
            engineers: {
                engineers: [
                    {
                        "id": 1,
                        "user": 4,
                        "submitter": 1,
                        "quality": "0.75",
                        "quantity": "0.25",
                        "initiative": "1.50",
                        "professionalism": "0.25",
                        "communication": "-0.75",
                        "integration": "-0.25",
                        "averageRating": "0.29",
                        "createdAt": "2019-10-31T08:11:42.333Z",
                        "updatedAt": "2019-10-31T08:11:42.333Z",
                        "User": {
                            "id": 4,
                            "firstName": "first",
                            "lastName": "lf",
                            "email": "lf1@gmail.com"
                        }
                    }
                ]
            },
        };
        wrapper = mount(
            <EngineerTable {...props} />,
        );
    });

    it.only('should render signup component', () => {
        expect(wrapper).toHaveLength(1);
    });

    // it.only('should simulate a click', () => {
    //     wrapper.setState({
    //         fName: 'John', lName: 'Doe', email: 'johndoe@gmail.com', address: 'Kampala', password: 'Root1234'
    //     });
    //     wrapper.find('.btn').simulate('submit');
    //     console.log(wrapper.find('.btn'))
    //     expect(submitHandler).toBeCalledTimes(1);
    // });
    // it.skip('should call handleChange on form fill', () => {
    //     const spy = createSpy('onchangeHandle');
    //     wrapper.instance().forceUpdate();
    //     wrapper.find('input[name="fName"]').simulate('change', { target: { value: 'John' } });
    //     wrapper.find('input[name="lName"]').simulate('change', { target: { value: 'Doe' } });
    //     wrapper.find('input[name="email"]').simulate('change', { target: { value: 'johndoe@gmail.com' } });
    //     wrapper.find('input[name="address"]').simulate('change', { target: { value: 'Kampala' } });
    //     wrapper.find('input[name="password"]').simulate('change', { target: { value: 'Root1234' } });
    //     expect(spy).toBeCalled();
    // });
});
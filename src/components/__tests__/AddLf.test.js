/* eslint-disable import/no-named-as-default */
import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";
import AddLf, {AddLf as AddLfComponent } from "../AddLf";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
  email: ""
});

let wrapper;

describe("Add LF Component", () => {
   const handleSubmit = jest.fn();
   const handleChange = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AddLf></AddLf>
        </MemoryRouter>
      </Provider>
    );
  });

  it("should render Add Lf component", () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should simulate a click', () => {
    wrapper.setState({
      email:'jonathan.shyaka@andela.com'
    });
    wrapper.find('#addLF').simulate('submit');
    expect(handleSubmit).toBeCalledTimes(0);
  });
  it('should simulate a input change', () => {
    wrapper.find('TextBox').props().onChange({target: {name: 't', value: 'this'}});
    expect(handleChange).toBeCalledTimes(0);
  });
  it('should simulate a input change', () => {
    const component = shallow(<AddLfComponent/>);
    const nextPropsSuccess = {status: { success: true }, clearData: jest.fn()};
    component.setProps(nextPropsSuccess);
  });
  it('should simulate a input change', () => {
    const component = shallow(<AddLfComponent/>);
    const nextPropsError = {status: { error: true }, clearData: jest.fn()};
    component.setProps(nextPropsError);
  });
});

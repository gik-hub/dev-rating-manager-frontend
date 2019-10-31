import Enzyme, { mount } from "enzyme";
import React from "react";
import { Link, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";
import AddLf from "../AddLf";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])({
  email: ""
});

let wrapper;

describe("Add LF Component", () => {
   const handleSubmit = jest.fn();
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <AddLf user={{ email: "" }}></AddLf>
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
});

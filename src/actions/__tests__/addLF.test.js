/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import moxios from 'moxios';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme/build';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16/build';
import { createLF, clearData } from '../createLFAction';
import { CREATE_LF, CREATE_LF_ERROR, CLEAR_DATA } from '../actionType';
import dbCall from '../../config/dbCall';


Enzyme.configure({ adapter: new Adapter() });

let store;
const mockedStore = configureStore([thunk]);

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Create LF actions actions', () => {
  beforeEach(() => {
    store = mockedStore({
      token: null,
      error: false,
    });
    moxios.install(dbCall);
  });

  afterEach(() => {
    moxios.uninstall(dbCall);
  });
  it('should log in user', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            status: 200,
            message: 'Successfully added LF',
          },
        },
      });
    });
    await store.dispatch(createLF({ email: 'jonathan@andela.com' }));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(CREATE_LF);
  });
  it('should catch log in errors', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {
          data: {
            status: 500,
            error: 'Error Message',
          },
        },
      });
    });
    await store.dispatch(createLF({ email: 'jonathan@andela.com' }));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(CREATE_LF_ERROR);
  });
  it('should clear data', async () => {
    await store.dispatch(clearData());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(CLEAR_DATA);
  });
});

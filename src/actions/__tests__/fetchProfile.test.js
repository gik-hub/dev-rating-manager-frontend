/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import moxios from 'moxios';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme/build';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16/build';
import { fetchProfile } from '../fetchProfile';
import { FETCH_PROFILE, FETCH_PROFILE_ERROR } from '../actionType';
import dbCall from '../../config/dbCall';


Enzyme.configure({ adapter: new Adapter() });

let store;
const mockedStore = configureStore([thunk]);

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Fetch profile actions actions', () => {
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
  it('on success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            status: 200,
            message: 'Success',
          },
        },
      });
    });
    await store.dispatch(fetchProfile());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(FETCH_PROFILE);
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
    await store.dispatch(fetchProfile());
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(FETCH_PROFILE_ERROR);
  });
});

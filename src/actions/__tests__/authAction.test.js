import Enzyme from 'enzyme/build';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16/build';
import { authUser } from '../authAction';
import { AUTH_USER, AUTH_ERROR } from '../actionType';
import successLogin from './__mockData__/successLogin';
import errorLogin from './__mockData__/errorLogin';


Enzyme.configure({ adapter: new Adapter() });

const mockedStore = configureStore([thunk]);
const flushPromises = () => new Promise((resolve) => setImmediate(resolve));
let store;

describe("Auth Action Tests", () => {
    beforeEach(() => {
        store = mockedStore();
    })
    it("should dispatch AuthUser action", async () => {
        await store.dispatch(authUser(successLogin));
        flushPromises();
        const calledActions = store.getActions();
        expect(calledActions[0].type).toEqual(AUTH_USER);        
    });

    it("should dispatch AuthError action", async () => {
        await store.dispatch(authUser(errorLogin));
        flushPromises();
        const calledActions = store.getActions();
        expect(calledActions[0].type).toEqual(AUTH_ERROR);        
    });
});


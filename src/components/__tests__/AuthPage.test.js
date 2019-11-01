import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";
// eslint-disable-next-line import/no-named-as-default
import AuthPage, { AuthPage as AuthPageComponent } from "../AuthPage";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])();

describe("Add AuthPage Component", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <AuthPage></AuthPage>
                </MemoryRouter>
            </Provider>
        );
    });

    it("should render AuthPage component", () => {
        expect(wrapper).toHaveLength(1);
    });

    it('authPage component will receive  disired props - engineer', () => {
        const location = {
            search: '?code=eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4iLCJkYXRhIjp7InRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TmpBc0ltZHZiMmRzWlVsa0lqb2lNVEUwTnpFd05EazROVFl4TURVM05UZzNOVEUxSWl3aVptbHljM1JPWVcxbElqb2lSbkpsWkNJc0lteGhjM1JPWVcxbElqb2lUWFZqZVc4aUxDSmxiV0ZwYkNJNkltWnlaV1F1YlhWamVXOUFZVzVrWld4aExtTnZiU0lzSW5KdmJHVWlPaUpGYm1kcGJtVmxjaUlzSW1OeVpXRjBaV1JCZENJNklqSXdNVGt0TVRBdE16RlVNVEk2TkRFNk16VXVNalV3V2lJc0luVndaR0YwWldSQmRDSTZJakl3TVRrdE1UQXRNekZVTVRJNk5ERTZNelV1TWpVd1dpSXNJbWxoZENJNk1UVTNNall3TkRZeE5pd2laWGh3SWpveE5UY3lOamt4TURFMmZRLmRROGFMZXRjR2NZZnlVSDZ6XzQ5R2ZxSzRBUlluNDdCWGp1SkFqWEQ2dW8ifX0='
        }
        const profile = {
            success: {
                data: {
                    role: 'Engineer'
                }
            }
        }
        const getProfile = jest.fn();
        const authUser = jest.fn();
        const component = shallow(<AuthPageComponent location={location} match={{}} history={{}} authUser={authUser} profile={profile} getProfile={getProfile}/>);
        const nextProps = {
            auth: {
                user: {
                    token: 'x'
                }
            },
            history: {
                push: jest.fn()
            }
        }
        component.setProps(nextProps);
    })
    it('authPage component will receive  disired props - LF', () => {
        const location = {
            search: '?code=eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4iLCJkYXRhIjp7InRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TmpBc0ltZHZiMmRzWlVsa0lqb2lNVEUwTnpFd05EazROVFl4TURVM05UZzNOVEUxSWl3aVptbHljM1JPWVcxbElqb2lSbkpsWkNJc0lteGhjM1JPWVcxbElqb2lUWFZqZVc4aUxDSmxiV0ZwYkNJNkltWnlaV1F1YlhWamVXOUFZVzVrWld4aExtTnZiU0lzSW5KdmJHVWlPaUpGYm1kcGJtVmxjaUlzSW1OeVpXRjBaV1JCZENJNklqSXdNVGt0TVRBdE16RlVNVEk2TkRFNk16VXVNalV3V2lJc0luVndaR0YwWldSQmRDSTZJakl3TVRrdE1UQXRNekZVTVRJNk5ERTZNelV1TWpVd1dpSXNJbWxoZENJNk1UVTNNall3TkRZeE5pd2laWGh3SWpveE5UY3lOamt4TURFMmZRLmRROGFMZXRjR2NZZnlVSDZ6XzQ5R2ZxSzRBUlluNDdCWGp1SkFqWEQ2dW8ifX0='
        }
        const profile = {
            success: {
                data: {
                    role: 'LF'
                }
            }
        }
        const getProfile = jest.fn();
        const authUser = jest.fn();
        const component = shallow(<AuthPageComponent location={location} match={{}} history={{}} authUser={authUser} profile={profile} getProfile={getProfile}/>);
        const nextProps = {
            auth: {
                user: {
                    token: 'x'
                }
            },
            history: {
                push: jest.fn()
            }
        }
        component.setProps(nextProps);
    })
    it('authPage component will receive  disired props - Super LF', () => {
        const location = {
            search: '?code=eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4iLCJkYXRhIjp7InRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TmpBc0ltZHZiMmRzWlVsa0lqb2lNVEUwTnpFd05EazROVFl4TURVM05UZzNOVEUxSWl3aVptbHljM1JPWVcxbElqb2lSbkpsWkNJc0lteGhjM1JPWVcxbElqb2lUWFZqZVc4aUxDSmxiV0ZwYkNJNkltWnlaV1F1YlhWamVXOUFZVzVrWld4aExtTnZiU0lzSW5KdmJHVWlPaUpGYm1kcGJtVmxjaUlzSW1OeVpXRjBaV1JCZENJNklqSXdNVGt0TVRBdE16RlVNVEk2TkRFNk16VXVNalV3V2lJc0luVndaR0YwWldSQmRDSTZJakl3TVRrdE1UQXRNekZVTVRJNk5ERTZNelV1TWpVd1dpSXNJbWxoZENJNk1UVTNNall3TkRZeE5pd2laWGh3SWpveE5UY3lOamt4TURFMmZRLmRROGFMZXRjR2NZZnlVSDZ6XzQ5R2ZxSzRBUlluNDdCWGp1SkFqWEQ2dW8ifX0='
        }
        const profile = {
            success: {
                data: {
                    role: 'Super LF'
                }
            }
        }
        const getProfile = jest.fn();
        const authUser = jest.fn();
        const component = shallow(<AuthPageComponent location={location} match={{}} history={{}} authUser={authUser} profile={profile} getProfile={getProfile}/>);
        const nextProps = {
            auth: {
                user: {
                    token: 'x'
                }
            },
            history: {
                push: jest.fn()
            }
        }
        component.setProps(nextProps);
    })

});
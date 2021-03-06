import reducers from "../../reducers/authReducer";

describe("auth page reducer unit tests", () => {
  it("auth on successful login should have desired state", () => {
    const state = reducers(
      { user: {}, errors: {} },
      { type: "AUTH_USER", payload: { token: "xxx-xxx-xxx" } }
    );
    expect(state).toEqual({ user: { token: "xxx-xxx-xxx" }, errors: {} });
  });
  it("auth on login error should have disired state", () => {
    const state = reducers(
      { user: {}, errors: {} },
      {
        type: "AUTH_ERROR",
        payload: {
          message: "The email has to be a valid Andela email!",
          error: "Validation Error"
        }
      }
    );
    expect(state).toEqual({
      user: {},
      errors: {
        message: "The email has to be a valid Andela email!",
        error: "Validation Error"
      }
    });
  });
});

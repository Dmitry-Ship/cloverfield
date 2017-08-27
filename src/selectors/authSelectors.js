export const getAuthErrorMessage = state => state.authReducer.errorMessage;
export const getIsLoggedIn = state => state.authReducer.isLoggedIn;
export const getIsLoggingIn = state => state.authReducer.isLoggingIn;

export const getIsTokenSent = state => state.authReducer.isTokenSent;
export const getIsPasswordUpdated = state => state.authReducer.isPasswordUpdated;
export const getIsTokenExpired = state => state.authReducer.isTokenExpired;

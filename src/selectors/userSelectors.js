export const getUser = state => state.userReducer.user;
export const getUserErrorMessage = state => state.userReducer.errorMessage;
export const getIsPasswordChanged = state => state.userReducer.isPasswordChanged;
export const getIsUpdating = state => state.userReducer.isUpdating;

import { combineReducers } from 'redux';

import noteReducer, * as fromNote from './noteReducer';
import authReducer, * as fromAuth from './authReducer';
import userReducer, * as fromUser from './userReducer';
import UIReducer, * as fromUI from './UIReducer';

export default combineReducers({ noteReducer, authReducer, userReducer, UIReducer });

export const getIsFetching = state => fromNote.getIsFetching(state.noteReducer);
export const getErrorMessage = state => fromNote.getErrorMessage(state.noteReducer);
export const getVisibleNotes = (state, tagText, color, images, query) => {
  fromNote.getVisibleNotes(state.noteReducer, tagText, color, images, query);
};

export const getModal = store => fromUI.getModal(store.UIReducer);
export const getImages = store => fromUI.getImages(store.UIReducer);
export const getImageIndex = store => fromUI.getImageIndex(store.UIReducer);

export const getUser = store => fromUser.getUser(store.userReducer);
export const getIsPasswordChanged = store => fromUser.getIsPasswordChanged(store.userReducer);
export const getIsUpdating = store => fromUser.getIsUpdating(store.userReducer);
export const getUserErrorMessage = store => fromUser.getUserErrorMessage(store.userReducer);

export const getAuthErrorMessage = state => fromAuth.getAuthErrorMessage(state.authReducer);
export const getIsLoggedIn = state => fromAuth.getIsLoggedIn(state.authReducer);
export const getIsLoggingIn = state => fromAuth.getIsLoggingIn(state.authReducer);
export const getIsTokenSent = state => fromAuth.getIsTokenSent(state.authReducer);
export const getIsPasswordUpdated = state => fromAuth.getIsPasswordUpdated(state.authReducer);
export const getIsTokenExpired = state => fromAuth.getIsTokenExpired(state.authReducer);

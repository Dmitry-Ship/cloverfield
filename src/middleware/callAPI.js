import setAuthHeader from '../../helpers/setAuthHeader';

const callAPIMiddleware = () => ({ dispatch, getState }) => next => (action) => {
  const {
    type,
    $fetch,
    } = action;

  if (!type || !$fetch) {
    // Normal action: pass it on
    return next(action);
  }

  if (!typeof type === 'string') {
    throw new Error('Expected a string.');
  }
  const { shouldCallAPI = () => true, payload } = $fetch

  if (!shouldCallAPI(getState())) {
    return;
  }

  let url
  let options = {}
  if (Array.isArray($fetch)) {
    [url, options] = $fetch
  } else {
    url = $fetch
  }


  dispatch({ type });

  const authHeader = setAuthHeader()
  const fetchOptions = {
    ...options, headers: { ...options.headers, ...authHeader.headers }
  }

  async function processFetch() {
    try {
      const response = await fetch(url, fetchOptions)
      if (!response.ok) {
        const errorMessage = await response.json()
        throw errorMessage;
      }

      const data = await response.json()

      dispatch({
        data,
        type: `${type}_SUCCESS`,
      })
    } catch ({ error }) {
      dispatch({
        error,
        type: `${type}_FAILURE`,
      });
    }
  }
  return processFetch()
};

export default callAPIMiddleware;

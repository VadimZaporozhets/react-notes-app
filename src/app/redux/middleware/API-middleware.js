export const CALL_API = 'CALL_API';

export default store => next => action => {
    const isApiCall = action.type === CALL_API;

    if (!isApiCall) {
        return next(action);
    }

    const {url, method, actionTypes, data} = action.meta;

    const [requestType, successType, errorType] = actionTypes;

    next({type: requestType});

    const requestParams = {
        method: method,
        headers: {
            "Content-Type": "application/json",
        }
    };

    if (data) {
        requestParams.body = JSON.stringify(data);
    }

    return fetch(url, requestParams).then((result) => {
        return result.json();
    }).then((result) => {
        next({payload: result, type: successType});
    }).catch(error => {
        next({payload: error, type: errorType});
    });
};
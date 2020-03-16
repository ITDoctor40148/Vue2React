export const ACTION_TYPE_HOME = {
    SET_EBAY: 'SET_EBAY',
    SET_ALIEXPRESS: 'SET_ALIEXPRESS',
    SET_THINGS_NAME: 'SET_THINGS_NAME',
    SET_OUTPUT: 'SET_OUTPUT',
    SET_RESULT_DATA: 'SET_RESULT_DATA',
    SET_NEW_RESULT_DATA: 'SET_NEW_RESULT_DATA',
    SET_RESPONSE_FLAG: 'SET_RESPONSE_FLAG',
    SET_RESPONSE_FLAG1: 'SET_RESPONSE_FLAG1',
    SET_RESPONSE_FLAG2: 'SET_RESPONSE_FLAG2',
    SET_SLIDER_MIN_VALUE: 'SET_SLIDER_MIN_VALUE',
    SET_SLIDER_MAX_VALUE: 'SET_SLIDER_MAX_VALUE',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
    SET_PAGINATION_NUM: 'SET_PAGINATION_NUM',
    SET_FIRST_PAGE_NUM: 'SET_FIRST_PAGE_NUM',
    SET_CHECK_LIMIT: 'SET_CHECK_LIMIT',
    SET_PRODUCT_TITLES: 'SET_PRODUCT_TITLES',
    SET_FLAG: 'SET_FLAG'
}

export function setCurrentPage(data) {
    return {
        type: ACTION_TYPE_HOME.SET_CURRENT_PAGE,
        payload: data
    }
}

export function setCheckLimit(data) {
    return {
        type: ACTION_TYPE_HOME.SET_CHECK_LIMIT,
        payload: data
    }
}

export function setSliderMaxValue(data) {
    return {
        type: ACTION_TYPE_HOME.SET_SLIDER_MAX_VALUE,
        payload: data
    }
}

export function setSliderMinValue(data) {
    return {
        type: ACTION_TYPE_HOME.SET_SLIDER_MIN_VALUE,
        payload: data
    }
}

export function setResponseFlag(data) {
    return {
        type: ACTION_TYPE_HOME.SET_RESPONSE_FLAG,
        payload: data
    }
}

export function setResponseFlag1(data) {
    return {
        type: ACTION_TYPE_HOME.SET_RESPONSE_FLAG1,
        payload: data
    }
}

export function setResponseFlag2(data) {
    return {
        type: ACTION_TYPE_HOME.SET_RESPONSE_FLAG2,
        payload: data
    }
}

export function setNewResultData(data) {
    return {
        type: ACTION_TYPE_HOME.SET_NEW_RESULT_DATA,
        payload: data
    }
}

export function setResultData(data) {
    return {
        type: ACTION_TYPE_HOME.SET_RESULT_DATA,
        payload: data
    }
}

export function setProductTitle(data) {
    return {
        type: ACTION_TYPE_HOME.SET_PRODUCT_TITLES,
        payload: data
    }
}

export const setThingsName = (data) => {
    return {
        type: ACTION_TYPE_HOME.SET_THINGS_NAME,
        payload: data
    }
}

export const toggleEbay = () => {
    return {
        type: ACTION_TYPE_HOME.SET_EBAY
    }
}

export const toggleAliexpress = () => {
    return {
        type: ACTION_TYPE_HOME.SET_ALIEXPRESS
    }
}
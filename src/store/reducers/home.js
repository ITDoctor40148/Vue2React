import { ACTION_TYPE_HOME } from '../actions/home';

const INIT_STATE = {
    flag: true,
    things_name: "",
    output: "",
    result_data: { products: [] },
    result_data_tmp: { products: [] },
    response_flag: false,
    response_flag1: false,
    response_flag2: true,
    slider_min_value: 0,
    slider_max_value: 100,
    current_page_num: 1,
    pagenation_num: 1,
    firstpage_num: 0,
    value_ebay: true,
    value_aliexpress: true,
    check_limit: false,
    product_titles: []
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPE_HOME.SET_RESPONSE_FLAG:
            return {...state, response_flag: action.payload }
        case ACTION_TYPE_HOME.SET_RESPONSE_FLAG1:
            return {...state, response_flag1: action.payload }
        case ACTION_TYPE_HOME.SET_RESPONSE_FLAG2:
            return {...state, response_flag2: action.payload }
        case ACTION_TYPE_HOME.SET_CHECK_LIMIT:
            return {...state, check_limit: action.payload }
        case ACTION_TYPE_HOME.SET_CURRENT_PAGE:
            return {...state, current_page_num: action.payload }
        case ACTION_TYPE_HOME.SET_SLIDER_MAX_VALUE:
            return {...state, slider_max_value: action.payload }
        case ACTION_TYPE_HOME.SET_SLIDER_MIN_VALUE:
            return {...state, slider_min_value: action.payload }
        case ACTION_TYPE_HOME.SET_EBAY:
            return {...state, value_ebay: !state.value_ebay };
        case ACTION_TYPE_HOME.SET_ALIEXPRESS:
            return {...state, value_aliexpress: !state.value_aliexpress };
        case ACTION_TYPE_HOME.SET_THINGS_NAME:
            return {...state, things_name: action.payload };
        case ACTION_TYPE_HOME.SET_PRODUCT_TITLES:
            return {...state, product_titles: [...state.product_titles, ...action.payload] }
        case ACTION_TYPE_HOME.SET_RESULT_DATA:
            return {...state, result_data: { products: [...state.result_data.products, ...action.payload] } }
        case ACTION_TYPE_HOME.SET_NEW_RESULT_DATA:
            return {...state, result_data_tmp: { products: action.payload } }
        default:
            return state;
    }
}

export default reducer;
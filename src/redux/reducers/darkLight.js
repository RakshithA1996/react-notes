const initMode = {
    mode:false
} 

const darkReducer = (state = initMode, action) => {
    switch(action.type){
        case "IS_DARK" :
            return {...state,mode:true};
        case "IS_LIGHT" :
            return {...state,mode:false};
        default :
            return state;
    }
}

export default darkReducer;
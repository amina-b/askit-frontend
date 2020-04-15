 const defaultState = {
    latestQuestions: [],
    topUsers: [],
    hotQuestions: [],
    user: null,
    answers: []
 };

export function reducer(state = defaultState, action) {
    switch(action.type) {
        case "LOAD LATEST QUESTIONS":
            return {
                ...state,
                latestQuestions: action.latestQuestions
            }
        case "GET TOP USERS":
            return {
                ...state,
                topUsers: action.topUsers
            }
        case "GET HOT QUESTIONS":
            return {
                ...state,
                hotQuestions: action.hotQuestions
            }
        case "IS USER LOGIN": {
            console.log(action);
            return {
                ...state,
                user: action.user
            }
        }
        case "LOAD ANSWERS": {
            return {
                ...state,
                answers: action.answers
            }
        }
        default:
            return state;
    }
}
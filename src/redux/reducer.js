 const defaultState = {
     latestQuestions: [],
     topUsers: [{ username: "amina", odgovor: 3 },
                { username: "mesud", odgovor: 4 },
                { username: "nesko", odgovor: 2 }],
    hotQuestions: [ { text: "prvo pitanje", likes: 3, dislikes:5 },
                    { text: "drugo pitanje", likes: 3, dislikes:2 },
                    { text: "trece pitanje", likes: 5, dislikes:1 }
                ],
    user: null
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
        default:
            return state;
    }
}
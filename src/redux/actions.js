export function primjerAkcije(payload) {
    return {
        type: "TIP AKCIJE",
        vrijednost: payload.vrijednost
    };
}

export function loadLatestQuestions(payload) {
    return {
        type: "LOAD LATEST QUESTIONS",
        latestQuestions: payload.latestQuestions
    };
}

export function getTopUsers(payload) {
    return {
        type: "GET TOP USERS",
        topUsers: payload.topUsers
    };
}

export function getHotQuestions(payload) {
    return {
        type: "GET HOT QUESTIONS",
        hotQuestions: payload.hotQuestions
    }
}
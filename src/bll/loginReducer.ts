

interface loginType {
    data:[]
}



const initialState:loginType[] = []



export const loginReducer = (state:loginType[] = initialState,action:setUserType) => {
    switch (action.type) {
        case "SET-USER":
            return state
        default:
            return state
    }
}


export const setUser = (userId:string) => {
    return {
        type:'SET-USER',userId
    } as const
}


type setUserType = ReturnType<typeof setUser>
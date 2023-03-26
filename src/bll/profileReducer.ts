

interface profileType {
    user:[]
}



const initialState:profileType[] = []



export const profileReducer = (state:profileType[] = initialState,action:addUserType) => {
        switch (action.type) {
            case "ADD-USER":
                return state
            default:
                return state
        }
}


export const addUser = (userId:string) => {
    return {
        type:'ADD-USER',userId
    } as const
}


type addUserType = ReturnType<typeof addUser>
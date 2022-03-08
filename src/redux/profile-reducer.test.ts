import profileReducer, {addPostAC, deletePostAC} from "./profile-reducer";
let initialState: any = {
    massageMyPost: [
        {id: '1', massage: 'Hi, how are you?', likesCounter: '5'},
        {id: '2', massage: "It's my first post", likesCounter: '12'}
    ],
}

it('length of posts should be incremented', () => {
        // 1. test data
        let action = addPostAC('IT not IT')
        // 2. action
        let newState = profileReducer(initialState, action)
        // 3. expectation
        expect(newState.massageMyPost.length).toBe(3)
    }
)

it('massage of new posts should be correct', () => {
        // 1. test data
        let action = addPostAC('IT not IT')
        // 2. action
        let newState = profileReducer(initialState, action)
        // 3. expectation
        expect(newState.massageMyPost.length).toBe(3)
    }
)

it('after deleting length of massages should be decrement', () => {
        // 1. test data
        let action = deletePostAC('1')
        // 2. action
        let newState = profileReducer(initialState, action)
        // 3. expectation
        expect(newState.massageMyPost.length).toBe(1)
    }
)
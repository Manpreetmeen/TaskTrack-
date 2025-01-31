import { createAsyncThunk, createSlice, current, nanoid } from "@reduxjs/toolkit";

const initialState = {
    apiusers : [],
    users : JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")) : []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers",async ()=> {
    // console.log("action")
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    return result.json();
})

const Slice = createSlice({
    name : "addUsers",
    initialState,
    reducers : {
        addUsers : (state, action) => {
            const data = {
                id : nanoid(),
                name : action.payload
            }
            state.users.push(data)
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("users", userData)
        },
        removeUsers : (state, action)=> {
            const data = state.users.filter((item)=> {
                return item.id !== action.payload
            })
            state.users = data
            let userData = JSON.stringify(data);
            localStorage.setItem("users",userData)
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action)=> {
            // console.log("reducer", action)
            state.isloading = false;
            state.apiusers = action.payload
        })
    }
})

export const { addUsers, removeUsers } = Slice.actions
export default Slice.reducer;
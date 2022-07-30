import { createSlice, configureStore } from "@reduxjs/toolkit";



const outboxemailslice=createSlice({
    name:'outbox',
    initialState:{email:[],},
    reducers:{

        emailreceive(state,action){

        const newemail=action.payload;
        state.email=newemail;
        },
        
        
    }

}
)
const sentboxmailslice=createSlice({
    name:'sentbox',
    initialState:{email:[],},
    reducers:{

        emailsent(state,action){
            const newemail=action.payload;
            state.email=newemail;

        },
        // sentemaildetails(state,action){

        //     const newemailz=action.payload;
        //     state.emailz=newemailz;
        // },

        },
    }
)

const store=configureStore({
    reducer:{outbox:outboxemailslice.reducer,sentbox:sentboxmailslice.reducer}
});

export const outboxemailsliceactions=outboxemailslice.actions;
export const sentboxmailsliceactions=sentboxmailslice.actions;
export default store;

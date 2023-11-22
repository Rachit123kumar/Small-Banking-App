// import { createStore } from "redux";

// const initialState={
//     loan:0,
//     balance:0,
//     loanPurpose:""
// }

// function reducer(state=initialState,action){

// switch(action.type){
//     case "account/deposit":
//         return{
//             ...state,balance:state.balance+action.payload
//         }


//     case "account/withdrawal":
//         return{
//             ...state,balance:state.balance-action.payload
//         }

//     case "account/requestLoan":
//       if(state.loan>0){
//         return state;
//       }
//     //   LATER
//     return {...state,loan:action.payload.amount ,loanPurpose:action.payload.purpose,balance:state.balance+action.payload.amount}


//     case "account/payLoan":
//     return{
//         ...state,
//         loan:0,
//         loanPurpose:'',
//         balance:state.balance-state.loan
//     }


//     default :
//     return state;
// }

// }


// const store=createStore(reducer);


// function deposit(amount){
// return {
//     type:'account/deposit',payload:amount 
// }
// }

// function withdraw(){

// }

// function requestLoan(){

// }

// function payLoan(){

// }


// store.dispatch({type:'account/deposit',payload:5000});
// console.log(store.getState())




// import { createStore } from "redux";


// const initialState={
//     loan:0,
//     balance:0,
//     loanPurpose:"",
// }


// function reducer(state=initialState,action){

// switch(action.type){

//      case "account/deposit":
//         return{...state,balance:state.balance+action.payload

//      }
//      case "account/withdraw":
//         return{
//             ...state,balance:state.balance-action.payload
//         }


//       case  "account/requestLoan":
//         // LATER

//         if(state.loan>0)return;

//         return{
//             ...state,loan:action.payload.amount,balance:action.payload.amount+state.balance,loanPurpose:action.payload.purpose
//         }


//      case "account/payLoan":
//         return{
//             ...state,balance:state.balance-state.loan,loan:0,loanPurpose:""
//         }
// }


// }



// const store=createStore(reducer);



// // store.dispatch({type:"account/deposit",payload:5000});

// // console.log(store.getState());

// // store.dispatch({type:"account/requestLoan",payload:{amount:10000,purpose:"i have to buy a car"}})
// // console.log(store.getState());



// // store.dispatch({type:"account/payLoan"})
// // console.log(store.getState());

// function deposit(amount){
//     return {
//         type:"account/deposit",payload:amount
//     }
// }


// function withdraw(amount){
//     return {
//         type:"account/withdraw",payload:amount
//     }

// }

// function requestLoan(amount,purpose){
//     return{
//         type:"account/requestLoan",
//         payload:{amount,purpose}
//     }
// }


// function payLoan(){
//     return{
//         type:"account/payLoan"
//     }
// }
// store.dispatch(deposit(5000));

// store.dispatch(withdraw(2000));

// store.dispatch(requestLoan(1000,'buy a shoe'))
// console.log(store.getState());

// store.dispatch(payLoan());
import { combineReducers, createStore } from "redux";

const initialStateAccount={
    loan:0,
    balance:0,
    loanPurpose:""
}


const initialStateCustomer={
    fullName:"",
    nationalId:"",
    createdAt:"",
}


function accountReducer(state=initialStateAccount,action){
    switch(action.type){



        case "account/deposit":
            return{
                ...state,balance:state.balance+action.payload
            }
        case "account/withdraw":
            return{
                ...state,balance:state.balance-action.payload
            }
        case "account/requestLoan":
            return{
                ...state,
                loan:action.payload.amount,
                loanPurpose:action.payload.purpose
                ,balance:state.balance+action.payload.amount
            }

        case "account/payLoan":
            return{
                ...state,
                loan:0,
                balance:state.balance-state.loan
            }


       default :return state
    }
}

function customerReducer(state=initialStateCustomer,action){
    switch(action.type){
     case "customer/createCustomer":
     return{
       ...state,
       fullName:action.payload.fullName,
      nationalId:action.payload.nationalId,
      createdAt:action.payload.createdAt
     }
    
     case "customer/updateName":
        return{
            ...state,
            fullName:action.payload
        }

     default : return state


    }
}

const rootReducer=combineReducers({
    account:accountReducer,
    customer:customerReducer
    
})



const store=createStore(rootReducer);

function deposit(amount){
    return {
        type:"account/deposit",payload:amount
    }
}

function withdraw(amount){
    return{
        type:"account/withdraw",payload:amount
    }
}

function requestLoan(amount,purpose){
    return{
        type:"account/requestLoan",
      payload:{amount,purpose}
    }
}

function payLoan(){
    return{
        type:'account/payLoan'
    }
}


function createCustomer(fullName,nationalId){
    return {type:"customer/createCustomer",
    payload:{fullName,nationalId,createdAt: new Date().toISOString()}
}
}

function updateName(fullName){
    return{
        type:'account/fullName',
        payload:fullName
    }
}

store.dispatch(requestLoan(1000,'buy a iphone'))
console.log(store.getState());



store.dispatch(createCustomer("Bittu kumar","32476283"))

console.log(store.getState());


store.dispatch(deposit(100))
console.log(store.getState());
// create a action creator



import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';
// const tempEvent =   {
//     _id: new Date().getTime(),
//     title: 'Cumpleaños del Jefe',
//     notes: 'Hay que comprar el pastel',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#fafafa',
//     user: {
//       _id: '123',
//       name: 'Fernando'
//     }
// };


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            // tempEvent
        ],
        activeEvent: null,
        alertaGravarEditar: undefined,
        alertaEliminar: undefined,
    },
    reducers: {
        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload;
        },

        //Método adicionar evento
        onAddNewEvent: ( state, { payload }) => {            
            //console.log(state.alertaGravarEditar)
             state.alertaEliminar = undefined;
            state.events.push( payload );
            state.alertaGravarEditar = payload;
            state.activeEvent = null;
            
        },
        onUpdateEvent: ( state, { payload } ) => {
            state.alertaEliminar = undefined;
            
            state.events = state.events.map( event => {
                if ( event.id === payload.id ) {
                    return payload;
                }
                state.alertaGravarEditar = payload;

                return event;
            });
        },
        onDeleteEvent: ( state, { payload }  ) => {
            if ( state.activeEvent ) {
                state.alertaGravarEditar = undefined;
                console.log("onDeleteEvent",payload )
                state.events = state.events.filter( event => event.id !== state.activeEvent.id );
                //state.alertaGravarEditar = payload;
                state.alertaEliminar = payload;                
                state.activeEvent = null;
            }
        },

        //Carregar os eventos
        onLoadEvents: (state, { payload = [] }) => {
            state.isLoadingEvents = false;
            // state.events = payload;
            payload.forEach( event => {//Se existe no store não inserta e não atualiza....!!!
                const exists = state.events.some( dbEvent => dbEvent.id === event.id );//O some retorna um valor booleando se encontra...poderia ser o find
                if ( !exists ) {//SE não existe(!exists) faz atualização. Porém, pode ser usado pro contrario para sempre atualizar se precisar
                    state.events.push( event )
                }


            })
        },
        onLogoutCalendar: ( state ) => {
       
            state.isLoadingEvents = true,
            state.alertaGravarEditar = undefined;
            state.alertaEliminar = undefined;
            state.events      = []
            state.activeEvent = null
        },
        
        clearAlertaGravarEditar: ( state ) => {
            state.alertaGravarEditar = undefined;
            state.alertaEliminar = undefined;
            
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    onAddNewEvent,
    onDeleteEvent,
    onLoadEvents,
    onLogoutCalendar,
    onSetActiveEvent,
    onUpdateEvent,
    clearAlertaGravarEditar
} = calendarSlice.actions;
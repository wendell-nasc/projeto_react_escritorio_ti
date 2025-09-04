import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';
// import { convertEventsToDateEvents } from '../helpers/';

import { onAddNewEvent, onDeleteEvent, onLoadEvents, 
        onSetActiveEvent, onUpdateEvent,clearAlertaGravarEditar } from '../store';




export const useCalendarStore = () => {
  
    const dispatch = useDispatch();
    const { events, activeEvent, alertaGravarEditar, alertaEliminar } = useSelector( state => state.calendar );

    
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) )
    }

    //Metodo salvar
    const startSavingEvent = async( calendarEvent ) => {
        
        try {
            if( calendarEvent.id ) {
                // Actualizando
                await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent );//Chama API para atualizar evento
                dispatch( onUpdateEvent({ ...calendarEvent, user }) );
                return;
            } 
    
            // Creando
            const { data } = await calendarApi.post('/events', calendarEvent );//Chama API para criar
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
            dispatch( clearAlertaGravarEditar );

        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data.msg, 'error');
        }

       
        
    }


    //Método deletar evento
    const startDeletingEvent = async() => {
        // Todo: Llegar al backend
        try {
            const { data } = await calendarApi.delete(`/events/${ activeEvent.id }` );
            dispatch( onDeleteEvent(data) );
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data.msg, 'error');
        }

    }

//Metodo para carregar os eventos 
    const startLoadingEvents = async() => {
        try {
            
            const { data } = await calendarApi.get('/events');//Chama api para carregar as agendas
            console.log( "useCalendarStore - startLoadingEvents - data.eventos", data.eventos )
            // const events = convertEventsToDateEvents( data.eventos ); //converter datas
            // console.log( "useCalendarStore - startLoadingEvents - convertEventsToDateEvents", {events} )
            // dispatch( onLoadEvents( events ) );


        } catch (error) {
          console.log('Error cargando eventos');
          console.log(error)
        }
    }
    


    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
        alertaGravarEditar, //teste alerta atualizar
        alertaEliminar,  //teste alerta eliminar

        //* Métodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,
    }
}

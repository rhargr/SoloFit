import React, { Component } from 'react';
import ReactModal from 'react-modal';
import BigCalendar from 'react-big-calendar';
import EventRepository from '../repositories/event';
import TraineesRepository from '../repositories/trainee';
import ServiceRespoitory from '../repositories/service';
import UserRepository from '../repositories/user';
import { upperFirst, forEach } from 'lodash';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import Nav1 from './Nav1';

const localizer = BigCalendar.momentLocalizer( moment );

class Schedule extends Component {
    constructor ( props ) {
        super( props );
        this.eventRepo = new EventRepository();
        this.traineesRepo = new TraineesRepository();
        this.serviceRepo = new ServiceRespoitory();
        this.userRepo = new UserRepository();

        this.state = {
            events: [],
            trainees: [],
            isOpen: false,
            eventType: '',
            selectedDate: '',
            event: {
                description: null,
                start: null,
                end: null,
                trainerId: this.props.match.params.trainerId,
                traineeId: null,
                title: null,
            },
            selectedEvent: {
                description: null,
                start: null,
                end: null,
                trainerId: this.props.match.params.trainerId,
                traineeId: null,
                title: null,
                serviceId: null
            },
        };
    }

    componentDidMount () {
        Promise.all( [
            this.eventRepo.all( {
                trainerId: this.props.match.params.trainerId,
            } ),
            this.traineesRepo.all(),
            this.serviceRepo.all(),
        ] ).then( ( [ events, trainees, services ] ) => {
            this.setState( {
                events: events.map( ( event ) => {
                    event.start = moment( event.start ).toDate();
                    event.end = moment( event.end ).toDate();
                    return event;
                } ),
                trainees: [
                    {
                        id: '',
                        name: '- Select Client -',
                    },
                    ...trainees,
                ],
                services: [
                    {
                        id: '',
                        name: '- Select Service -',
                    },
                    ...services,
                ],
            } );
        } );
    }

    validateStartAndEnd = ( start, end ) => {
        const mStart = moment( start );
        const mEnd = moment( end );

        if ( mEnd.isBefore( mStart ) ) {
            return new Error();
        }

        const isInvalid = this.state.events.some( ( event ) => {
            if (
                moment( event.start ) <= mEnd ||
                mStart <= moment( event.end ) ||
                ( ( moment( event.start ).isAfter( mStart ) &&
                    moment( event.end ).isBefore( mEnd ) ) ||
                    ( mStart.isAfter( moment( event.start ) ) && mEnd.isBefore( moment( event.end ) ) ) )
            ) {
                return true;
            }
        } );

        if ( isInvalid ) {
            return new Error();
        }

        return true;
    };

    resetStateEvent = () => {
        const event = { ...this.state.event };

        forEach( event, ( value, key ) => {
            event[ key ] = null;
        } );

        this.setState( {
            event,
            selectedDate: '',
        } );
    };

    handleEventSelect = ( { start, id: eventId } ) => {
        this.eventRepo.read( eventId )
            .then( selectedEvent => {
                this.setState( {
                    eventType: 'event',
                    selectedEvent,
                    selectedDate: moment( start ).format( 'YYYY-MM-DD' ),
                } )
            } );
        this.handleModalVisibility();
    };

    handleSlotSelect = ( { start, end, slots } ) => {
        this.setState( {
            eventType: 'slot',
            selectedDate: moment( start ).format( 'YYYY-MM-DD' ),
        } );
        this.handleModalVisibility();
    };

    handleModalVisibility = () => {
        this.setState( {
            isOpen: !this.state.isOpen,
        } );
    };

    handleEventChange = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        const stateName = this.state.eventType === 'event'
            ? 'selectedEvent'
            : 'event'
        this.setState( {
            [ stateName ]: {
                ...this.state[ stateName ],
                [ name ]: value,
            },
        } );
    };

    handleEventStartChange = ( momentObj ) => {
        this.setState( {
            event: {
                ...this.state.event,
                start: momentObj.format( 'HH:mm:ss' ),
            },
        } );
    };

    handleEventEndChange = ( momentObj ) => {
        this.setState( {
            event: {
                ...this.state.event,
                end: momentObj.format( 'HH:mm:ss' ),
            },
        } );
    };

    handleEventEditStartChange = ( momentObj ) => {
        this.setState( {
            selectedEvent: {
                ...this.state.selectedEvent,
                start: momentObj.format(),
            },
        } );
    };

    handleEventEditEndChange = ( momentObj ) => {
        this.setState( {
            selectedEvent: {
                ...this.state.selectedEvent,
                end: momentObj.format(),
            },
        } );
    };

    handleEventSubmit = () => {
        const event = {
            ...this.state.event,
        };

        event.start = moment(
            `${ this.state.selectedDate } ${ event.start }`,
        ).format( 'YYYY-MM-DD HH:mm:ss' );
        event.end = moment( `${ this.state.selectedDate } ${ event.end }` ).format(
            'YYYY-MM-DD HH:mm:ss',
        );

        this.eventRepo.create( event ).then( ( id ) => {
            this.setState( {
                events: [ ...this.state.events, { ...event, id } ],
            } );

            this.handleModalVisibility();
            this.resetStateEvent();
        } );
    };

    handleEventEdit = ( e ) => {
        const event = {
            ...this.state.selectedEvent,
        };

        this.eventRepo.update( this.state.selectedEvent.id, event ).then( () => {
            this.eventRepo.all( {
                trainerId: this.props.match.params.trainerId,
            } )
                .then( ( events ) => {
                    this.setState( {
                        events: events.map( ( event ) => {
                            event.start = moment( event.start ).toDate();
                            event.end = moment( event.end ).toDate();
                            return event;
                        } ),
                    } )
                } );
            this.handleModalVisibility();
        } );
    };

    handleEventDelete = ( e ) => {
        this.eventRepo.destroy( this.state.selectedEvent.id ).then( () => {
            this.eventRepo.all( {
                trainerId: this.props.match.params.trainerId,
            } )
                .then( ( events ) => {
                    this.setState( {
                        events: events.map( ( event ) => {
                            event.start = moment( event.start ).toDate();
                            event.end = moment( event.end ).toDate();
                            return event;
                        } ),
                    } )
                } );
            this.handleModalVisibility();
        } );;
    };

    renderEditEvent = () => {
        return (
            <div>
                <h4>Edit</h4>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        onChange={this.handleEventChange}
                        name="title"
                        value={this.state.selectedEvent.title}
                    />
                </div>
                <div className="form-group">
                    <TimePicker
                        id="startTime"
                        placeholder="Start Time"
                        showSecond={false}
                        onChange={this.handleEventEditStartChange}
                        defaultValue={moment( this.state.selectedEvent.start )}
                        name="start"
                        use12Hours
                    />
                </div>
                <div className="form-group">
                    <TimePicker
                        id="endTime"
                        placeholder="End Time"
                        onChange={this.handleEventEditEndChange}
                        defaultValue={moment( this.state.selectedEvent.end )}
                        showSecond={false}
                        name="end"
                        use12Hours
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="traineeId"
                        value={this.state.selectedEvent.traineeId}
                        onChange={this.handleEventChange}>
                        {this.state.trainees.map( ( trainee ) => {
                            return (
                                <option key={trainee.id} value={trainee.id}>
                                    {trainee.name}
                                </option>
                            );
                        } )}
                    </select>
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="serviceId"
                        value={this.state.selectedEvent.serviceId}
                        onChange={this.handleEventChange}>
                        {this.state.services.map( ( service ) => {
                            return (
                                <option key={service.id} value={service.id}>
                                    {upperFirst( service.name )}
                                </option>
                            );
                        } )}
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        onChange={this.handleEventChange}
                        id=""
                        cols="30"
                        name="description"
                        rows="10"
                        placeholder="Description"
                        value={this.state.selectedEvent.description}
                    />
                </div>
                <div className="form-group">
                    <div className="btn-group brn-group-lg" role="group">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleModalVisibility}>
                            CANCEL
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleEventDelete}>
                            DELETE
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleEventEdit}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    renderCreateSlot = () => {
        return (
            
            <div>
                <h4>Create Event</h4>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Title"
                        onChange={this.handleEventChange}
                        name="title"
                    />
                </div>
                <div className="form-group">
                    <TimePicker
                        id="startTime"
                        placeholder="Start Time"
                        showSecond={false}
                        onChange={this.handleEventStartChange}
                        name="start"
                        use12Hours
                    />
                </div>
                <div className="form-group">
                    <TimePicker
                        id="endTime"
                        placeholder="End Time"
                        onChange={this.handleEventEndChange}
                        showSecond={false}
                        name="end"
                        use12Hours
                    />
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="traineeId"
                        onChange={this.handleEventChange}>
                        {this.state.trainees.map( ( trainee ) => {
                            return (
                                <option key={trainee.id} value={trainee.id}>
                                    {trainee.name}
                                </option>
                            );
                        } )}
                    </select>
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="serviceId"
                        onChange={this.handleEventChange}>
                        {this.state.services.map( ( service ) => {
                            return (
                                <option key={service.id} value={service.id}>
                                    {upperFirst( service.name )}
                                </option>
                            );
                        } )}
                    </select>
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        onChange={this.handleEventChange}
                        id=""
                        cols="30"
                        name="description"
                        rows="10"
                        placeholder="Description"
                    />
                </div>
                <div className="form-group">
                    <div className="btn-group brn-group-lg" role="group">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleModalVisibility}>
                            CANCEL
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={this.handleEventSubmit}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    render () {
        const modalBody =
            this.state.eventType === 'event'
                ? this.renderEditEvent()
                : this.state.eventType === 'slot'
                    ? this.renderCreateSlot()
                    : '';

        return (
            <div
                style={{
                    minHeight: '100vh',
                }}>
                <Nav1 />
                <BigCalendar
                    style={{
                        minHeight: '100vh',
                    }}
                    selectable
                    steps={15}
                    onSelectEvent={this.handleEventSelect}
                    onSelectSlot={this.handleSlotSelect}
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                    resourceAccessor="id"
                />
                <ReactModal
                    style={{ overlay: { zIndex: 1000 } }}
                    isOpen={this.state.isOpen}>
                    {modalBody}
                </ReactModal>
            </div>
         
        );
    }
}

export default Schedule;

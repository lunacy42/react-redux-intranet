import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createNewEvent, getEvents, mutateEvent, removeEvent } from '../../common/api/api';
import { CompanyEvent } from '../../common/types';

export interface EventsState {
  events: CompanyEvent[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  createStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: EventsState = {
  events: [],
  status: 'idle',
  updateStatus: 'idle',
  createStatus: 'idle',
  deleteStatus: 'idle',
  error: null
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async (_, thunkAPI) => {
  try {
    const response = await getEvents();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateEvent = createAsyncThunk(
  'events/updateEvent',
  async (event: CompanyEvent, thunkAPI) => {
    try {
      const response = await mutateEvent(event);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createEvent = createAsyncThunk(
  'events/createEvent',
  async (event: CompanyEvent, thunkAPI) => {
    try {
      const response = await createNewEvent(event);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'events/deleteEvent',
  async (eventId: string, thunkAPI) => {
    try {
      const response = await removeEvent(eventId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.events = [];
        state.error = action.error.message;
      })
      .addCase(updateEvent.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateEvent.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        const events = state.events;
        const newEvents = events.map((event: CompanyEvent) =>
          event.id === action.payload.id ? action.payload : event
        );
        state.events = newEvents;
      })
      .addCase(updateEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createEvent.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createEvent.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.events = [...state.events, action.payload];
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteEvent.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteEvent.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        const events = state.events;
        const newEvents = events.filter((event: CompanyEvent) => event.id !== action.payload);
        state.events = newEvents;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectEvents = (state: RootState) => state.events.events;
export const selectEventsStatus = (state: RootState) => state.events.status;
export const selectEventsUpdateStatus = (state: RootState) => state.events.updateStatus;
export const selectEventsCreateStatus = (state: RootState) => state.events.createStatus;
export const selectEventsDeleteStatus = (state: RootState) => state.events.deleteStatus;
export const selectEventById = (state: RootState, id: string) => {
  return state.events.events.find((event: CompanyEvent) => event.id === id);
};

export const selectUpcomingEvents = createSelector(selectEvents, (events: CompanyEvent[]) => {
  // select only events in the future, and sort them on the date they occur
  const upcomingEvents =
    events?.filter((event: CompanyEvent) => {
      const now = new Date();
      const eventDate = new Date(event.date);
      return eventDate > now;
    }) || null;
  upcomingEvents.sort((a, b) => {
    if (new Date(b.date) > new Date(a.date)) {
      return 1;
    }
    if (new Date(b.date) < new Date(a.date)) {
      return -1;
    }
    return 0;
  });
  console.log('upcomingEvents', upcomingEvents);
  return upcomingEvents;
});

export default eventsSlice.reducer;

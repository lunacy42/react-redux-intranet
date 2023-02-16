import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getEvents, mutateEvents } from '../../common/api/api';
import { Event } from '../../common/types';

export interface EventsState {
  events: Event[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: EventsState = {
  events: [],
  status: 'idle',
  error: null
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try {
    const response = await getEvents();
    return response;
  } catch (error) {
    return error;
  }
});

export const updateEvents = createAsyncThunk('events/updateEvents', async (event: Event) => {
  try {
    const response = await mutateEvents(event);
    return response;
  } catch (error) {
    return error;
  }
});

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
      });
  }
});

export const selectEvents = (state: RootState) => state.events.events;
export const selectEventsStatus = (state: RootState) => state.events.status;

export const selectUpcomingEvents = createSelector(selectEvents, (events: Event[]) => {
  // select only events in the future, and sort them on the date they occur
  const upcomingEvents =
    events?.filter((event: Event) => {
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

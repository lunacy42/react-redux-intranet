import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getAnnouncements } from '../../common/api/api';
import { Announcement } from '../../common/types';

export interface AnnouncementsState {
  announcements: Announcement[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: AnnouncementsState = {
  announcements: [],
  status: 'idle',
  error: null
};

export const fetchAnnouncements = createAsyncThunk('announcements/fetchAnnouncements', async () => {
  try {
    const response = await getAnnouncements();
    return response;
  } catch (error) {
    return error;
  }
});

export const announcementsSlice = createSlice({
  name: 'announcements',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.announcements = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.status = 'failed';
        state.announcements = [];
        state.error = action.error.message;
      });
  }
});

export const selectAnnouncements = (state: RootState) => state.announcements.announcements;
export const selectAnnouncementsStatus = (state: RootState) => state.announcements.status;

export const selectSortedAnnouncements = createSelector(
  selectAnnouncements,
  (announcements: Announcement[]) => {
    // select all announcements
    const sortedAnnouncements = announcements?.sort((a, b) => {
      if (new Date(b.created) > new Date(a.created)) {
        return 1;
      }
      if (new Date(b.created) < new Date(a.created)) {
        return -1;
      }
      return 0;
    });
    console.log('sortedAnnouncements', sortedAnnouncements);
    return sortedAnnouncements;
  }
);

export default announcementsSlice.reducer;

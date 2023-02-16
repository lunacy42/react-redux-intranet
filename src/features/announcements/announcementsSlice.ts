import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getAnnouncements, mutateAnnouncements } from '../../common/api/api';
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

export const updateAnnouncements = createAsyncThunk(
  'announcements/updateAnnouncements',
  async (announcement: Announcement) => {
    try {
      const response = await mutateAnnouncements(announcement);
      return response;
    } catch (error) {
      return error;
    }
  }
);

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
export const selectAnnouncementById = (state: RootState, id: string) => {
  return state.announcements.announcements.find(
    (announcement: Announcement) => announcement.id === id
  );
};

export const selectSortedAnnouncements = createSelector(
  selectAnnouncements,
  (announcements: Announcement[]) => {
    // select all announcements
    const newAnnouncements = [...announcements];
    const sortedAnnouncements = newAnnouncements?.sort((a, b) => {
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

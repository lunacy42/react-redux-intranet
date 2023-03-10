import { createAsyncThunk, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  createNewAnnouncement,
  getAnnouncements,
  mutateAnnouncement,
  removeAnnouncement
} from '../../common/api/api';
import { Announcement } from '../../common/types';

export interface AnnouncementsState {
  announcements: Announcement[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  updateStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  createStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  deleteStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

const initialState: AnnouncementsState = {
  announcements: [],
  status: 'idle',
  updateStatus: 'idle',
  createStatus: 'idle',
  deleteStatus: 'idle',
  error: null
};

export const fetchAnnouncements = createAsyncThunk(
  'announcements/fetchAnnouncements',
  async (_, thunkAPI) => {
    try {
      const response = await getAnnouncements();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateAnnouncement = createAsyncThunk(
  'announcements/updateAnnouncement',
  async (announcement: Announcement, thunkAPI) => {
    try {
      const response = await mutateAnnouncement(announcement);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createAnnouncement = createAsyncThunk(
  'announcements/createAnnouncement',
  async (announcement: Announcement, thunkAPI) => {
    try {
      const response = await createNewAnnouncement(announcement);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAnnouncement = createAsyncThunk(
  'announcements/deleteAnnouncement',
  async (announcementId: string, thunkAPI) => {
    try {
      const response = await removeAnnouncement(announcementId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      })
      .addCase(updateAnnouncement.pending, (state, action) => {
        state.updateStatus = 'loading';
      })
      .addCase(updateAnnouncement.fulfilled, (state, action: PayloadAction<any>) => {
        state.updateStatus = 'succeeded';
        const announcements = state.announcements;
        const newAnnouncements = announcements.map((announcement: Announcement) =>
          announcement.id === action.payload.id ? action.payload : announcement
        );
        state.announcements = newAnnouncements;
      })
      .addCase(updateAnnouncement.rejected, (state, action) => {
        state.updateStatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(createAnnouncement.pending, (state, action) => {
        state.createStatus = 'loading';
      })
      .addCase(createAnnouncement.fulfilled, (state, action: PayloadAction<any>) => {
        state.createStatus = 'succeeded';
        state.announcements = [...state.announcements, action.payload];
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.createStatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteAnnouncement.pending, (state, action) => {
        state.deleteStatus = 'loading';
      })
      .addCase(deleteAnnouncement.fulfilled, (state, action: PayloadAction<any>) => {
        state.deleteStatus = 'succeeded';
        const announcements = state.announcements;
        const newAnnouncements = announcements.filter(
          (announcement: Announcement) => announcement.id !== action.payload
        );
        state.announcements = newAnnouncements;
      })
      .addCase(deleteAnnouncement.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectAnnouncements = (state: RootState) => state.announcements.announcements;
export const selectAnnouncementsStatus = (state: RootState) => state.announcements.status;
export const selectAnnouncementsUpateStatus = (state: RootState) =>
  state.announcements.updateStatus;
export const selectAnnouncementsCreateStatus = (state: RootState) =>
  state.announcements.createStatus;
export const selectAnnouncementsDeleteStatus = (state: RootState) =>
  state.announcements.deleteStatus;
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

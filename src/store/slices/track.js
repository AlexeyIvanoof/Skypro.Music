import { createSlice } from "@reduxjs/toolkit";


//перемешивание треков
const getShuffleAllTracks = (array) => {
  const arrayTracks = new Array(...array);
  return arrayTracks.sort(() => Math.random() - 0.5);
};

//создаем срез
export const tracksSlice = createSlice({
  name: "tracksReducer",
  initialState:{
    allTracks: [],
    currentPage: "",
    currentTrack: null,
    favoritTrack: null,
    indexCurrentTrack: null,
    isPlaying: false,
    shuffle: false,
    shuffleAllTracks: [],
    favouritesTracks: [],
    currentPlaylist: [],
  },
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

    setFavouriteTracksAll: (state, action) => {
      state.favouritesTracks = action.payload;
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setCurrentPlaylist: (state, action) => {
      state.currentPlaylist = action.payload;
    },


//reducer кнопки плей
    setIsPlaying: (state, action) => {
        state.isPlaying = action.payload;
      },

//reducer текущий трек
      setCurrentTrack: (state, action) => {
        const { track, indexCurrentTrack } = action.payload;
      state.currentTrack = track ;
      state.favoritTrack = track;
      state.indexCurrentTrack = indexCurrentTrack;
    },

//reducer кнопки трек вперед 
      setNextTrack: (state, action) => {
        const {indexNextTrack, nextTrack} = action.payload;
        state.currentTrack = nextTrack;
        state.favoritTrack = nextTrack; 
        state.indexCurrentTrack = indexNextTrack;
      },

//reducer кнопки трек назад
      setPrevTrack: (state, action) => {
        const {indexPrevTrack, prevTrack} = action.payload;
        state.currentTrack = prevTrack;
        state.favoritTrack = prevTrack; 
        state.indexCurrentTrack =  indexPrevTrack;
      },
      
//reducer кнопки перемешать трек 
      toggleShuffleTrack: (state, action) => {
        state.shuffle = action.payload;
       state.shuffleAllTracks = state.shuffle && getShuffleAllTracks(state.allTracks)
      }
   
}
  });
// набор событий (actions) которые будут работать в приложении
  export const {  setAllTracks,
    setCurrentTrack,
    setNextTrack,
    setPrevTrack,
    setIsPlaying,
    toggleShuffleTrack,
    setFavouriteTracksAll,
    setCurrentPage,
    setCurrentPlaylist,
  } = tracksSlice.actions;
   

  //reducer взятый по умолчанию из среза
  export default tracksSlice.reducer; 
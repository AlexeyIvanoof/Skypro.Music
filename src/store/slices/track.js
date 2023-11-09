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
    currentTrack: null,
    indexCurrentTrack: null,
    isPlaying: false,
    shuffle: false,
    shuffleAllTracks: []
  },
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload;
    },

//reducer кнопки плей
    setIsPlaying: (state, action) => {
        state.isPlaying = action.payload;
      },

//reducer текущий трек
      setCurrentTrack: (state, action) => {
        const { track, indexCurrentTrack } = action.payload;
      state.currentTrack = track;
      state.indexCurrentTrack = indexCurrentTrack;
    },

//reducer кнопки трек вперед 
      setNextTrack: (state, action) => {
        const {indexNextTrack, nextTrack} = action.payload;
        state.currentTrack = nextTrack;
        state.indexCurrentTrack = indexNextTrack;
      },

//reducer кнопки трек назад
      setPrevTrack: (state, action) => {
        const {indexPrevTrack, prevTrack} = action.payload;
        state.currentTrack = prevTrack;
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
  export const {setAllTracks,  setIsPlaying,  setCurrentTrack,  setNextTrack,  setPrevTrack, toggleShuffleTrack} = tracksSlice.actions;

  //reducer взятый по умолчанию из среза
  export default tracksSlice.reducer; 
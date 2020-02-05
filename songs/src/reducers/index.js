import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'No Scrubs', duration: '4:05'},
    {title: 'Macarana', duration: '2:14'},
    {title: 'All Star', duration: '3:45'},
    {title: 'I want it this way', duration: '1:23'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

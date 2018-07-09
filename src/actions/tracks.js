var mockApiDate = [
  {
    id : 1,
    name: 'Саня манагер'
  },
  {
    id : 2,
    name: 'Тигран и Саня'
  },
  {
    id : 3,
    name: 'Саня и вейп'
  },
  {
    id : 4,
    name: 'Саня на диване'
  },
  {
    id : 5,
    name: 'Саня докладчик'
  },
];

export const GetTracks = () => dispatch => {
    setTimeout(() => {
      console.log('I got tracks');
      dispatch({type:'FETCH_TRACKS_SUCCESS', payload : mockApiDate})
    }, 2000)
};
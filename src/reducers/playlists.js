const initialState = [
  'Managers playlist',
  'Developers playlist'
];

export default function playlists(state = initialState, action) {
  //REDUCER
  //вторым аргументом подписываемся на событие
  //console.log(action);
  //Меняем стейт
  if (action.type === 'ADD_PLAYLIST'){
    return state;
  }else if(action.type === 'DELETE_PLAYLIST'){
    return state;
  }
  return state;
}
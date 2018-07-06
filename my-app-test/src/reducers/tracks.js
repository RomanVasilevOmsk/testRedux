const initialState = [
  //начальное состояние стейта
  {
    id:1,
    name :'Александр Манукалов - Кровь, моя кровь'
  },
  {
    id:2,
    name :'Стас Борецкий - Бродяга'
  },
  {
    id:3,
    name :'Тату - Нас не догонят'
  },
  {
    id:4,
    name :'Витас - 7 элемент'
  },
  {
    id:5,
    name :'Алла Пугачёва - Миллион алых роз'
  },
  {
    id:6,
    name :'Gucci Mane - I get the bag lyrics'
  }
];

export default function playlist(state = initialState, action) {
  //REDUCER
  //вторым аргументом подписываемся на событие
  //console.log(action);
  //Меняем стейт
  if (action.type === 'ADD_TRACK'){
    return [
      ...state,//добавляем значение и возвращаем !!!новый массив ибо иммутабельность
      action.payload
    ];
  }else if (action.type === 'FETCH_TRACKS_SUCCESS'){
    return action.payload;
  }
  return state;
}
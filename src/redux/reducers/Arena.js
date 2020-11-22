import {
  GET_SCHEDULE_ERROR,
  GET_SCHEDULE_START,
  GET_SCHEDULE_SUCCESS, RENT_INTERVAL_ERROR,
  RENT_INTERVAL_START,
  RENT_INTERVAL_SUCCESS
} from '../actions/actionTypes'

const initialState = {
  name: 'Название ледовой арены',
  id: '1',
  images: ['C://Users/xomix/Downloads/img_.jpg', 'C://Users/xomix/Downloads/img_.jpg'],
  address: 'Адресс; Целиком выведется на сайт',
  site: 'http://www.ledarena.ru/',
  coordinates: ['55.794521953672785' ,'37.94621561726508'],
  social: {
    instagram: 'https://www.instagram.com/',
    vk: 'https://vk.com/',
    telegram: 'https://telegram.org/',
    youtube: 'https://www.youtube.com/'
  },
  additional: [
    ['information1', 'знаasdfsdfasdfчениезнаasdfsdfasdfчениезнаasdfsdfasdfчениезнаasdfsdfasdfчениезнаasdfsdfasdfчение'],
    ['information2', 'значение'],
    ['information3', 'значение'],
  ],
  workingHours: '9:00 - 23:00 по МСК',
  rentedHours: [],
  childrenCommands: [
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    },
    {
      image: 'ссылка на картинку',
      name: 'название команды',
      phone: '+7777 777 77 77',
      email: 'example@mail.ru',
      social: {
        instagram: 'если есть, то ссылка; если нет, то null',
        vk: 'если есть, то ссылка; если нет, то null',
        telegram: 'если есть, то ссылка; если нет, то null',
        youtube: 'если есть, то ссылка; если нет, то null'
      }
    }
  ],
  scheduleLoading: false,
  rentIntervalLoading: false,
  error: null
}

export default function ArenaReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SCHEDULE_START:
      return {
        ...state,
        scheduleLoading: true
      }
    case GET_SCHEDULE_SUCCESS:
      return {
        ...state,
        rentedHours: action.schedule,
        scheduleLoading: false
      }
    case GET_SCHEDULE_ERROR:
      return {
        ...state,
        scheduleLoading: false,
        error: action.e
      }
    case RENT_INTERVAL_START:
      return {
        ...state,
        rentIntervalLoading: true,
      }
    case RENT_INTERVAL_SUCCESS:
      return {
        ...state,
        rentIntervalLoading: false,
        rentedHours: action.interval
      }
    case RENT_INTERVAL_ERROR:
      return {
        ...state,
        rentIntervalLoading: false,
        error: action.e
      }
    default: return state
  }
}
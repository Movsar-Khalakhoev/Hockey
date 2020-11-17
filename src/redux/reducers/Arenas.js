const initialState = {
  arenasList: [
    {
      name: 'Название ледовой арены',
      id: '1',
      images: ['https://clck.ru/RyAsn', 'https://clck.ru/RyAsn'],
      address: 'Адресс; Целиком выведется на сайт',
      coordinates: '55.794521953672785,37.94621561726508',
      social: {
        instagram: 'https://www.instagram.com/',
        vk: 'https://vk.com/',
        telegram: 'https://telegram.org/',
        youtube: 'https://www.youtube.com/'
      },
      additional: [
        ['information1', 'значение'],
        ['information2', 'значение'],
        ['information3', 'значение'],
      ],
      workingHours: '9:00 - 23:00 по МСК'
    },
    {
      name: 'Название ледовой арены',
      id: '2',
      images: ['https://clck.ru/RyAsn', 'https://clck.ru/RyAsn'],
      address: 'Адресс; Целиком выведется на сайт',
      coordinates: '55.794521953672785,37.94621561726508',
      social: {
        instagram: 'https://www.instagram.com/',
        vk: 'https://vk.com/',
        telegram: 'https://telegram.org/',
        youtube: 'https://www.youtube.com/'
      },
      additional: [
        ['information1', 'значение'],
        ['information2', 'значение'],
        ['information3', 'значение'],
      ],
      workingHours: '9:00 - 23:00 по МСК'
    }
  ]
}

export default function ArenasReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

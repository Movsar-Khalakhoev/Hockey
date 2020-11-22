const initialState = {
  arenasList: [
    {
      name: 'Названиfdsfgdfе ледовой арены',
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
      workingHours: '9:00 - 23:00 по МСК'
    },
    {
      name: 'Название ледовой арены',
      id: '2',
      images: ['C://Users/xomix/Downloads/img_.jpg', 'C://Users/xomix/Downloads/img_.jpg'],
      address: 'Адресс; Целиком выведеsdfтся на сайт',
      coordinates: ['55.794521953672785' ,'37.94621561726508'],
      site: 'http://www.ledarena.ru/',
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

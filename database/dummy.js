module.exports = {
  nextID: 2,
  people: [
    {
      id: 1,
      username: 'davidhartsough',
      name: {
        first: 'David',
        last: 'Hartsough',
      },
      birthday: {
        year: 1994,
        month: 3,
        day: 31,
      },
      gender: 'Male',
      email: 'hartsoughdavid@gmail.com',
      languages: ['English'],
      links: [
        {
          name: 'Spotify',
          link: 'http://spotify.com',
        },
      ],
      identities: ['happy human', 'conversationalist'],
      values: ['purpose', 'value'],
      missions: [
        {
          contribution: 'To outline the fundamentals of fostering flourishing',
          impact:
            "To establish the foundation of humanity's decision-making on the fulfilment of its needs",
          keywords: [
            'flourshing',
            'humanity',
            'outline',
            'define',
            'human',
            'fulfilment',
            'needs',
            'decision-making',
          ],
        },
        {
          contribution: 'To cultivate connectedness',
          impact: 'To address the neglected problem of loneliness',
          keywords: ['connectedness', 'connection', 'human', 'loneliness'],
        },
        {
          contribution:
            'To create a community culture that celebrates and showcases curiosity, lifelong learning, and personal projects',
          impact: 'To inspire aspiration, ambition, and actualization',
          keywords: [
            'community',
            'culture',
            'curiosity',
            'learning',
            'projects',
            'inspiration',
            'aspiration',
            'ambition',
            'actualization',
          ],
        },
      ],
      residences: [
        {
          locale: {
            city: 'Boise',
            state: 'ID',
          },
          timeframe: {
            start: 2016,
            end: null,
          },
        },
        {
          locale: {
            city: 'Peoria',
            state: 'IL',
          },
          timeframe: {
            start: 2012,
            end: 2016,
          },
        },
      ],
      roles: [
        {
          name: 'Student',
          organization: 'Bradley University',
          timeframe: {
            start: 2012,
            end: 2016,
          },
          description:
            'Graduated with a BS in Interactive Media: Web and App Design and Development',
        },
        {
          name: 'Senior Software Engineer',
          organization: 'TSheets',
          timeframe: {
            start: 2016,
            end: null,
          },
          description: '',
        },
      ],
      projects: [
        {
          name: 'Awesome App',
          type: 'App',
          description: 'Do great things with this cool app.',
          timeframe: {
            start: 2011,
            end: 2012,
          },
          links: [
            {
              name: 'website',
              link: 'http://google.com',
            },
          ],
          mission: {
            contribution:
              'To create a tool that empowers people to do amazing things',
            impact: 'To cultivate a world with more amazingness',
            keywords: ['amazing things', 'amazingness', 'empowerment'],
          },
          tools: ['React Native'],
        },
      ],
    },
  ],
};

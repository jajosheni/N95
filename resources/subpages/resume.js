export default {
  name: 'resume', // do not change
  pageTitle: 'Resume',
  icon: 'https://shemehamitaj.com/assets/images/resume.svg',

  experience: {
    title: 'Experience',
    icon: 'https://shemehamitaj.com/assets/images/experience.svg',
    data: [
      {
        title: 'Full stack developer',
        start: '06/2021',
        end: 'present',
        company: 'circuly GmbH',
        description: 'Working with an awesome international team to enable circular business models through SaaS.'
      },
      {
        title: 'Robotics Developer',
        start: '08/2019',
        end: '08/2020',
        company: 'Kocaeli University',
        description: 'Work with a diverse team of electric and electronic engineers to create and develop AMR with natural navigation.'
      },
    ]
  },
  education: {
    title: 'Education',
    icon: 'https://shemehamitaj.com/assets/images/education.svg',
    data: [
      {
        major: 'Computer engineering',
        start: '09/2015',
        end: '07/2020',
        institute: 'Kocaeli University',
        description: 'Bachelor\'s Degree from Computer Engineering Department at Kocaeli University, Turkey.'
      },
      {
        major: 'Turkish preparatory school ',
        start: '09/2014',
        end: '08/2015',
        institute: 'Kocaeli University',
        description: 'Attended Turkish Language course at the Language Center located inside Kocaeli University, Turkey.'
      },
    ]
  },
  certificatesAndAwards: {
    title: 'Certificates/Awards',
    icon: 'https://shemehamitaj.com/assets/images/award.svg',
    data: [
      {
        title: 'IELTS academic',
        date: '14/07/2020',
        issuedBy: 'British Council',
        description: 'English Proficiency C1 Certificate with a 7.65 out of 9.0 score. Test taken in Istanbul, Turkey.'
      },
      {
        title: 'OBSS Code Master',
        date: '19/12/2019',
        issuedBy: 'OBSS',
        description: 'A hackathon held at Kocaeli University by OBSS. Awarded 3rd place with a bonus of 1000TRY.'
      },
    ]
  },
  academic: {
    title: 'Academic',
    icon: 'https://shemehamitaj.com/assets/images/academic.svg',
    data: [
      {
        title: 'A Survey of ROS Security',
        date: '10/07/2019',
        issuedBy: 'IWW2019',
        description: 'Published a conference paper at 10th International Conference on Image Processing, Wavelet and Applications.'
      },
    ]
  },
  skills: [
    {
      title: 'Coding',
      barType: 'progress',
      icon: 'https://shemehamitaj.com/assets/images/code.svg',
      items: [
        {
          title: 'C/C++',
          level: 8
        },
        {
          title: 'Java/Android',
          level: 8
        },
        {
          title: 'Javascript',
          level: 9
        },
        {
          title: 'PHP',
          level: 9
        },
      ]
    },
    {
      title: 'Design',
      barType: 'progress',
      icon: 'https://shemehamitaj.com/assets/images/design.svg',
      items: [
        {
          title: 'Web Design',
          level: 8
        },
        {
          title: 'Photoshop',
          level: 9
        },
        {
          title: 'After Effects',
          level: 8
        },
        {
          title: 'Premiere',
          level: 7
        },
      ]
    },
    {
      title: 'Languages',
      barType: 'dots',
      icon: 'https://shemehamitaj.com/assets/images/languages.svg',
      items: [
        {
          title: 'Albanian',
          level: 10
        },
        {
          title: 'English',
          level: 9
        },
        {
          title: 'Turkish',
          level: 9
        },
        {
          title: 'Italian',
          level: 6
        }
      ]
    },
    {
      title: 'Knowledge',
      barType: 'dots',
      icon: 'https://shemehamitaj.com/assets/images/knowledge.svg',
      items: [
        {
          title: 'Mobile Apps',
          level: 9
        },
        {
          title: 'Desktop Apps',
          level: 9
        },
        {
          title: 'Web Apps',
          level: 10
        },
        {
          title: 'Embedded',
          level: 8
        }
      ]
    }
  ],
};

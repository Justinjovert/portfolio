import githubAPI from '../assets/githubAPI.png'
import countryPage from '../assets/countryPage.jpg'
import flappyBird from '../assets/flappyBird.png'



const projects = [
    {
        title: 'GitHub Profile',
        description: 'GitHub profile viewer with live API data, responsive design, and user search',
        githubRepo: 'https://github.com/Justinjovert/GithubAPI',
        liveDemo: 'https://justinjovert.github.io/GithubAPI/',
        webDemoImg: githubAPI ,
        techStack: ['ReactJS', 'TailwindCSS']
    },
   {
        title: 'Country Page',
        description: 'Country explorer app with REST API data, search, filtering, dark mode, and React Router navigation.',
        githubRepo: 'https://github.com/Justinjovert/country-page',
        liveDemo: 'https://justinjovert.github.io/country-page/',
        webDemoImg: countryPage ,
        techStack: ['ReactJS', 'TailwindCSS']
    },
    {
        title: 'Flappy Bird',
        description: 'Browser-based Flappy Bird clone coded in plain JavaScript and HTML, complete with animations, controls, and scoring system.',
        githubRepo: 'https://github.com/Justinjovert/Flappy-bird-mockup',
        liveDemo: 'https://justinjovert.github.io/Flappy-bird-mockup/',
        webDemoImg: flappyBird ,
        techStack: ['JavaScript', 'CSS']
    },
]

export default projects
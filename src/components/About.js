import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>About Me</h4>
      <p>My name is Jack Nguyen and I'm not the best programmer. I am currently a Junior and for the most part, learning to code has been fairly fun as most people say.</p>
      <p>What I want people to get from my sites are famous recipes from different countries that they've hopefully never heard.</p>
      <p>To make this website I used NodeJS and React which may have not been tthe brightest idea as it was very difficult to learn.</p>
      <p>From this class, one thing i've really taken to heart is to try to have fun coding and your best is enough as long as you're always trying to do better.</p>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About

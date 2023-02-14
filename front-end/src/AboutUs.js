import myPic from './myPic.jpeg'
/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About Us</h1>
      <p>
        Hey my name is Joshua Forlenza, and I am a junior at NYU studying Computer Science. 
        I'm very excited for this course and to learn Agile Software Dev methods.
        I love living in the city, and I'm from New Jersey. Besides programming, my hobbies
        include music, film, and photgraphy. I mostly listen to alternative rock music, 
        but I love other genres like jazz and electronic. I also play guitar. For film, I love French cinema, 
        and I'm excited to go to Paris next year and learn more about the culture.
      </p>
      <div><img src={myPic} alt="A picture of me" /></div>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
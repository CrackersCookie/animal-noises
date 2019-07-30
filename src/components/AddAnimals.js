import React from 'react'

const AddAnimals = (props) => {
  return (
    props.animals.map(currentAnimal => {
      const { animal, sound, image } = currentAnimal
      return <article key={animal}>
        <p className="animal">{animal}</p>
        <img className="animal" onClick={() => props.handleSound(sound)} src={image} alt={animal} />
      </article>
    })
  )
}

export default AddAnimals
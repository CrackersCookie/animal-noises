import React from 'react'

const AddAnimals = (props) => {
  return (
    props.animals.map(animal => {
      return <article key={animal.animal}>
        <p>{animal.animal}</p>
        <img onClick={() => props.handleSound(animal.sound)} src={animal.image} alt={animal.animal} />
      </article>
    })
  )
}

export default AddAnimals
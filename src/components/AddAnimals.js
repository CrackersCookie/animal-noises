import React from 'react'

const AddAnimals = (props) => {
  return (
    props.animals.map(animal => {
      return <article key={animal.animal}>
        <p className="animal">{animal.animal}</p>
        <img className="animal" onClick={() => props.handleSound(animal.sound)} src={animal.image} alt={animal.animal} />
      </article>
    })
  )
}

export default AddAnimals
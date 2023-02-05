import { useEffect, useState } from 'react'
import { CharacterType, fetchCharacter } from './characters'

const CharacterCard = ({character}:{character:CharacterType}) => {
  return (
    <>
    <div>
      <h1>{character.name}</h1>
    </div>
    </>
  )
}

const Application = () => {
  const [shuffledCharacter, setShuffledCharacter] = useState<CharacterType | null>(null)

  useEffect(() => {
    fetchCharacter().then(character => {
      setShuffledCharacter(character)
    })
  
  }, []);

  return (
    <main>
      {shuffledCharacter && <CharacterCard character={shuffledCharacter}/>}
    </main>
  )
}

export default Application;

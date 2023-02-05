import {useState } from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';
import './Application.css';

type FormTypes = {
  selectedCount: number;
  setSelectedCount: Function;
  handleFetchDogFacts: Function;
}

const Form = ({selectedCount, setSelectedCount, handleFetchDogFacts}:FormTypes) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        <input type="number" value={selectedCount} min="1" max="10" id="number-of-facts" onChange={(ev) => setSelectedCount(Number(ev.target.value))}/>
      </div>
      <input type="submit" value="Fetch Dog Facts" onClick={() => handleFetchDogFacts()}/>
    </form>
  );
};

const Fact = ({ fact }: { fact:  string}) => {
  return (
    <article className="dog-fact">
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  const [selectedCount, setSelectedCount] = useState<number>(1);
  const [dogFactsData, setDogFactsData] = useState<DogFactType[]>([]);
  
  const handleFetchDogFacts = async () => {
    const data = await fetchDogFacts(selectedCount);
    setDogFactsData(data)
  }

  return (
    <main>
      <Form selectedCount={selectedCount} setSelectedCount={setSelectedCount} handleFetchDogFacts={handleFetchDogFacts}/>
      <section>
      <h3>Dog Facts</h3>
      {dogFactsData && dogFactsData.map((fact) => (
        <Fact key={fact.id} fact={fact.fact}/>
      ))}
      </section>
    </main>
  );
};

export default Application;

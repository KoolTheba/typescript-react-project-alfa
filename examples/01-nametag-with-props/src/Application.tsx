import './App.css';

type NameTagProps = {
  name: string
}

const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header className="main-header">
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name='Teba' />

export default Application;

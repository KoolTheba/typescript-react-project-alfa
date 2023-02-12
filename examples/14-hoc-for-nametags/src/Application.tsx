import React from 'react';
import './Application.css';

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

type WithUserProps = {
  user: UserModel;
}

function withNameTag<T extends WithUserProps>(Component: React.ComponentType<T>){
  return (props: Omit<T, keyof WithUserProps>) => {
    return <Component {...(props as T)} user={currentUser}/>
  }
}

const NameTag = ({user, salutation}: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const NameTagWithHOC = withNameTag(NameTag)

const Application = () => <NameTagWithHOC salutation='Howdy' />;

export default Application;

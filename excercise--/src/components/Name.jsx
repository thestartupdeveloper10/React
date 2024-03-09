const Name = ({ persons }) => {
    return (
      <>
        {persons.map((person) => {
          return (
            <ul key={person.name}>
              {person.name}, {person.number}
            </ul>
          );
        })}
      </>
    );
  };

  export default Name;
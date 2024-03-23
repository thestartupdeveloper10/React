const Name = ({ person,handleDelete }) => {
    return (
      <>
            <ul>
              {person.name}, {person.number}
              <button onClick={handleDelete}>Delete</button>
            </ul>
        
      </>
    );
  };

  export default Name;
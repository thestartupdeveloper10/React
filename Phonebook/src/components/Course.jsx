const Header = ({ title }) => {
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  };
  
  const Content = ({ contents }) => {
    return (
      <>
        <ul>
          {contents.map((content) => {
            return (
              <li key={content.id}>
                {content.name}, {content.exercises}
              </li>
            );
          })}
        </ul>
      </>
    );
  };
  
  const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((acc, part) => {
      return acc + part.exercises;
    }, 0);
  
    return (
      <>
        <div key={course.id}>
          <Header title={course.name} />
          <Content contents={course.parts} />
          <p>Total exercises: {totalExercises}</p>
        </div>
      </>
    );
  };

  export default Course
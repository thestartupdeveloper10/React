import React from 'react';

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

const Course = ({ course, totalExercises }) => {
  return (
    <>
      <Header title={course.name} />
      <Content contents={course.parts} />
      <p>Total exercises: {totalExercises}</p>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <Course course={course} totalExercises={totalExercises} />
    </>
  );
};

export default App;

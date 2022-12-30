import Course from './components/Course';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        { id: 1, name: 'Fundamentals of React', exercises: 10 },
        { id: 2, name: 'Using props to pass data', exercises: 7 },
        { id: 3, name: 'State of a component', exercises: 14 },
        { id: 4, name: 'Redux', exercises: 11 },
      ],
    },
    {
      id: 2,
      name: 'Node.js',
      parts: [
        { id: 1, name: 'Routing', exercises: 3 },
        { name: 'Middlewares', exercises: 7, id: 2 },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;

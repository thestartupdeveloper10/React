
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]


ReactDOM.createRoot(document.getElementById('root')).render(
          <App /> 
          // notes={notes} 
        )

// const refresh = () => {
//     ReactDOM.createRoot(document.getElementById('root')).render(
//       <App counter={counter} />
//     )
//   }

//   refresh()
//   counter += 1
//   refresh()
//   counter += 1
//   refresh()


//   setInterval(() => {
//     refresh()
//     counter += 1
//   }, 1000)
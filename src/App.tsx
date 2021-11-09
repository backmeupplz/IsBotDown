import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Bot from 'pages/Bot'
import Main from 'pages/Main'
import NotFound from 'pages/NotFound'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:username" element={<Bot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Root>
  )
}

export default App

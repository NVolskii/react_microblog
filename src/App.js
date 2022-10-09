import Container from 'react-bootstrap/Container';
import Header from './components/Header';

function App() {
  const posts = [
    {
      id: 1,
      text: 'Surprise, mafaka',
      timestamp: 'A long, long time ago',
      author: {
        name: 'A good black person',
      },
    },
    {
      id: 2,
      text: 'And I will strike down upon thee with great vengeance and furious anger!',
      timestamp: 'A little less long ago',
      author: {
        name: 'Not so good black person',
      },
    },
  ]

  return (
    <Container fluid className="App">
      <Header />
      <Container>
        {posts.length === 0?
          <p>No posts to show</p>
        :
          posts.map(post => {
            return (<p key = {post.id}>
              <b>{post.author.name}</b> &mdash; {post.timestamp}
              <br />
              {post.text} 
            </p>)
        })}
      </Container>
    </Container>
  );
}


export default App

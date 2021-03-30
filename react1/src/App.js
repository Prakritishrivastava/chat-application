
import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
    <ChatEngine
    height="100vh"
    projectID="b7e92b77-ea99-427b-a5f7-c72d34101eed"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={ (chatAppProps) => <ChatFeed{ ...chatAppProps}/>}
    />
  );
}

export default App;

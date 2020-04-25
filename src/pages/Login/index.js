import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Title, Paragraph } from './styles';
import * as exampleActions from '../../store/modules/example/actions';

// import axios from '../../services/axios';

export default function Login() {
  const dispatch = useDispatch();
  /*
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/students');
    }

    getData();
  }, []);
  */

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.buttonClickRequest());
  }

  return (
    <Container>
      <Title>
        Login<small>Hello</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cum
        perspiciatis illo nisi deleniti labore totam temporibus, ab eum dolores
        nulla, possimus quas inventore corporis fugiat tenetur. Quasi,
        perspiciatis sint.{' '}
      </Paragraph>
      <button type="button" onClick={handleClick}>
        Send
      </button>
    </Container>
  );
}

import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!) {
    addBook(name: $name, genre: $genre) {
      id
      name
    }
  }
`;

const AddBook = () => {
  const [addBook] = useMutation(ADD_BOOK);

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');

  const onsubmit = () => {
    addBook({ variables: { name, genre } });
  };

  return (
    <div style={{ margin: '30px' }}>
      <div>
        <input
          onChange={e => {
            return setName(e.target.value);
          }}
          type="text"
        />
        <input
          onChange={e => {
            return setGenre(e.target.value);
          }}
          type="text"
        />
        <button onClick={onsubmit} type="button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;

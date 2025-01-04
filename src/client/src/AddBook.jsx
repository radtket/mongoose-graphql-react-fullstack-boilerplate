import { gql, useMutation } from '@apollo/client';
import { Fragment, useState } from 'react';

import { GET_BOOKS } from './BookList';

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!) {
    addBook(name: $name, genre: $genre) {
      id
      name
    }
  }
`;

const initalState = {
  name: '',
  genre: '',
};

const AddBook = () => {
  const [state, setState] = useState({
    ...initalState,
  });

  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [GET_BOOKS],
    onCompleted: () => {
      setState({ ...initalState });
    },
    variables: state,
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addBook();
      }}
    >
      <fieldset>
        <legend>Add Book:</legend>
        {Object.entries(state).map(([key, value]) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1);
          return (
            <Fragment key={`${key}-input`}>
              <label htmlFor={key}>{label}</label>
              <input
                id={key}
                name={key}
                onChange={({ target }) => {
                  return setState(prev => {
                    return { ...prev, [target.name]: target.value };
                  });
                }}
                placeholder={label}
                type="text"
                value={value}
              />
            </Fragment>
          );
        })}
        <button
          disabled={Object.values(state).some(val => {
            return !val;
          })}
          type="submit"
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default AddBook;

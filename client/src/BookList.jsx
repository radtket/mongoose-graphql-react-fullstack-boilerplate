import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data, refetch } = useQuery(GET_BOOKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :</p>;
  }

  return (
    <>
      <ul>
        {data.books.map(({ id, name, genre }) => {
          return (
            <dl key={`${id}-book`}>
              <b>{name}</b> <i>{genre}</i>
            </dl>
          );
        })}
      </ul>
      <button
        disabled={loading}
        onClick={() => {
          refetch();
        }}
        type="button"
      >
        Refetch
      </button>
    </>
  );
};

export default BookList;

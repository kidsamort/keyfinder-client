import React, { useState } from 'react';
import { IKey, KeyTableComponentProps } from './KeyTable.props';
import styled from 'styled-components';
import { formattedDate } from 'pages/Key/Key';

const KeyTable = ({ objects }: KeyTableComponentProps): JSX.Element => {
  const [sortBy, setSortBy] = useState<keyof IKey>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const sortedObjects = objects
    .sort((a: any, b: any) => {
      if (sortDirection === 'asc') {
        if (typeof a[sortBy] === 'string') {
          return a[sortBy].localeCompare(b[sortBy]);
        } else if (typeof a[sortBy] === 'number') {
          return a[sortBy] - b[sortBy];
        } else if (a[sortBy] instanceof Date) {
          return a[sortBy].getTime() - b[sortBy].getTime();
        } else if (Array.isArray(a[sortBy])) {
          return a[sortBy].length - b[sortBy].length;
        }
      } else {
        if (typeof a[sortBy] === 'string') {
          return b[sortBy].localeCompare(a[sortBy]);
        } else if (typeof a[sortBy] === 'number') {
          return b[sortBy] - a[sortBy];
        } else if (a[sortBy] instanceof Date) {
          return b[sortBy].getTime() - a[sortBy].getTime();
        } else if (Array.isArray(a[sortBy])) {
          return b[sortBy].length - a[sortBy].length;
        }
      }
    })
    .filter((object: IKey) =>
      object.keysTotal.some((keyTotal) =>
        keyTotal.KeyHolder.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
    
  return (
    <>
      <SearchInput
        type="text"
        placeholder="поиск по названию ключа"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={() => setSearchTerm('')}>Сбросить</SearchButton>
      <StyledTable>
        <thead>
          <tr>
            <Th onClick={() => setSortBy('id')}>Комплект</Th>
            <Th onClick={() => setSortBy('keysTotal')}>Всего ключей</Th>
            <Th onClick={() => setSortBy('keysTotal')}>Название ключа</Th>
            <Th onClick={() => setSortBy('createdAt')}>Дата добавления</Th>
            <Th onClick={() => setSortBy('updatedAt')}>Дата обновления</Th>
          </tr>
        </thead>
        <tbody>
          {sortedObjects.map((object) => (
            <tr key={object.id}>
              <Td>{object.id}</Td>
              <Td>{object.keysTotal.length}</Td>
              <Td>{object.keysTotal[0].KeyHolder}</Td>
              <Td>{formattedDate(object.createdAt)}</Td>
              <Td>{formattedDate(object.updatedAt)}</Td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const SearchInput = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid #ddd;
`;
const SearchButton = styled.button`
  margin-left: 8px;
  padding: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const Th = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export default KeyTable;

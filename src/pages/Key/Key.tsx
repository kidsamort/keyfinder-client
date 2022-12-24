import { KeyWrapperStyled } from './Key.styled';
import { ChangeEvent, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styled from 'styled-components';
import KeyTable from 'components/KeyTable';
import { IKey } from 'components/KeyTable/KeyTable.props';

interface ICreateKey {
  keyHolder: string;
  count: number;
}

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.th`
  text-align: left;
  border: 1px solid #ddd;
  padding: 8px;
`;

const TableData = styled.td`
  text-align: left;
  border: 1px solid #ddd;
  padding: 8px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;
const SearchButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
export const formattedDate = (dateString: Date) => {
  const date = new Date(dateString);
  return (
    date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }) +
    ' ' +
    date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );
};

const Key = (): JSX.Element => {
  const [keys, setkeys] = useState<IKey[] | undefined>(undefined);
  const [createKeyName, setCreateKeyName] = useState<string>('');
  const [createKeyCount, setCreateKeyCount] = useState<number>(0);
  const [lastUpdateKeys, setLastUpdateKeys] = useState<string>();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>, action: any) => {
    action(event.target.value);
  };

  async function createKey(
    key: ICreateKey,
  ): Promise<AxiosResponse<ICreateKey>> {
    return axios.post<ICreateKey>(`${process.env.REACT_APP_API_URL}/key/create`, key);

  }

  const createKeyHandler = async () => {
    await createKey({ keyHolder: createKeyName, count: createKeyCount }).then(
      (response) => {
        console.log(response.data);
        getAllKeys();
      },
    );
  };

  const getAllKeys = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/key/all`)
      .then((response: AxiosResponse<IKey[]>) => {
        setkeys(response.data);
        setLastUpdateKeys(formattedDate(new Date))
        console.log(keys);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  useEffect(() => {
    getAllKeys();
  }, []);
  let counter = 1;
  return (
    <KeyWrapperStyled className="Key" data-testid="Key">
      <div style={{ display: 'flex', gap: '24px', margin: '20px 0' }}>
        <h2>Список всех ключей</h2>
        <button onClick={getAllKeys}>обновить</button>
        <p>
          последне обновление: <br /> {lastUpdateKeys}
        </p>
      </div>
      {keys && <KeyTable objects={keys} />}
      <h2>Добавить новый ключ</h2>
      <form
        onSubmit={submitHandler}
        style={{ display: 'flex', gap: '12px', maxWidth: '620px' }}
      >
        <SearchInput
          type="text"
          value={createKeyName}
          onChange={(e) => changeHandler(e, setCreateKeyName)}
          placeholder="Введите название ключа"
        />
        <SearchInput
          type="number"
          value={createKeyCount}
          style={{ flex: '1 0', minWidth: '6rem' }}
          onChange={(e) => changeHandler(e, setCreateKeyCount)}
          placeholder="Введите колличество ключей"
        />
        <SearchButton
          type="submit"
          onClick={createKeyHandler}
          style={{ flex: '1 0', minWidth: '12rem' }}
        >
          Добавить
        </SearchButton>
      </form>
    </KeyWrapperStyled>
  );
};

export default Key;

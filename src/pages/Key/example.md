      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHead>№</TableHead>
              <TableHead>Связка</TableHead>
              <TableHead>Все ключи</TableHead>
              <TableHead>
                Дата <br /> создания
              </TableHead>
              <TableHead>
                Дата <br /> изменения
              </TableHead>
            </tr>
            <tr>
              <TableHead>
                <input
                  type="number"
                  style={{ maxWidth: '50px', minHeight: '2rem' }}
                />
              </TableHead>
              <TableHead>поиск</TableHead>
              <TableHead>поиск</TableHead>
              <TableHead>поиск</TableHead>
              <TableHead>поиск</TableHead>
            </tr>
          </thead>
          <tbody>
            {keys &&
              keys.map((item, index) => (
                <>
                  {item.keysTotal.map((key) => {
                    return (
                      <tr key={key.id}>
                        <TableData>{counter++}</TableData>
                        <TableData>{item.id}</TableData>
                        <TableData>
                          <Table>
                            <tr>
                            <TableData>№</TableData>
                            <TableData>{key.id}</TableData>
                            </tr>
                            <tr>
                            <TableData>Бирка</TableData>
                            <TableData>{key.KeyHolder.split(',')[0]}</TableData>
                            </tr>
                            <tr>
                            <TableData>Помещение</TableData>
                            <TableData>{key.KeyHolder.split(',')[1]}</TableData>
                            </tr>
                          </Table>
                        </TableData>
                        <TableData>{formattedDate(item.createdAt)}</TableData>
                        <TableData>{formattedDate(item.updatedAt)}</TableData>
                      </tr>
                    );
                  })}
                </>
              ))}
          </tbody>
        </Table>
      </TableContainer>
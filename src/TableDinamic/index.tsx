import { useCallback, useEffect, useState, useRef } from 'react';

import './styles.css';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Badge, Button, Col, Container, Row, Table } from 'reactstrap';

import imgMenu from '../assets/img/menu.png';
import { api } from '../services/Api';

function TableDinamic(): JSX.Element {
  const drowpdownRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [defaultCheck, setDefaultCheck] = useState<boolean>(true);
  const [fiftyCheck, setFiftyCheck] = useState<boolean>(true);
  const [userCheck, setUserCheck] = useState<boolean>(true);
  const [emailCheck, setEmailCheck] = useState<boolean>(true);
  const [clientCheck, setClientCheck] = useState<boolean>(true);
  const [acessCheck, setAcessCheck] = useState<boolean>(true);

  const getStory = useCallback(async () => {
    try {
      const { data } = await api.get('/users/');
      setData(data);
    } catch (error: any) {
      const logError = { ...error };
      console.log(logError);
    }
  }, []);

  useEffect(() => {
    getStory();
  }, [getStory]);

  const onCLick = (): void => setIsActive(!isActive);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDefaultCheck(event.target.checked);
    setFiftyCheck(false);
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFiftyCheck(event.target.checked);
    setDefaultCheck(false);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUserCheck(event.target.checked);
  };
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailCheck(event.target.checked);
  };
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setClientCheck(event.target.checked);
  };
  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAcessCheck(event.target.checked);
  };
  const row = defaultCheck ? data.slice(0, 5) : data;

  return (
    <>
      <Helmet>
        <title>Tabela</title>
      </Helmet>
      <Container>
        <Row>
          <Col md={8}>
            <Table hover size="sm" bordered className="table">
              <thead>
                <tr>
                  {userCheck && <td className="color-font">USUÁRIOS</td>}
                  {emailCheck && <td className="color-font">EMAIL</td>}
                  {clientCheck && <td className="color-font">CLIENTE</td>}
                  {acessCheck && (
                    <td className="color-font" align="center">
                      PERFIL DE ACESSO
                    </td>
                  )}
                </tr>
              </thead>
              <tbody>
                {row.map(user => (
                  <tr key={user}>
                    {userCheck && <td className="color-font">{user.name} </td>}
                    {emailCheck && (
                      <td className="color-font">{user.email} </td>
                    )}
                    {clientCheck && (
                      <td className="color-font">{user.company.name} </td>
                    )}
                    {acessCheck && (
                      <td align="center">
                        <Badge color="info" pill>
                          {user.username}
                        </Badge>
                      </td>
                    )}

                    <td>
                      <Button className="btn-icon" outline>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-pencil"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                      </Button>
                      <Button className="btn-icon2" outline>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={4}>
            <div className="menu-container">
              <Button className="btn-menu" onClick={onCLick}>
                <img
                  src={imgMenu}
                  alt="menu"
                  style={{ width: ' 20px', background: 'none' }}
                />
              </Button>

              <nav
                className={`menu ${isActive ? 'active' : 'inactive'} `}
                ref={drowpdownRef}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    ml: 3,
                    width: 210,
                    height: 400,
                    padding: '10px',
                    boxShadow: '3px 3px 3px #ccc',
                  }}
                >
                  <span className="title">Linhas por pagína</span>
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={defaultCheck}
                        checked={defaultCheck}
                        onChange={handleChange}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="Padrão"
                  />
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={fiftyCheck}
                        checked={fiftyCheck}
                        onChange={handleChange1}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="10 linhas"
                  />
                  <hr />
                  <span className="title">Colunas</span>
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={userCheck}
                        checked={userCheck}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="Usuário"
                  />
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={emailCheck}
                        checked={emailCheck}
                        onChange={handleChange3}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="E-mail"
                  />
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={clientCheck}
                        checked={clientCheck}
                        onChange={handleChange4}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="Cliente"
                  />
                  <FormControlLabel
                    className="color-font"
                    control={
                      <Checkbox
                        value={acessCheck}
                        checked={acessCheck}
                        onChange={handleChange5}
                        inputProps={{ 'aria-label': 'controlled' }}
                        sx={{
                          color: '#0DCAF0',
                          '&.Mui-checked': {
                            color: '#0DCAF0',
                          },
                        }}
                      />
                    }
                    label="Perfil de acesso"
                  />
                </Box>
              </nav>
            </div>{' '}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TableDinamic;

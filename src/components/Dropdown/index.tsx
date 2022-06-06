import { useRef, useState } from 'react';

import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { Button } from 'reactstrap';

import imgMenu from '../../assets/img/menu.png';
import './styles.css';

function Dropdown(): JSX.Element {
  const drowpdownRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [defaultCheck, setDefaultCheck] = useState<boolean>(true);
  const [fiftyCheck, setFiftyCheck] = useState<boolean>(true);
  const [userCheck, setUserCheck] = useState<boolean>(true);
  const [emailCheck, setEmailCheck] = useState<boolean>(true);
  const [clientCheck, setClientCheck] = useState<boolean>(true);
  const [acessCheck, setAcessCheck] = useState<boolean>(true);

  const onCLick = (): void => setIsActive(!isActive);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDefaultCheck(event.target.checked);
  };
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFiftyCheck(event.target.checked);
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

  return (
    <>
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
                  inputProps={{ 'aria-label': 'controlled' }}
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
              label="50 linhas"
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
    </>
  );
}
export default Dropdown;

import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import styles from './MoveUp.module.css';
import { Link } from 'react-scroll';

export const MoveUp: FC = () => (
  <div className={styles.container}>
    <Link to="header" spy smooth offset={-30} duration={1500}>
      <Button variant="contained">
        На верх страницы <Home style={{ color: 'white', paddingLeft: '10px' }} />
      </Button>
    </Link>
  </div>
);

import React, { Component, MouseEvent } from 'react';
const { ipcRenderer } = window.require('electron');

type ClickEvent = React.MouseEvent<HTMLElement>;

type HistoryProps = {
  queries: {
    queryString: string;
    queryData: object[];
    queryStatistics: object[];
    querySchema: string;
  }[];
  currentSchema: string;
};

export const History = (props: HistoryProps) => {
  return (
    <div>
      <h3 style={{ border: '1px solid blue' }}>History Panel</h3>
      <h4>{props.currentSchema}</h4>
      <h2>{props.queries[0].queryString}</h2>
    </div>
  );
};

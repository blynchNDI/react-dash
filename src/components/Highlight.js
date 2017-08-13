import React, { Component } from 'react';
import Registry from '../utils/Registry';
import BaseComponent from './BaseComponent';
import Card from './Card';

export default class Highlight extends BaseComponent {
  render() {
    let cols = this.props.data[0].cols || [];

    return (
      <Card {...this.state.cardVariables}>
        <div className="highlight">
          { cols.map( (col, i) => {
              return <div className={"highlight-col highlight-cols-" + cols.length} key={i}>
                { col.rows.map( (row, j) => {
                  let output = [];
                  if (row.isLink) {
                    output.push(<span className="highlight-val">
                               <a href={row.val}>{ row.label ? row.label : row.val}</a>
                             </span>)
                  } else {
                    output.push(<span className="highlight-label">{ row.label }</span>)
                    output.push(<span className="highlight-val">{ row.val }</span>)
                  }
                  return (
                    <div className="highlight-row" key={j}>
                      {output}
                    </div>
                 )
                }) }
            </div>
          }) }
        </div>
      </Card>
     )
  }
}

Registry.set('Highlight', Highlight);

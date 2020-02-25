import React from 'react';

export function PageWrapper(props) {
  return <div className="page-wrapper">{props.children}</div>;
}

export function PageHeader(props) {
  return <div className="page-header">{props.children}</div>;
}

export function PageFooter(props) {
  return <div className="page-footer">{props.children}</div>;
}

export function PageMain(props) {
  return <div className="page-main">{props.children}</div>;
}

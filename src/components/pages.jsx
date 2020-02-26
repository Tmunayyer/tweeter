import React from 'react';

export function PageWrapper({ children }) {
  return <div className="page-wrapper">{children}</div>;
}

export function PageHeader({ children }) {
  return <div className="page-header">{children}</div>;
}

export function PageFooter({ children }) {
  return <div className="page-footer">{children}</div>;
}

export function PageMain({ children }) {
  return <div className="page-main">{children}</div>;
}

import React from 'react';

const Page = ({ params }: any) => {
  const workspaceId = params.workspaceId;
  return <div>Page {workspaceId}</div>;
};
export default Page;

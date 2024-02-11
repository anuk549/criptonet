import React from 'react';

function AnalyticsScript() {
  const script = `
    <script data-host="https://analytics.h-supertools.com" data-dnt="false" src="http://analytics.h-supertools.com/js/script.js" id="ZwSg9rf6GA" async defer></script>
  `;
  
  return <div dangerouslySetInnerHTML={{ __html: script }} />;
}

export default AnalyticsScript;

import React from 'react';

interface GmailProps { onClose: () => void; }

const Gmail: React.FC<GmailProps> = ({ onClose }) => (
  <div className="h-full w-full bg-white">
    <iframe src="https://mail.google.com/" className="w-full h-full border-0" allow="clipboard-read; clipboard-write" title="Gmail" />
  </div>
);

export default Gmail;

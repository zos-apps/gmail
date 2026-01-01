

interface GmailProps { onClose: () => void; }

const Gmail: React.FC<GmailProps> = ({ onClose: _onClose }) => (
  <div className="h-full flex flex-col bg-white text-gray-900">
    <iframe src="https://mail.google.com/" className="w-full h-full border-0" allow="clipboard-read; clipboard-write" title="Gmail" />
  </div>
);

export default Gmail;

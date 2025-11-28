import ReplayIcon from '@mui/icons-material/Replay';

export const ReloadButton = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return <button className="cursor-pointer hover:caret-pink-800" onClick={handleReload}><ReplayIcon /></button>;
};

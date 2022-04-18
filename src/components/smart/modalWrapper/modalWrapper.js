const ModalWrapper = ({ children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return (
    isBrowser &&
    ReactDOM.createPortal(
      <>{children}</>,
      document.getElementById('modal-root')
    )
  );
};

export const LoadingMessage = ({ isLoading }: { isLoading: boolean }) => {
  return <>{isLoading && <h2>Cargando...</h2>}</>;
};

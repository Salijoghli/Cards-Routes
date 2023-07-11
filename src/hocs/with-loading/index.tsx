type WrapperProps<T> = {
  isLoading: boolean;
  list: T;
  isError?: boolean;
};

export const WithLoading =
  <T,>(Component: (...args: any) => JSX.Element) =>
  ({ isLoading, isError, list, ...props }: WrapperProps<T>) => {
    if (isLoading) return <p>Hold on, fetching data might take some time.</p>;
    if (isError) return <p>Error fetching data</p>;
    return <Component {...props} />;
  };

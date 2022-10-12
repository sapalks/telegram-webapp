import React, { ComponentType, ErrorInfo } from 'react';

export default function Catch(Component: ComponentType) {
  return class CatchError extends React.PureComponent<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    {
      hasError: boolean;
      error: Error | null;
      info: ErrorInfo | null;
      message: string;
    }
  > {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(props: any) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        info: null,
        message: '',
      };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
      this.setState({
        hasError: true,
        error,
        info,
        message: error.message,
      });
    }

    render() {
      const {
        hasError, message, error, info,
      } = this.state;
      if (hasError) {
        return (
          <div>
            <h1>Error</h1>
            <p>{message}</p>
            <p>{JSON.stringify(error)}</p>
            <p>{JSON.stringify(info)}</p>
          </div>
        );
      }
      return <Component {...this.props} />;
    }
  };
}

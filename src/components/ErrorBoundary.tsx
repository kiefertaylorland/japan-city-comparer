import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;
      
      if (FallbackComponent && this.state.error) {
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <AlertTriangle size={48} className="text-red-500 mx-auto" />
            <h2 className="text-2xl font-bold text-charcoal-gray">
              Something went wrong
            </h2>
            <p className="text-gray-600 max-w-md">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={this.resetError}
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <RefreshCw size={18} />
              <span>Try again</span>
            </button>
            {this.state.error && (
              <details className="mt-4 text-left bg-red-50 p-4 rounded-lg">
                <summary className="cursor-pointer text-red-800 font-medium">
                  Error details (development only)
                </summary>
                <pre className="mt-2 text-xs text-red-700 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
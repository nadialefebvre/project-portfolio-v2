import React from "react"

import { Error } from "components"

class ErrorBoundary extends React.Component<any, any> {
  state: any = {
    error: null,
  }

  componentDidCatch(error: any) {
    this.setState({
      error: error.message,
    })
  }

  render() {
    if (this.state.error) {
      return (
        <Error
          title={this.props.title}
          extraTitle={this.props.extraTitle}
          text="There's an issue with this component."
          error={this.state.error}
        />
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

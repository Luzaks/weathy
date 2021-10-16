import React, { Component, ErrorInfo } from "react";

import { PrimaryText, PrimaryCardContent } from "../../atoms";
import {
  errorBoundaryTitle,
  textColor,
  textVariantHeader,
} from "../../../models";

export class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    // @ts-ignore
    if (this.state.errorInfo) {
      return (
        <PrimaryCardContent
          content={
            <PrimaryText
              color={textColor}
              variant={textVariantHeader}
              content={errorBoundaryTitle}
            />
          }
        />
      );
    } else {
      return this.props.children;
    }
  }
}

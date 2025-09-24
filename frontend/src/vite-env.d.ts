/// <reference types="vite/client" />

// ✅ SVG imports ko React component ke tarah declare karna
declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >;
    export default ReactComponent;
  }
  
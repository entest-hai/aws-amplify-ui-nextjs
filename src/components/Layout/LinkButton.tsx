import * as React from "react";

const LinkButton = (
  {
    href,
    classNames,
    children,
  }: {
    href: string;
    classNames?: string;
    children?: React.ReactElement;
  },
  ref
) => (
  <a className={classNames} href={href} ref={ref}>
    {children}
  </a>
);

export default React.forwardRef(LinkButton);

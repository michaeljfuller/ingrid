import React, {ReactElement} from 'react';
import Link, {LinkProps} from 'next/link'

export type OptionalLinkProps = Omit<LinkProps, 'href'> & {
    href?: LinkProps['href'];
    children: ReactElement;
};
export function OptionalLink(props: OptionalLinkProps) {
    const {href, ...linkProps} = props;
    return href ? <Link href={href} {...linkProps} /> : props.children;
}
export default OptionalLink;

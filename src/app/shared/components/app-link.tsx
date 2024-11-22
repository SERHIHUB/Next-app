import Link from 'next/link';
import { ReactNode } from 'react';
import { UrlObject } from 'url';
import styles from './app-link.module.css';

export default function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}

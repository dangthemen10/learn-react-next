import localFont from 'next/font/local';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <Link href="/react/jsx">JSX Example</Link>
          <Link href="/react/component">Component Example</Link>
          <Link href="/react/hooks/use-state">useState Hook Example</Link>
          <Link href="/react/hooks/side-effect">useEffect Hook Example</Link>
          <Link href="/react/hooks/use-ref">useRef Hook Example</Link>
          <Link href="/react/hooks/use-memo">useMemo Hook Example</Link>
          <Link href="/react/hooks/use-context">useContext Hook Example</Link>
          <Link href="/react/hooks/use-reducer">useReducer Hook Example</Link>
          <Link href="/react/hooks/use-callback">useCallback Hook Example</Link>
          <Link href="/react/hooks/custom-hook">customHook Hook Example</Link>
        </main>
      </div>
    </>
  );
}

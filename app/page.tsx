import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '../lp-system/config/lp-config';

export default function RootPage() {
  redirect(`/${DEFAULT_LOCALE}`);
}
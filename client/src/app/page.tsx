import Image from 'next/image'
import { add } from '@parkly/origin-lib'
export default function Home() {
  return <main>hello {add(1, 2)}</main>
}

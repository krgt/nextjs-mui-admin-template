import Head from 'next/head'
import Menu from '../components/Menu/Menu'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>NextJS Mui Admin Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />
    </div>
  )
}

export default Home

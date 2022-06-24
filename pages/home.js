import Head from 'next/head'
import Sidebar from '../components/sidebar'

const home = () => {
  return (
    <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="flex min-h-screen max-w-7xl mx-auto">
        <Sidebar />
    </main>
  </div>
  )
}

export default home
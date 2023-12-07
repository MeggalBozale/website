import Image from 'next/image'

export default function Home() {

  async function create(formData: FormData) {
      'use server'
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hi</p>
      <form action={create}>
        <input type="url"></input>
      </form>
    </main>
  )
}

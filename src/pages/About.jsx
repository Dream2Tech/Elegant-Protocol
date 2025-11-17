import React from 'react'
import TeamImage from '../assets/Team.jpg'

const About = () => {
  return (
    <main className="min-h-screen text-gray-700">
      {/* Hero */}
      <section className="bg-rose-50/40 border-b border-rose-100">
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="font-serif text-6xl md:text-7xl text-gray-900 leading-tight">About Elegant Protocol Services</h1>
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">A wedding protocol and hospitality company dedicated to bringing beauty, order and elegance to every ceremony</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <img
              src={TeamImage}
              alt="protocol-team"
              className="rounded-lg shadow-lg w-full object-cover h-72 md:h-96"
            />
          </div>

          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl text-gray-900">Our Story</h2>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">We believe a beautiful wedding needs more than decorations — it requires choreography, precise timing and impeccable guest handling. Elegant Protocol was founded to bring professional ceremony management and warm hospitality together so every event flows with dignity and style.</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-rose-50/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center bg-amber-50 rounded-full w-28 h-28">
            <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" strokeWidth="1.5"/><path strokeWidth="1.5" d="M12 5v1M12 18v1M5 12h1M18 12h1"/></svg>
          </div>
          <h3 className="mt-6 font-serif text-3xl text-gray-900">Our Mission</h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-lg">To bring professional coordination, respect, and elegant guest handling to every wedding event.</p>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h3 className="font-serif text-4xl text-gray-900">Our Values</h3>
          <p className="mt-4 text-gray-500">The principles that guide everything we do</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="bg-white rounded-lg shadow-sm p-10 text-center border">
            <div className="mx-auto w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M12 2l2 5 5 .5-4 3 1.2 5L12 14l-4.2 2.5L9 11 5 8.5 10 8 12 2z"/></svg>
            </div>
            <h4 className="font-serif text-2xl text-gray-900">Elegance</h4>
            <p className="mt-4 text-gray-500">Every movement in the event must feel premium</p>
          </article>

          <article className="bg-white rounded-lg shadow-sm p-10 text-center border">
            <div className="mx-auto w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" strokeWidth="1.5"/><path strokeWidth="1.5" d="M12 5v1M12 18v1M5 12h1M18 12h1"/></svg>
            </div>
            <h4 className="font-serif text-2xl text-gray-900">Discipline</h4>
            <p className="mt-4 text-gray-500">Timing and organization are everything</p>
          </article>

          <article className="bg-white rounded-lg shadow-sm p-10 text-center border">
            <div className="mx-auto w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="1.5" d="M12 21s-6-4.35-9-7.5C-1 7 6 3 12 8c6-5 13 1.5 9 5.5C18 16.65 12 21 12 21z"/></svg>
            </div>
            <h4 className="font-serif text-2xl text-gray-900">Hospitality</h4>
            <p className="mt-4 text-gray-500">Every guest must feel respected and important</p>
          </article>
        </div>
      </section>

      {/* Team */}
      <section className="bg-amber-50/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-serif text-4xl text-gray-900">Our Team</h3>
          <p className="mt-6 text-gray-500 max-w-3xl mx-auto">Our team consists of trained protocol officers, ushers, coordination leaders and VIP reception specialists who work together to create a smooth and luxurious experience.</p>
        </div>
      </section>
    </main>
  )
}

export default About
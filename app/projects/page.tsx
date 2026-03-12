import React from 'react'
import Footer from '../components/Footer'
import ProjectsPage from '../components/ProjectLanding'

const page = () => {
    return (
        <main className="w-full min-h-screen bg-zinc-50 dark:bg-black font-sans pt-20">
            <ProjectsPage/>
            <Footer/>
        </main>
    )
}

export default page
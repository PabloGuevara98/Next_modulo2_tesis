import { fetchLatestInvoices, fetchRevenue } from "../lib/data"
import LatestInvoices from "../ui/dashboard/latest-invoices"
import RevenueChart from "../ui/dashboard/revenue-chart"
import { lusitana } from "../ui/fonts"

export default async function Page(){

    // para API esto funciona solo en los REACT SERVER COMPONENTS
    const res = await fetch('https://api-seguim-ocular.vercel.app/api/data')
    const json = await res.json()
    console.log(json)


    // const revenue = await fetchRevenue()
    // const latestInvoices = await fetchLatestInvoices()


    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg: grid-cols-4">


            </div>
            <div className="mt-6  grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-4">
                
            </div>
        </main>
    )
}
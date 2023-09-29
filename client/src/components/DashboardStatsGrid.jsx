import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'
import './dashboard.css'
import  { Link} from 'react-router-dom'


export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light"> <b>No. of Customers: 00 </b></span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold"></strong>
						{/* <span className="text-md text-green-600 pl-2">Customers List</span> */}
						<Link className="text-xl text-green-600 pl-2" to='Viewcustomers'>Customers List</Link>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light"> <b>No. of Products: 00 </b></span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold"></strong>
						{/* <span className="text-md text-green-500 pl-2">Products List</span> */}
						<Link className="text-xl text-green-600 pl-2" to='ViewProducts'>Products List</Link>

					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoBagHandle className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light"> <b>No. of Orders: 00</b> </span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold"></strong>
						{/* <span className="text-md text-green-500 pl-2">Orders List</span> */}
						<Link className="text-xl text-green-600 pl-2" to='ViewOrders'>Orders List</Link>

					</div>
				</div>
			</BoxWrapper>
			{/* <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper> */}
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

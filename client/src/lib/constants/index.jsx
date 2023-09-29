import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'customers',
		label: 'Add Customers ',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'viewcustomers',
		label: 'ViewCustomers',
		path: '/viewcustomers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'products',
		label: 'Add Products ',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'viewproducts',
		label: 'View Products',
		path: '/viewproducts',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Create Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	
	
	{
		key: 'vieworders',
		label: 'View Orders',
		path: '/vieworders',
		icon: <HiOutlineShoppingCart />
	},


	// {
	// 	key: 'transactions',
	// 	label: 'Transactions',
	// 	path: '/transactions',
	// 	icon: <HiOutlineDocumentText />
	// },
	// {
	// 	key: 'messages',
	// 	label: 'Messages',
	// 	path: '/messages',
	// 	icon: <HiOutlineAnnotation />
	// }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

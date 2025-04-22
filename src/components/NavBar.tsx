import { Link } from 'react-router';
import { FaBook } from 'react-icons/fa';
import { GiBookPile } from 'react-icons/gi';
import { IoMdHome } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa6';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

export default function NavBar() {
    return (
        <nav className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full bg-white rounded-tr-4xl rounded-tl-4xl max-w-xl shadow-lg'>
            <ul className='flex items-center justify-around'>
                <li className='p-3'>
                    <Link
                        to='/loans'
                        className='flex flex-col items-center text-indigo-900'
                    >
                        <FaExchangeAlt className='w-8 h-8' />
                        <span>Loans</span>
                    </Link>
                </li>
                <li className='p-3'>
                    <Link
                        to='/books'
                        className='flex flex-col items-center text-indigo-900'
                    >
                        <FaBook className='w-8 h-8' />
                        <span>Books</span>
                    </Link>
                </li>
                <li className='p-3'>
                    <Link
                        to='/'
                        className='flex flex-col items-center text-indigo-900'
                    >
                        <IoMdHome className='w-8 h-8' />
                        <span>Home</span>
                    </Link>
                </li>
                <li className='p-3'>
                    <Link
                        to='/users'
                        className='flex flex-col items-center text-indigo-900'
                    >
                        <FaUsers className='w-8 h-8' />
                        <span>Users</span>
                    </Link>
                </li>
                <li className='p-3'>
                    <Link
                        to='/profile'
                        className='flex flex-col items-center text-indigo-900'
                    >
                        <IoPersonSharp className='w-8 h-8' />
                        <span>Profile</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

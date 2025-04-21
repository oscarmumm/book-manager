import {GiWhiteBook} from 'react-icons/gi'

export default function Header() {
    return (
        <div className="flex items-center justify-center p-5">
            <GiWhiteBook className="w-8 h-8 text-gray-50" />
            <h1 className="text-4xl text-gray-50 font-bold ml-3">
                Book Manager
            </h1>
        </div>
    )
}

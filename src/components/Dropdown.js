import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import apiService from "../service/api.service";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown({id}) {
    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button
                    className="inline-flex justify-center">
                    <MoreVertIcon className="text-indigo-400 hover:text-indigo-600"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100 "
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 z-10 mt-0 w-56 origin-top-right rounded-md 
                    bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-2">
                    <Menu.Item>
                        {({active}) => (
                            <a
                                href={'/event/modify/' + id}
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block py-2 w-full text-left px-5'
                                )}
                            >
                                Modifier
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({active}) => (
                            <button
                                onClick={() => apiService.cancelEvent(id)}
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block py-2 w-full text-left px-5'
                                )}
                            >
                                Annuler
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

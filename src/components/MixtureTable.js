import React from 'react'

const MixtureTable = () => {
  return (
    <div className='xl:mx-32 lg:mx-32 mx-12'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                        </th>
                        <th scope="col" className="px-6 py-3">
                        100% coco peat
                        </th>
                        <th scope="col" className="px-6 py-3">
                        80% peat 20% chips [10-12 mm]
                        </th>
                        <th scope="col" className="px-6 py-3">
                        50% peat 50% chips [10-12 mm]
                        </th>
                        <th scope="col" className="px-6 py-3">
                        100% chips [10-12mm]
                        </th>
                        <th scope="col" className="px-6 py-3">
                        80% peat 20% chips [7-8mm]
                        </th>
                        <th scope="col" className="px-6 py-3">
                        50% peat 50% chips [7-8mm]
                        </th>
                        <th scope="col" className="px-6 py-3">
                        100% chips [7-8mm ]
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Water holding capacity [l/kg]
                        </th>
                        <td className="px-6 py-4">
                        7.3
                        </td>
                        <td className="px-6 py-4">
                        6.9
                        </td>
                        <td className="px-6 py-4">
                        5.8
                        </td>
                        <td className="px-6 py-4">
                        4.9
                        </td>
                        <td className="px-6 py-4">
                        6.7
                        </td>
                        <td className="px-6 py-4">
                        5.7
                        </td>
                        <td className="px-6 py-4">
                        5.2
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Air-filled porosity [%]
                        </th>
                        <td className="px-6 py-4">
                        5.2
                        </td>
                        <td className="px-6 py-4">
                        10.7
                        </td>
                        <td className="px-6 py-4">
                        22.6
                        </td>
                        <td className="px-6 py-4">
                        33.5
                        </td>
                        <td className="px-6 py-4">
                        10.0
                        </td>
                        <td className="px-6 py-4">
                        21.0
                        </td>
                        <td className="px-6 py-4">
                        30.0
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MixtureTable
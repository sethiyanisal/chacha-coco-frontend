import React from 'react'

const ProductTable = () => {
  return (
    <div className='xl:mx-32 lg:mx-32 mx-12'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mixture Content
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 10
                        </th>
                        <td className="px-6 py-4">
                        100% coco peat
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 8
                        </th>
                        <td className="px-6 py-4">
                        80% coco peat +20% crushed husk chips [10-12mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 8a
                        </th>
                        <td className="px-6 py-4">
                        80% coco peat +20% crushed husk chips [7-8mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 7
                        </th>
                        <td className="px-6 py-4">
                        70% coco peat +30% crushed husk chips [10-12mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 7a
                        </th>
                        <td className="px-6 py-4">
                        70% coco peat +30% crushed husk chips [7-8mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 6
                        </th>
                        <td className="px-6 py-4">
                        60% coco peat +40% crushed husk chips [10-12mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 6a
                        </th>
                        <td className="px-6 py-4">
                        60% coco peat +40% crushed husk chips [7-8mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 5
                        </th>
                        <td className="px-6 py-4">
                        50% coco peat +50% crushed husk chips [10-12mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 5a
                        </th>
                        <td className="px-6 py-4">
                        50% coco peat +50% crushed husk chips [7-8mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 1
                        </th>
                        <td className="px-6 py-4">
                        100% crushed husk chips [10-12mm]
                        </td>
                    </tr>
                    <tr className="bg-white border-b text-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ChaChå 2
                        </th>
                        <td className="px-6 py-4">
                        100% crushed husk chips [7-8mm]
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ProductTable
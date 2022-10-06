import React from 'react'

export default function Table({ childData }) {
    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full border-separate border-spacing-y-3">
                            <thead class="bg-white border-b ">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Dormitorios
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Baños
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Superficie
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Precio
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vivienda tipo A</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        2
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        142
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        142
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button className='underline decoration-1 text-blue-400' onClick={() => childData(true)}>Mas informacion</button>
                                    </td>
                                </tr>
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vivienda tipo B</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        2
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        134
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        142
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button className='underline decoration-1 text-blue-400' onClick={() => childData(true)}>Mas informacion</button>
                                    </td>
                                </tr>
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Vivienda tipo C</td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        2
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        140
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        142
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button className='underline decoration-1 text-blue-400' onClick={() => childData(true)}>Mas informacion</button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

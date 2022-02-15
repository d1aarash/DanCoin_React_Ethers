import React from 'react'

export default function Readform({handleSubmit, contractInfo, setContractInfo}) {
  return (
    <div>
        <div>
            <div class=" w-full rounded-xl sm:w-auto shadow-lg mx-auto p-4 border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700">
                <form class="space-y-6" onSubmit={handleSubmit}>
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Read from smart contract</h3>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contract Address (ERC20) </label>
                        <input type="text" name="addr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ERC20 contract address"/>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get token info</button>
                    <div class="flex flex-col">
                        <div class="overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="inline-block min-w-full align-middle">
                                <div class="overflow-hidden rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700 rounded-lg">
                                        <thead class="bg-gray-100 dark:bg-gray-700">
                                        <tr>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Name
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Symbol
                                        </th>
                                        <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Total Supply
                                        </th>
                                        </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            <tr class="hover:bg-gray-100 hover:bg-gray-700 hover:rounded-lg rounded-lg">
                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{contractInfo.tokenName}</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{contractInfo.tokenSymbol}</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{String(contractInfo.totalSupply)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

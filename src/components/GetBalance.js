import React from 'react'

export default function GetBalance({getMyBalance, balanceInfo, setBalanceInfo}) {
  return (
    <div>
        <div className="m-4 pt-2 px-6 pb-6 w-full mx-auto rounded-xl bg-gray-800">
            <div class="p-4 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700">
            <div class="flex flex-col pt-4">
                <div class="overflow-x-auto shadow-md sm:rounded-lg pb-4">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">Address</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{balanceInfo.address}</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="py-4 px-6 text-md font-medium text-gray-900 whitespace-nowrap dark:text-white">Balance</td>
                            <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{balanceInfo.balance}</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>
                <button type="submit" onClick={getMyBalance} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get my balance</button>
            </div>
            </div>
        </div>
    </div>
  )
}

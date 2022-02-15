export default function TxList({ txs, setTxs }) {
  return (
    
      <div className="m-4 pt-2 px-6 pb-6 w-full mx-auto rounded-xl bg-gray-800">
        <div class="p-4 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700">
          <div className="p-4">
              <h1 className="text-xl pb-5 font-semibold text-white text-center">
                Recent transactions
              </h1>
              <hr className="pb-5"/>
              {txs.map((item) => (
                <div id="alert-additional-content-4" class="p-4 pt-5 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
                <div class="flex items-center">
                    <svg class="mr-2 w-5 h-5 text-yellow-700 dark:text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <h3 class="text-lg font-medium text-yellow-700 dark:text-yellow-800">Transfer Success</h3>
                </div>
                <div class="mt-2 mb-4 text-sm text-yellow-700 dark:text-yellow-800">
                    <p>From: {item.from}</p>
                    <p>To: {item.to}</p>
                    <p>Amount: {item.amount}</p>
                </div>
                <div class="flex">
                    <a type="button" target="_blank" href={`https://rinkeby.etherscan.io/tx/${item.txHash}`} class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-yellow-800 dark:hover:bg-yellow-900">
                    <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                    View On Ether-scan
                    </a>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    
  );
}



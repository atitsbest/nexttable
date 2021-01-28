import React from "react"

function GotoPayment({ enabled, loading }) {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <button
        type="submit"
        className={`text-xl uppercase border-2 border-black p-2 pl-8 pr-8 
         flex items-center ${
           enabled
             ? "cursor-pointer hover:text-white hover:bg-black"
             : "cursor-not-allowed"
         }
        ${loading ? "bg-black text-gray-200" : ""}
         `}
        style={{ fontFamily: "Benton Sans Medium", opacity: enabled ? 1 : 0.5 }}
        disabled={!enabled}
      >
        {loading && <Spinner />}&nbsp;
        <span className={`${loading ? "text-gray-400" : ""}`}>
          Zur Zahlung...
        </span>
      </button>
    </div>
  )
}

function Spinner() {
  return (
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default GotoPayment

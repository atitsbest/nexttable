import React from "react"

function CustomerAddress() {
  const inputClasses =
    "mt-1 block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
  const labelClasses = "block w-full mt-2"
  return (
    <div className="container mx-auto">
      <h2
        className="text-3xl uppercase text-center mt-6 font-normal flex justify-center items-baseline"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        <small className="mr-2 font-mono text-gray-500">3.</small>
        Lieferadresse
      </h2>
      <div className="flex flex-col items-center my-8 mx-2">
        <label className={labelClasses}>
          <span className="text-gray-700">E-Mail-Adresse</span>
          <input
            type="email"
            class={inputClasses}
            placeholder="otto@beispiel.me"
          />
        </label>
        <label className={labelClasses}>
          <span className="text-gray-700">Straße</span>
          <input type="text" class={inputClasses} placeholder="" />
        </label>
        <label className={labelClasses}>
          <span className="text-gray-700">PLZ</span>
          <input type="text" class={inputClasses} placeholder="" />
        </label>
        <label className={labelClasses}>
          <span className="text-gray-700">Stadt</span>
          <input type="text" class={inputClasses} placeholder="" />
        </label>
        <label className={labelClasses}>
          <span className="text-gray-700">Land</span>
          <select class={inputClasses}>
            <option>Österreich</option>
            <option>Deutschland</option>
            <option>Schweiz</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default CustomerAddress

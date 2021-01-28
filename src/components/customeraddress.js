import React from "react"

function CustomerAddress(props) {
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
      <div className="flex flex-col items-center my-8 mx-4">
        <Input
          label="E-Mail-Adresse"
          name="email"
          type="email"
          placeholder="jo@nexttable.at"
          {...props}
        />
        <Input label="Straße" name="street" {...props} />
        <Input label="PLZ" name="zip" {...props} />
        <Input label="Stadt" name="city" {...props} />
        <label className={labelClasses}>
          <span className="text-gray-700">Land</span>
          <select
            name="country"
            class={inputClasses}
            value={props.values.country}
            onChange={props.handleChange}
          >
            <option>Österreich</option>
            <option>Deutschland</option>
            <option>Schweiz</option>
          </select>
        </label>
      </div>
    </div>
  )
}

function Input({
  label,
  name,
  type,
  placeholder,
  errors,
  handleChange,
  values,
}) {
  const inputClasses =
    "mt-1 block w-full bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
  const labelClasses = "block w-full mt-2"
  return (
    <label className={`${labelClasses} ${errors[name] ? "text-red-500" : ""}`}>
      <span className="text-gray-700">{label}</span>
      <input
        name={name}
        type={type || "text"}
        class={`${inputClasses} ${errors[name] ? "bg-red-200" : ""}`}
        placeholder={placeholder}
        value={values[name]}
        onChange={handleChange}
      />
      {errors[name] && (
        <span className="text-sm text-red-500">{errors[name]}</span>
      )}
    </label>
  )
}

export default CustomerAddress

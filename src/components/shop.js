import React from "react"
import ChooseSize from "./choosesize"
import ChooseWood from "./choosewood"
import GotoPayment from "./gotopayment"

const sizes = [
  { length: 180, width: 120, price: 13900 },
  { length: 220, width: 120, price: 14900 },
  { length: 250, width: 120, price: 16900 },
]

const woods = [
  { name: "Apfelbaum", image: "apple" },
  { name: "Nussbaum", image: "nut" },
  { name: "Ahorn", image: "maple" },
]

const Shop = () => {
  const [size, setSize] = React.useState()
  const [wood, setWood] = React.useState()

  const [canGotoPayment, setCanGotoPayment] = React.useState(false)

  React.useEffect(() => {
    setCanGotoPayment(size != null && wood != null)
  }, [size, wood])

  return (
    <>
      <ChooseSize sizes={sizes} value={size} onChange={setSize} />
      <ChooseWood woods={woods} value={wood} onChange={setWood} />
      <GotoPayment
        enabled={canGotoPayment}
        size={size != null ? sizes[size] : null}
        wood={wood != null ? woods[wood] : null}
      />
    </>
  )
}

Shop.propTypes = {}

Shop.defaultProps = {}

export default Shop

import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow.jsx";
import { ProductRow } from "./components/products/ProductRow.jsx";
import { useState } from "react"

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

function App() {


  return <>
    <h1>React.js : Liste de produit</h1>
    <div className="container my-3">
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </div>
  </>
}

function SearchBar() {
  return <div>
    <div className="mb-3">
      <Input value="" onChange={() => null} placeholder="Rechercher..." />
      <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher que les produits en stock" />
    </div>
  </div>
}

function ProductTable({ products }) {

  const rows = []
  let lastCategory = null

  for (let product of products) {

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />)
    }
    lastCategory = product.category
    rows.push(
      <ProductRow product={product} key={product.name} />
    )

  }

  return <table className="table">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}
export default App

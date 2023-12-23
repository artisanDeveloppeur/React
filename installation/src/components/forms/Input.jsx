import { useId } from "react"

/**
 * @param {string} placeholder
 * @param {string} label
 * @param {string} value
 * @param {(s: string) => void} onChange
 */
export function Input({ label, placeholder, value, onChange }) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
            id={id}
            type="text"
            className="form-control"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}

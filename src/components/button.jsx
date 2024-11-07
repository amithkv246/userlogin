export default function Button({ label, onClick }) {
    return (
        <button className="fw-bold btn btn-primary mb-4 w-100" onClick={onClick}>{label}</button>
    )
}
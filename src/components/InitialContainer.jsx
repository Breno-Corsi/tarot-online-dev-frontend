export default function InitialContainer({ appears, children }) {
    return (
        <div 
            className={appears ? "container" : "container out"}
        >
            {children}
        </div>
    );
}

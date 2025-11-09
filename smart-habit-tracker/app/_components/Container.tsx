export default function Container({children}:{children : React.ReactNode}) {
    return <div className="mx-auto max-w-3xl px-4 py-10">{children}</div>;
}
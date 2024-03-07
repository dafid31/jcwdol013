interface BiodataCardProps {
    label: string; // Assuming label is of type string, change it accordingly
    value: string; // You might want to replace 'any' with the actual type of 'value'
    icons: React.ReactNode; // You might want to replace 'any[]' with the actual type of 'icons'
    link: string; // Assuming link is of type string, change it accordingly
  }

export default function BiodataCard({ label, value, icons, link }:BiodataCardProps){


    const handleLink = ()=>{
        window.open(link)
    }

    return (
        <div className="w-full flex flex-col gap-1 relative">
            <h1 className="text-[16px] font-light"> {label} </h1>
            <p className="text-[16px] font-bold max-w-[70%]"> {value} </p>

            <div className="absolute right-0 top-[30%]" onClick={handleLink}>
                <a href="#">{icons}</a>
            </div>
        </div>
    )
}
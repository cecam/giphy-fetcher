const GiffLayout = ({elements}) => {
    console.log(elements);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {elements.map((element, i) => (
                <div className="relative cursor-pointer" key={i} >
                    <img src={element.images.original.url} alt={element.title} className="rounded-lg object-cover w-full h-full" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-75 rounded-lg">
                        <h3 className="text-lg font-bold">{element.title}</h3>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default GiffLayout;
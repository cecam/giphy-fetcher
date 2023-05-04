const SearchForm = ({text, setText}) => {
    return (
        <div className="flex items-center justify-center mb-8 w-1/3">
            <input 
                placeholder="Search a giff"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="w-full sm:w-1/2 md:w-1/3 px-4 py-2 rounded-lg bg-gray-100 mr-2 focus:outline-none focus:shadow-outline"
            />
        </div>
    )
}

export default SearchForm;
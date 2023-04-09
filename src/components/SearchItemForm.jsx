import Icon from "../ui/Icon";


function SearchItemForm({onSearchItemSubmit,searchQuery,placeholder,onChange}) {
        return (
                <form  onSubmit={onSearchItemSubmit}>
                    <input
                        type="search"
                        placeholder={placeholder}
                        maxLength={50}
                        value={searchQuery}
                        onChange={onChange}
                    />
                    <Icon iconName={"magnifying-glass"} extra="search-icon" />
                    <button type="submit">SEARCH</button>
               </form>
        )
}

export default SearchItemForm
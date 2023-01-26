

export const Header = () => {
    return (
        <div>
        <div className='header'>
        <h1>This is Jane's Kitchen</h1>
        </div>
        <div className='category_container'>
          {/* {filtercategories.map((category) => {
            return(
              <div className='buttonss'>
                <button
                type="button"
                className={`${activefiltercategory === category?'filter-btn-active': 'filter-btn'}`}
                onClick={() => filteritems(category)}>
                {category}</button>
              </div>
            );
          })} */}
          <button className='filter-btn-active'>Menu</button>
          <button className='filter-btn'>About</button>
          <button className='filter-btn'>Contact</button>
        </div>
        </div>
    )
}
const CategoryTabs = ({categories, activeTab, changeTab}) => (
  <div className="tabs-container">
    {categories.map((each, index) => (
      <button
        key={each.menu_category_id}
        type="button"
        className={`tab-btn ${activeTab === index ? 'active-tab' : ''}`}
        onClick={() => changeTab(index)}
      >
        {each.menu_category}
      </button>
    ))}
  </div>
)

export default CategoryTabs

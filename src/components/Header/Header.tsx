export default function Header() {
  return (
    <header className="sub-header">
      <div className="header-container">
        <a href="#" className="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span className="desktop">See all properties</span>
        </a>
        <div className="action-buttons">
          <button className="btn-secondary share-btn">
            <i className="fa fa-share-alt"></i>
            <span className="desktop-only">Share</span>
          </button>
          <button className="save" aria-label="Save property">
            <svg className="heart-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="desktop-only">Save</span>
          </button>
        </div>
      </div>
    </header>
  );
}

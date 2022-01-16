//rafce

const Header = ({ title }) => {
    return (
        <nav className="header">
            <h1> {title} <span>Tracker</span></h1>
        </nav>
    )
}

export default Header

Header.defaultProps = {
    title: 'Weather ',
}


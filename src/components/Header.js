import PropTypes from "prop-types";

const Header = ({ title }) => {
    return <header>{title}</header>;
};

Header.defaultProps = {
    title: "Tasks Scheduler",
};

Header.prototype = {
    title: PropTypes.string.isRequired,
};

export default Header;
